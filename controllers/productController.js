const productService = require('../services/productService');

const getAllProducts = async (req, res) => {
    res.json(await productService.getAll());
};

const getProductById = async (req, res) => {
    const product = await productService.getById(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
};

const createProduct = async (req, res) => {
    const product = await productService.create(req.body);
    res.status(201).json(product);
};

const updateProduct = async (req, res) => {
    const product = await productService.update(req.params.id, req.body);
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
};

const patchProduct = async (req, res) => {
    const product = await productService.patch(req.params.id, req.body);
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
};

const deleteProduct = async (req, res) => {
    const product = await productService.remove(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.json({ message: 'Deleted', product });
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, patchProduct, deleteProduct };
