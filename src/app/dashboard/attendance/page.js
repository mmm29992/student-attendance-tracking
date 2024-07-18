"use client";
import GradeSelection from "@/app/_components/GradeSelection";
import MonthSelection from "@/app/_components/MonthSelection";
import { GetAttendanceList } from "@/app/_services/GlobalApi";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function Attendance() {
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedGrade, setSelectedGrade] = useState();
  const [attendanceList, setAttendanceList] = useState([]);

  const onSearchHandler = async () => {
    console.log(selectedMonth, selectedGrade);

    const response = await GetAttendanceList(selectedGrade, selectedMonth);
    console.log(response);
  };
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Attendance</h2>
      {/*Search option*/}

      <div className="flex gap-5 my-5 p-5 border rounded-lg shadow-sm">
        <div className="flex gap-2 items-center">
          <label>Select Month:</label>
          <MonthSelection selectedMonth={(value) => setSelectedMonth(value)} />
        </div>

        <div className="flex gap-2 items-center">
          <label>Select Grade:</label>
          <GradeSelection selectedGrade={(v) => setSelectedGrade(v)} />
        </div>
        <Button onClick={() => onSearchHandler()}>Search</Button>
      </div>

      {/*Student attendance grid*/}
    </div>
  );
}
