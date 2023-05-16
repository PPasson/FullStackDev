const prisma = require("../prisma/prisma");

const productController = {
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
        res.status(404).json({ code: 404, message: "Product not found" });
      }
      res.status(200).json({ code: 200, message: "success", data: product });      

    } catch (err) {
      console.error(err);
      res.status(500).json({ code: 500, message: "Internal server error" });
    }
  },
};

export default productController;
