"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Dish, DishOrder }) {
      this.belongsTo(User, { foreignKey: "userId", as: "order" });
      this.belongsToMany(Dish, {
        foreignKey: "orderId",
        through: DishOrder,
        as: "orders",
      });
    }
  }
  Order.init(
    {
      shippingAddress: DataTypes.STRING,
      shippingName: DataTypes.STRING,
      shippingContact: DataTypes.INTEGER,
      shippingDay: DataTypes.DATEONLY,
      transferCode: DataTypes.STRING,
      transferName: DataTypes.STRING,
      transferPicture: DataTypes.STRING,
      transferDay: DataTypes.DATEONLY,
      orderDetails: DataTypes.STRING,
      orderConfirmed: DataTypes.BOOLEAN,
      orderShipped: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
