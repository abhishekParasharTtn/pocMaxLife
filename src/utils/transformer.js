export const transformer = {
    removeDataAttributes : function(dataInput) {
    const transformObject = function(rootObject) {
        const loopObject = function(object) {
            Object.keys(object).forEach(function(key) {
                if (object[key] && object[key].length && Array.isArray(object[key])) {
                    transformer.removeDataAttributes(object[key]);
                } else if (object[key] && object[key].data && object[key].data.attributes) {
                    object[key] = {
                        ...object[key],
                        ...object[key].data.attributes,
                    };
                    delete object[key].data;

                    if (typeof object[key] !== 'string' && Object.keys(object[key]).length) {
                        loopObject(object[key]);
                    }
                } else if (
                    typeof object[key] !== 'string' &&
                    object[key] &&
                    Object.keys(object[key]).length
                ) {
                    loopObject(object[key]);
                }
            });
        };
        loopObject(rootObject);
    };

    if (Array.isArray(dataInput) && dataInput.length) {
        dataInput.forEach(function(object) {
            transformObject(object);
        });
    } else if (Object.keys(dataInput).length) {
        transformObject(dataInput);
    }
    return dataInput;
}
};