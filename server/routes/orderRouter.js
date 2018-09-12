import express from 'express';
import orderController from '../controllers/orderController';

const router = express.Router();

// get all orders
router.get('/orders', orderController.getOrders);

// get an order
router.get('/orders/:id', orderController.getOneOrder);

// post an order
router.post('/orders', orderController.postOrder);

// edit an order
router.put('/orders/:id', orderController.editOneOrder);

export default router;
