import axios from "axios";
import { getAllEndpoints, getBaseURL } from "Config/endpoints";
import cloneDeep from "lodash/cloneDeep";
import AuthDetails from "Config/authHeaders";

function Network() {
  this.endpoints = getAllEndpoints();
  this.baseURL = getBaseURL();
  this.url = "";
  this.transformRequest = (data = {}) => {
    return Object.entries(data)
      .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
      .join("&");
  };
  this.setBaseURL = () => {
    this.instance.defaults.headers["X-ORGANIZATION-NAME"] = AuthDetails;
  };
  this.instance = axios.create({
    baseURL: this.baseURL,
    timeout: 60000,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "X-ORGANIZATION-NAME": null,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return this;
}

Network.prototype.convertToJsonString = function (request) {
  return { jsonString: JSON.stringify(request) };
};

Network.prototype.api = function (url) {
  this.setBaseURL();
  if (url) {
    this.url = this.endpoints[url];
  } else {
    this.url = "";
  }

  return this;
};

const replacePathParams = (url, params) => {
  params.forEach((p, index) => {
    if (url.indexOf("path" + (index + 1)) > -1) {
      url = url.replace("path" + (index + 1), p);
    } else {
      url += `/${p}`;
    }
  });
  return url;
};

const replaceQueryParams = (url, params) => {
  if (url && params) {
    const urlParamsArray = Object.keys(params);
    urlParamsArray.forEach((q) => {
      if (url.indexOf(q) > -1) {
        url = url.replace(q + "=", q + "=" + params[q]);
      }
    });
  }
  return url;
};

Network.prototype.apiWithPath = function (url, params) {
  this.setBaseURL();
  if (url) {
    this.url = this.endpoints[url];
    this.url = replacePathParams(this.url, params);
  } else {
    this.url = "";
  }

  return this;
};

/**
 * This method add the path parameter value in url.
 * Name should be same of path parameter as mentiond in endpoint.js
 */
Network.prototype.apiWithQuery = function (url, params) {
  this.setBaseURL();
  if (url) {
    this.url = this.endpoints[url];
    this.url = replaceQueryParams(this.url, params);
  } else {
    this.url = "";
  }
  return this;
};

Network.prototype.apiWithPathAndQuery = function (
  url,
  pathParams,
  queryParams
) {
  this.setBaseURL();
  if (url) {
    this.url = this.endpoints[url];
    this.url = replacePathParams(this.url, pathParams);
    this.url = replaceQueryParams(this.url, queryParams);
  } else {
    this.url = "";
  }
  return this;
};

Network.prototype.get = function (params) {
  const instance = cloneDeep(this.instance);
  return instance.get(this.url, { params });
};

Network.prototype.post = function (data, headers) {
  const instance = cloneDeep(this.instance);

  return instance.post(this.url, this.transformRequest(data), {
    headers: { ...headers, ...instance.defaults.headers },
  });
};
Network.prototype.put = function (data, headers) {
  const instance = cloneDeep(this.instance);
  return instance.put(this.url, this.transformRequest(data), {
    headers: { ...headers, ...instance.defaults.headers },
  });
};
Network.prototype.delete = function () {
  const instance = cloneDeep(this.instance);
  return instance.delete(this.url);
};

export default Network;
