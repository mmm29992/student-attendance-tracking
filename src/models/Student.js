import { Model, DataTypes } from "sequelize";
import sequelize from "@/app/db_connection";

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    grade: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: true, // Optional field
    },
    contact: {
      type: DataTypes.STRING(11),
      allowNull: true, // Optional field
    },
  },
  {
    sequelize,
    modelName: "Student", // Optional: You can specify the model name explicitly
    tableName: "students",
    createdAt: "created_at", // Example of timestamps, adjust as needed
    updatedAt: "updated_at",
  }
);

export default Student;
