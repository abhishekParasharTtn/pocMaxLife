export const transformer = {
  removeDatakeys: function (obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map(transformer.removeDatakeys);
    }
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (key === "data" || key === "attributes") {
        if (Array.isArray(value)) {
          return [...transformer.removeDatakeys(value)];
        }
        return { ...acc, ...transformer.removeDatakeys(value) };
      }
      return { ...acc, [key]: transformer.removeDatakeys(value) };
    }, {});
  },
};
