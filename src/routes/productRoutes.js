const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rutas para productos
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.get('/available', productController.getAvailableProducts);

module.exports = router;
