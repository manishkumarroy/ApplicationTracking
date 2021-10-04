const getUrl = function (url, params) {
  if (url && params) {
    const urlParamsArray = Object.keys(params);
    urlParamsArray.forEach((q) => {
      if (url.indexOf(q) > -1) {
        url = url.replace(q, params[q]);
      }
    });
  }
  return url;
};

module.exports = {
  URL_DASHBOARD: "/",
  URL_PANELIST: "/panelist",
  URL_JOBS: "/opening",
  URL_CONTACTUS: "/contactus",
  URL_DESCRIPTION: "/description",
  URL_APPLY: "/apply",
  URL_VIEW: "/view",
  URL_LOGIN: "/login",

  routeTo: (url, history, params) => {
    history.push(getUrl(url, params));
  },
};
