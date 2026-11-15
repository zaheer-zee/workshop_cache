const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const cache = require('../middleware/cacheMiddleware');

router.get('/', cache, controller.getAllProducts);
router.get('/:id', cache, controller.getProductById);
router.post('/', controller.createProduct);
router.put('/:id', controller.updateProduct);
router.patch('/:id', controller.patchProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;
