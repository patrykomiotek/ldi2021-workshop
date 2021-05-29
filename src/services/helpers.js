const replaceValues = (str, params) => str.replace(/\{(.*?)\}/g, (m, g1) => `${params[g1] || m}`);

export const prepareUri = (uri, params = {}) => {
  return replaceValues(uri, params);
};
