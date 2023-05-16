import express, { Router } from 'express';
import { getAllInventory, getInventoryById } from '../controllers/inventoryController';

const router: Router = express.Router();

router.get('/', getAllInventory);
router.get('/:id', getInventoryById);

export default router;
