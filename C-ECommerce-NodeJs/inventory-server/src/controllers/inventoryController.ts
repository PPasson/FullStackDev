const prisma = require("../prisma/prisma");

const inventoryController = {
  async importProduct(req: any, res: any){
    //todo import function
  },

  async getAllProducts(req: any, res: any) {
    try {
      const products = await prisma.product.findMany();
      await prisma.$disconnect();
      res.status(200).json({code: 200, message: "success", data: products});
    } catch (err) {
      console.error(err);
      res.status(500).json({ code: 500, message: "Internal server error" });
    }
  },

  async getProductById(req: any, res: any) {
    try {
      const { id } = req.params;
      const product = await prisma.product.findUnique({
        where: {
          id: parseInt(id),
        },
      });

      await prisma.$disconnect();
      if(!product){
        res.status(404).json({ code: 404, message: "Inventory not found" });
      }
      res.status(200).json({ code: 200, message: "success", data: product });      

    } catch (err) {
      console.error(err);
      res.status(500).json({ code: 500, message: "Internal server error" });
    }
  },

  async updateProduct(req: any, res: any){
    //to do
  }
};

export default inventoryController;
