import { Request, Response } from 'express';

const inventories = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' }
];

export const getAllInventory = (req: Request, res: Response) => {
  res.json(inventories);
};

export const getInventoryById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const inventory = inventories.find(p => p.id === id);
  if (inventory) {
    res.json(inventory);
  } else {
    res.status(404).json({ error: 'Inventory not found' });
  }
};
