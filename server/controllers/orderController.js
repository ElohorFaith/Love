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

// post order
const postOrder = (req, res) => {
  if (!req.body.name || !req.body.price || !req.body.status || !req.body.Date) {
    return {
      error: 'Please fill in the required field',
    };
  }
  const order = {
    id: orders.length + 1,
    name: req.params.name,
    price: req.params.price,
    status: req.params.status,
    Date: req.params.Date,
  };
  return res.status(201).send({
    newOrder: order,
    message: 'Created Successfully',
  });
};
export default {
  getOrders,
  getOneOrder,
  postOrder,
};
