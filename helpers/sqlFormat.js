module.exports = (obj) => {
    return Object.entries(obj).reduce((acc, [k, v]) => {
        acc[k] = (typeof v === "string")
            ? v.replaceAll("'", "\\'")
            : v;
        return acc;
    }, {});
};