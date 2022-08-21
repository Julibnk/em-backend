import express from 'express';
import categoryRouter from './category-router';

const routerV1 = express.Router();

routerV1.use('/categories', categoryRouter);

export default routerV1;
