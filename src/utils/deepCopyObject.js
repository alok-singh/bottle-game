export const deepCopy = (value, retObject = {}) => {
  if (Array.isArray(value)) {
    retObject = value.map(item => {
      return deepCopy(item, {});
    });
  } else if (typeof value === "object" && value !== null) {
    Object.keys(value).forEach(key => {
      retObject[key] = deepCopy(value[key], {});
    });
  } else {
    return value;
  }
  return retObject;
};
