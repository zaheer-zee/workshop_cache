const db = require('../database/db');
const cache = require('./cacheService');

const getAll = async () => await db.readData();

const getById = async (id) => {
    const products = await db.readData();
    return products.find(p => p.id == id);
};

const create = async (item) => {
    const products = await db.readData();
    const newItem = { id: Date.now(), ...item };
    products.push(newItem);
    await db.writeData(products);
    cache.clear();
    return newItem;
};

const update = async (id, item) => {
    const products = await db.readData();
    const idx = products.findIndex(p => p.id == id);
    if (idx === -1) return null;
    products[idx] = { id: Number(id), ...item };
    await db.writeData(products);
    cache.clear();
    return products[idx];
};

const patch = async (id, item) => {
    const products = await db.readData();
    const idx = products.findIndex(p => p.id == id);
    if (idx === -1) return null;
    products[idx] = { ...products[idx], ...item, id: Number(id) };
    await db.writeData(products);
    cache.clear();
    return products[idx];
};

const remove = async (id) => {
    const products = await db.readData();
    const idx = products.findIndex(p => p.id == id);
    if (idx === -1) return null;
    const [deleted] = products.splice(idx, 1);
    await db.writeData(products);
    cache.clear();
    return deleted;
};

module.exports = { getAll, getById, create, update, patch, remove };
