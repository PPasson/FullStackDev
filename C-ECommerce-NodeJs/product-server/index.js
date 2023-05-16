import express from 'express';
import productRouter from './routes/productRouter';

const app = express();
const port = 3000;

app.use('/product', productRouter);

app.listen(port, () => {
  console.log(`Product server listening at http://localhost:${port}`);
});