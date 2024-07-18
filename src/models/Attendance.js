import { Model, DataTypes } from "sequelize";
import sequelize from "@/app/db_connection";
import Student from "./Student";

class Attendance extends Model {}

Attendance.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    present: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: true, // Adjust as per your requirements
    },
    date: {
      type: DataTypes.STRING(7), // Adjusted to store MM/YYYY
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: "updated_at",
    },
  },
  {
    sequelize,
    modelName: "Attendance",
    tableName: "attendance",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Attendance.belongsTo(Student);
Student.hasMany(Attendance);

export default Attendance;
