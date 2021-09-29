const setNamespace = (namespace) => (constant) => {
  return `${namespace}/${constant}`;
};

const uniqKey = (key) => {
  return (key || "").replace(/[^a-zA-Z0-9]/g, "-");
};

export { setNamespace, uniqKey };
