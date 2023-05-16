import express from 'express';
import inventoryRouter from './routes/inventoryRouter';

const app = express();
const port = 3000;

app.use('/inventory', inventoryRouter);

app.listen(port, () => {
  console.log(`Inventory server listening at http://localhost:${port}`);
});