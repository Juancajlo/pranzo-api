"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    static associate({ Order, DishOrder }) {
      this.belongsToMany(Order, {
        foreignKey: "dishId",
        through: DishOrder,
        as: "dishes",
      });
    }
  }
  Dish.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      dishPicture: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "Dish",
    }
  );
  return Dish;
};
