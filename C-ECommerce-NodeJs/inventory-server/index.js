const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const PORT = process.env.INVENTORY_SERVER_PORT || 3000;

//Router
app.use("/inventory", require("./src/routes/inventoryRouter"));

// Index Path
app.get("/", (req, res) => {
  res.send("Hello from INVENTORY server!");
});

app.listen(PORT, () => {
  console.log(`Inventory server listening at http://localhost:${PORT}`);
});
