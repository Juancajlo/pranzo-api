"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      shippingAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shippingName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shippingContact: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shippingDay: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      transferCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      transferName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      transferPicture: {
        type: Sequelize.BLOB,
        allowNull: false,
      },
      transferDay: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      orderDetails: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderConfirmed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      orderShipped: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "Users",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Orders");
  },
};
