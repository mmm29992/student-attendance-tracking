import { Model, DataTypes } from "sequelize";
import sequelize from "@/app/db_connection";

class Grade extends Model {}

Grade.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    grade: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    // Add more fields as needed
  },
  {
    sequelize,
    modelName: "Grade", // Optional: You can specify the model name explicitly
    tableName: "grades",
    createdAt: "created_at", // Example of timestamps, adjust as needed
    updatedAt: "updated_at",
  }
);

export default Grade