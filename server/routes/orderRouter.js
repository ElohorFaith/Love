import express from 'express';
import orderController from '../controllers/orderController';

const router = express.Router();

// get all orders
router.get('/orders', orderController.getOrders);

// get an order
router.get('/orders/:id', orderController.getOneOrder);

export default router;
