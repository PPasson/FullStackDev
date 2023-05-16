const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const productRouter = require("./src/routes/productRouter")
const PORT = process.env.PRODUCT_SERVER_PORT || 3000;
const app = express();

app.use("/products", productRouter);

// Index Path
app.get("/", (req, res) => {
  res.send("Hello from PRODUCT server!");
});

app.listen(PORT, () => {
  console.log(`Product server listening at http://localhost:${PORT}`);
});
