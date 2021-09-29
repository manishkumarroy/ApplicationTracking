import React from "react";
import moment from "moment";
import isEmpty from "lodash/isEmpty";
import { DATE_FORMAT, TIME_FORMAT, DATETIME_FORMAT } from "Config/constants";

const getValue = (formData, mapping) => {
  if (!isEmpty(formData)) {
    return mapping.reduce((value, entry) => {
      return value ? value[entry] : null;
    }, formData);
  }
  return null;
};

const getNestedObjectKey = (formData, mapping) => {
  const lastKey = mapping.splice(-1);
  const nestedObj = mapping.reduce((value, entry) => value[entry], formData);
  return { lastKey, nestedObj };
};

const modifyDateTimeInForm = (
  formData,
  mapping,
  type = "date",
  convertTo = "moment"
) => {
  if (!isEmpty(formData)) {
    const { lastKey, nestedObj } = getNestedObjectKey(formData, mapping);
    if (!nestedObj[lastKey]) {
      return null;
    }
    switch (type) {
      case "time": {
        if (convertTo === "moment") {
          nestedObj[lastKey] = moment(nestedObj[lastKey], TIME_FORMAT);
        } else if (convertTo === "string") {
          nestedObj[lastKey] = nestedObj[lastKey].format(TIME_FORMAT);
        }
        break;
      }
      case "date": {
        if (convertTo === "moment") {
          nestedObj[lastKey] = moment(nestedObj[lastKey], DATE_FORMAT);
        } else if (convertTo === "string") {
          nestedObj[lastKey] = nestedObj[lastKey].format(DATE_FORMAT);
        }
        break;
      }
      case "datetime": {
        if (convertTo === "moment") {
          nestedObj[lastKey] = moment(nestedObj[lastKey]).toDate();
        } else if (convertTo === "string") {
          nestedObj[lastKey] = nestedObj[lastKey].format(DATETIME_FORMAT);
        }
        break;
      }
    }
    return nestedObj[lastKey];
  }
  return null;
};

const setFormTimePickerToMoment = (formData, mapping) => {
  return modifyDateTimeInForm(formData, mapping, "time", "moment");
};

const setFormTimePickerToString = (formData, mapping) => {
  return modifyDateTimeInForm(formData, mapping, "time", "string");
};

const setFormDatePickerToMoment = (formData, mapping) => {
  return modifyDateTimeInForm(formData, mapping, "date", "moment");
};

const setFormDatePickerToString = (formData, mapping) => {
  return modifyDateTimeInForm(formData, mapping, "date", "string");
};

const timePickerToMoment = (time) => {
  if (!isEmpty(time)) {
    return moment(time, TIME_FORMAT);
  }
  return null;
};

const timePickerToString = (time) => {
  if (!isEmpty(time)) {
    return time.format(TIME_FORMAT);
  }
  return null;
};

const dateFormatUI = (date, type = "*") => {
  if (!date) {
    return "-";
  }
  switch (type) {
    // Date formats
    case "d*": {
      return moment(date, DATE_FORMAT).format("MMM DD, YYYY");
    }
    // Time formats
    case "T*": {
      return moment(date, TIME_FORMAT).format("HH:mm");
    }
    case "t*": {
      return moment(date, TIME_FORMAT).format("h:mm A");
    }
    case "*":
    default: {
      return <span>{moment(date).format(DATETIME_FORMAT)}</span>;
    }
  }
};

export {
  getValue,
  setFormTimePickerToMoment,
  setFormTimePickerToString,
  timePickerToMoment,
  timePickerToString,
  setFormDatePickerToMoment,
  setFormDatePickerToString,
  dateFormatUI,
};
