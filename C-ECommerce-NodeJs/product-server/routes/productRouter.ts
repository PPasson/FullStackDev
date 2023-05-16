// product-server/src/routes/productsRouter.ts
import express, { Router } from 'express';
import { getAllProducts, getProductById } from '../controllers/productController';

const router: Router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);

export default router;
