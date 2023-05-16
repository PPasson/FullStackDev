// product-server/src/routes/productsRouter.ts
import express, { Router } from 'express';
import { getAllOrder, getOrderById } from '../controllers/orderController';

const router: Router = express.Router();

router.get('/', getAllOrder);
router.get('/:id', getOrderById);

export default router;
