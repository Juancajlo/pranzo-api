"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Account, Order }) {
      this.hasMany(Account, {
        foreignKey: "userId",
        as: "accounts",
        onDelete: "CASCADE",
        hooks: true,
      });
      this.hasMany(Order, {
        foreignKey: "userId",
        as: "orders",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
