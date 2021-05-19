"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "userId", as: "account" });
    }
  }
  Account.init(
    {
      name: DataTypes.STRING,
      holder: DataTypes.STRING,
      identification: DataTypes.INTEGER,
      accountNumber: DataTypes.BIGINT,
      accountEmail: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Account",
    }
  );
  return Account;
};
