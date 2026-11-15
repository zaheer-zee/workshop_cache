const cache = {};
const TTL = 60 * 1000; // 1 minute

const get = (key) => {
    const entry = cache[key];
    if (entry && (Date.now() - entry.createdAt < TTL)) {
        return entry.data;
    }
    delete cache[key];
    return null;
};

const set = (key, data) => {
    cache[key] = { data, createdAt: Date.now() };
};

const clear = () => {
    for (let key in cache) delete cache[key];
};

module.exports = { get, set, clear };
