const interpolate = (value, session = {}, options = {}) => {
    const leftDelimiter = options.leftDelimiter;
    const rightDelimiter = options.rightDelimiter;

    for (let key in session) {
        value = value.replace(leftDelimiter + key + rightDelimiter, session[key]);
    }
    value = value.replace(/[.*+^?${}()|[\]\\]+[A-Za-z]+[.*+^?${}()|[\]\\]+/g, "");
    return value;
};

module.exports = { interpolate }
