import axios from "axios";

const getAllGrades = async () => {
  try {
    const response = await axios.get("/api/grades");
    return response.data;
  } catch (error) {
    console.error("Error fetching grades:", error);
    throw error;
  }
};

const getAllStudents = async () => {
  try {
    const response = await axios.get("/api/students");
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

const createNewStudent = async (data) => {
  try {
    const response = await axios.post("/api/students", data);
    return response.data;
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
};
const GetAttendanceList = (grade, month) =>
  axios.get("/api/attendances?grade=" + grade + "&month=" + month);

const DeleteStudentRecord = (id) => {
  return axios.delete("/api/students", {
    params: { id },
  });
};

export {
  getAllGrades,
  createNewStudent,
  getAllStudents,
  DeleteStudentRecord,
  GetAttendanceList,
};
