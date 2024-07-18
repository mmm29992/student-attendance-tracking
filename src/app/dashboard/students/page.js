"use client";

import AddNewStudent from "./_components/AddNewStudent";
import { getAllStudents } from "@/app/_services/GlobalApi";
import { useEffect, useState } from "react";
import StudentListTable from "./_components/StudentListTable";

export default function Students() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    GetAllStudentsList();
  }, []);

  const GetAllStudentsList = async () => {
    try {
      const students = await getAllStudents();
      setStudentList(students);
    } catch (error) {
      console.error("Failed to fetch students:", error);
    }
  };

  return (
    <div className="p-7">
      <h2 className="font-bold text-2xl flex justify-between items-center">
        Students
        <AddNewStudent/>
      </h2>
      <StudentListTable
        studentList={studentList}
        refreshData={GetAllStudentsList}
      />
    </div>
  );
}
