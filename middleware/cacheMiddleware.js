const cache = require('../services/cacheService');

const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl;
    const cachedData = cache.get(key);

    if (cachedData) {
        res.setHeader('X-Cache', 'HIT');
        return res.json(cachedData);
    }

    res.setHeader('X-Cache', 'MISS');
    const sendJson = res.json.bind(res);
    res.json = (body) => {
        cache.set(key, body);
        return sendJson(body);
    };

    next();
};

module.exports = cacheMiddleware;
