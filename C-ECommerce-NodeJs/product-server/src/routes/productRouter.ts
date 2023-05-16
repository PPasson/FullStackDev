// product-server/src/routes/productsRouter.ts
const router = require("express").Router();
const productController  =  require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

export default router;
