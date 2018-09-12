import orders from '../models/orders';

// get orders
const getOrders = (req, res) => res.status(200).send({
  orders,
  message: 'orders was fetched successfully',
});

export default {
  getOrders,
};
