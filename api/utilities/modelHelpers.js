replaceEmptyAttributes = data => {
  let attributes = {};

  Object.entries(data).forEach(([key, val]) => {
    if (typeof val === "string" && val.trim().length === 0) {
      attributes[key] = null;
    } else {
      attributes[key] = val;
    }
  });

  return attributes;
};

module.exports = replaceEmptyAttributes;
