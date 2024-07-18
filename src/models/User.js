const { Model, DataTypes } = require("sequelize");
const sequelize = require("@/app/db_connection"); // Adjust path as per your project structure

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preferred_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User", // Optional: You can specify the model name explicitly
    tableName: "users",
    createdAt: "created_at", // Example of timestamps, adjust as needed
    updatedAt: "updated_at",
  }
);

module.exports = User;
