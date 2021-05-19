"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DishOrder extends Model {
    static associate({ Order, Dish }) {
      this.belongsTo(Order, { foreignKey: "orderId", as: "order" });
      this.belongsTo(Dish, { foreignKey: "dishId", as: "dish" });
    }
  }
  DishOrder.init(
    {
      orderId: DataTypes.INTEGER,
      dishId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DishOrder",
    }
  );
  return DishOrder;
};
