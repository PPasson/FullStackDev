import { Request, Response } from 'express';

const orders = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' }
];

export const getAllOrder = (req: Request, res: Response) => {
  res.json(orders);
};

export const getOrderById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const order = orders.find(p => p.id === id);
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
};
