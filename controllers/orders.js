const models = require("../models");
const Order = models.Order;

const createOrder = async (req, res) => {
  const {
    shippingAddress,
    shippingName,
    shippingContact,
    shippingDay,
    transferCode,
    transferName,
    transferPicture,
    transferDay,
    orderDetails,
    orderConfirmed,
    orderShipped,
    userId,
  } = req.body;
  try {
    const order = await Order.create({
      shippingAddress,
      shippingName,
      shippingContact,
      shippingDay,
      transferCode,
      transferName,
      transferPicture,
      transferDay,
      orderDetails,
      orderConfirmed,
      orderShipped,
      userId,
    });
    res.json({
      order,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        error,
        message: "Internal server error creating an order",
      },
    });
  }
};

module.exports = {
  createOrder,
};
