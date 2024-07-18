import Attendance from "@/models/Attendance";
import Student from "@/models/Student";
import { NextResponse } from "next/server";
import { Op } from "sequelize"; // Import Sequelize operators

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const grade = searchParams.get("grade");
    const month = searchParams.get("month");

    // Log query parameters for debugging
    console.log("Grade:", grade);
    console.log("Month:", month);

    const result = await Student.findAll({
      attributes: ["name", "grade", "id"],
      where: {
        grade: grade,
      },
      include: [
        {
          model: Attendance,
          attributes: ["present", "day", "date", "id"],
          where: {
            date: {
              [Op.like]: `${month}%`, // Use wildcard matching for the month
            },
          },
          required: true, // Ensures only students with attendance records are included
        },
      ],
    });

    // Log the raw result for debugging
    console.log("Raw Result:", JSON.stringify(result, null, 2));

    // Formatting the response to match your structure
    const formattedResult = result.map((student) => ({
      name: student.name,
      grade: student.grade,
      studentId: student.id,
      attendance: student.Attendances.map((attendance) => ({
        present: attendance.present,
        day: attendance.day,
        date: attendance.date,
        attendanceId: attendance.id,
      })),
    }));

    // Log the formatted result for debugging
    console.log("Formatted Result:", JSON.stringify(formattedResult, null, 2));

    return NextResponse.json(formattedResult);
  } catch (error) {
    console.error("Error fetching attendance records:", error);
    return NextResponse.json(
      { error: "Error fetching attendance records" },
      { status: 500 }
    );
  }
}
