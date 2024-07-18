"use strict";

/** @type {import('sequelize-cli').migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("students", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      grade: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(50),
      },
      contact: {
        type: Sequelize.STRING(11),
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("students");
  },
};
