export const transformer = {
  removeDatakeys: function (obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      if (obj.length === 1) {
        return transformer.removeDatakeys(obj[0]);
      }
      return obj.map(this.removeDatakeys);
    }

    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (key === "data" || key === "attributes" || key === "0") {
        // Merge properties of the nested object into the accumulator
        return { ...acc, ...transformer.removeDatakeys(value) };
      }
      // Recursively process other properties
      return { ...acc, [key]: transformer.removeDatakeys(value) };
    }, {});
  },

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
