const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const PORT = process.env.ORDER_SERVER_PORT || 3000;

//Router
app.use("/orders", require("./src/routes/orderRouter"));

// Index Path
app.get("/", (req, res) => {
  res.send("Hello from ORDER server!");
});

app.listen(PORT, () => {
  console.log(`Order server listening at http://localhost:${PORT}`);
});
