"use client";
import { getAllGrades } from "../_services/GlobalApi";
import { useState, useEffect } from "react";

export default function GradeSelection({selectedGrade}) {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    GetAllGradesList();
  }, []);

  const GetAllGradesList = async () => {
    try {
      const grades = await getAllGrades();
      setGrades(grades);
    } catch (error) {
      console.error("Failed to fetch grades:", error);
    }
  };
  return (
    <div>
      <select
        className="p-2 border rounded-lg"
        onChange={(e) => selectedGrade(e.target.value)}
      >
        {grades.map((item, index) => (
          <option key={index} value={item.grade}>
            {item.grade}
          </option>
        ))}
      </select>
    </div>
  );
}
