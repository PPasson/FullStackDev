const router = require("express").Router();
import inventoryController  from '../controllers/inventoryController';

router.post('/import', inventoryController.importProduct);
router.get('/', inventoryController.getAllProducts);
router.get('/product/:id', inventoryController.getProductById);
router.put('/products', inventoryController.updateProduct);


export default router;