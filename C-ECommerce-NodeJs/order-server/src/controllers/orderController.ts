const prisma = require("../prisma/prisma");
import axios from 'axios';

const orderController = {
  async addNewOrder(req: any, res: any) {
    const { productId, productName, QTY, orderStatus } = req.body;

    try {
      const INVENTORY_URL = process.env.INVENTORY_SERVER_URL;
      const findProduct:any = axios.get(`${INVENTORY_URL}/inventory/product/${productId}`);
      
      //check if we have the product or not
      if(!findProduct){
        throw new Error('Product not found!')
      }
      
      //check stock in inventory
      if(findProduct.QTY < QTY){
        throw new Error('Not enough stock!')
      }

      //calculate total price
      const totalPrice = QTY * findProduct.price;

      //if pass all check then create new order
      const newOrder = await prisma.order.create({
        data: {
          productId: productId,
          productName: productName,
          totalPrice: totalPrice,
          orderStatus: orderStatus,
        },
      });

      //update inventory stock
      /*
        todo 
      */

      await prisma.$disconnect();
      return res.status(201).json({ code: 201, message: "success", data: newOrder });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ code: 500, message: "Internal server error" });
    }
  },

  async getAllOrders(req: any, res: any) {
    try {
      const orders = await prisma.order.findMany();
      await prisma.$disconnect();
      return res.status(200).json({ code: 200, message: "success", data: orders });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ code: 500, message: "Internal server error" });
    }
  },

  async getOrderById(req: any, res: any) {
    try {
      const { id } = req.params;
      const order = await prisma.order.findUnique({
        where: {
          id: parseInt(id),
        },
      });

      await prisma.$disconnect();
      if (!order) {
        res.status(404).json({ code: 404, message: "Order not found" });
      }
      res.status(200).json({ code: 200, message: "success", data: order });
    } catch (err) {
      console.error(err);
      res.status(500).json({ code: 500, message: "Internal server error" });
    }
  },
};

export default orderController;
