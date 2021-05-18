"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Accounts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      holder: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      identification: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      accountNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      accountEmail: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Accounts");
  },
};
