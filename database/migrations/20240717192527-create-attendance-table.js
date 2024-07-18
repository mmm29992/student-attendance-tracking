"use strict";

/** @type {import('sequelize-cli').migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("attendance", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      studentId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      present: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      day: {
        type: Sequelize.INTEGER,
        allowNull: true, // Adjust as per your requirements
      },
      date: {
        type: Sequelize.STRING(7), // Adjusted to store MM/YYYY
        allowNull: false,
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
    await queryInterface.dropTable("attendance");
  },
};
