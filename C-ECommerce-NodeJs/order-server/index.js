import express from 'express';
import orderRouter from './routes/orderRouter';

const app = express();
const port = 3000;

app.use('/order', orderRouter);

app.listen(port, () => {
  console.log(`Order server listening at http://localhost:${port}`);
});