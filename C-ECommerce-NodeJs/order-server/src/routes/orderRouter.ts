const router = require("express").Router();
import orderController  from '../controllers/orderController';

router.post('/', orderController.addNewOrder);
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);


export default router;