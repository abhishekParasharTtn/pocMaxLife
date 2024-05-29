export const transformer = {
  removeDataAttributes: function (obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(transformer.removeDataAttributes);
    }

    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (key === "data" || key === "attributes") {
        return { ...acc, ...transformer.removeDataAttributes(value) };
      }

      if (key === "0") {
        return { ...acc, ...transformer.removeDataAttributes(value) };
      }

      return { ...acc, [key]: transformer.removeDataAttributes(value) };
    }, {});
  },
};
