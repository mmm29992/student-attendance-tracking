import Student from "@/models/Student"; // Import your Sequelize Student model
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const data = await req.json(); // Parse JSON data from request body

    // Prepare data for insertion
    const studentData = {
      name: data?.name,
      grade: data?.grade,
      address: data?.address,
      contact: data?.contact,
      // Add more fields as needed based on your Student model
    };

    // Insert new student record into database using Sequelize
    const newStudent = await Student.create(studentData);

    console.log("New student created:", newStudent instanceof Student); // Confirm creation
    console.log("Student details:", newStudent.toJSON()); // Display student details

    // Return response with newly created student object
    return new Response(JSON.stringify(newStudent.toJSON()), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating student:", error);
    // Handle error response
    return new Response(JSON.stringify({ error: "Error creating student" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(req, res) {
  try {
    const students = await Student.findAll();
    return new Response(JSON.stringify(students), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching students:", error);
    return new Response(JSON.stringify({ error: "Error fetching students" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(req) {
  try {
    const searchParams = new URL(req.url).searchParams;
    const studentId = searchParams.get("id");

    if (!studentId) {
      return NextResponse.json(
        { error: "Student ID is required" },
        { status: 400 }
      );
    }

    // Find the student by ID
    const student = await Student.findByPk(studentId);

    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    // Delete the student
    await student.destroy();

    // Return success response
    return NextResponse.json(
      { message: "Student deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting student:", error);
    // Handle error response
    return NextResponse.json(
      { error: "Error deleting student" },
      { status: 500 }
    );
  }
}
