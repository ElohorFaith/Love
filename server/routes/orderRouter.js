import express from 'express';
import orderController from '../controllers/orderController';

const router = express.Router();

// get all orders
router.get('/orders', orderController.getOrders);


export default router;
