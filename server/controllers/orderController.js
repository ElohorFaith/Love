import orders from '../models/orders';

// get orders
const getOrders = (req, res) => res.status(200).send({
  orders,
  message: 'orders was fetched successfully',
});

// get one order
const getOneOrder = (req, res) => {
  const singleOrder = orders.find(order => order.id === parseInt(req.params.id, 10));
  if (!singleOrder) {
    res.status(404).send({
      error: 'Order with the given Id not found.',
    });
  }
  res.status(200).send({
    order: singleOrder,
    message: 'Order successful',
  });
};
export default {
  getOrders,
  getOneOrder,
};
