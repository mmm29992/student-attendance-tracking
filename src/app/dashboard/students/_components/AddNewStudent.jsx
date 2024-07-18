"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  getAllGrades,
  createNewStudent,
  getAllStudents,
} from "@/app/_services/GlobalApi";
import { toast } from "sonner";

export default function AddNewStudent(refreshData) {
  const [open, setOpen] = useState(false);
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const resp = await createNewStudent(data);
      console.log("--", resp);
      if (resp) {
        reset();
        setOpen(false);
        toast("New Student Added!");
      }
    } catch (error) {
      console.error("Error creating new student:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>+ Add New Student</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-2">
                  <label>Full Name</label>
                  <Input
                    placeholder="Ex. John Carry"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label>Select Grade</label>
                  <select
                    className="p-3 border rounded-lg"
                    {...register("grade", { required: true })}
                  >
                    {grades.map((item, index) => (
                      <option key={index} value={item.grade}>
                        {item.grade}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="py-2">
                  <label>Contact Number</label>
                  <Input
                    type="number"
                    placeholder="Ex. 9876543210"
                    {...register("contact")}
                  />
                </div>
                <div className="py-2">
                  <label>Address</label>
                  <Input
                    placeholder="Ex. 525 N Tryon Street, Athens, Ga 30188"
                    {...register("address")}
                  />
                </div>

                <div className="flex gap-2 items-center justify-end mt-5">
                  <Button
                    type="button"
                    onClick={() => setOpen(false)}
                    variant="ghost"
                  >
                    Cancel
                  </Button>

                  <Button type="submit" disabled={loading}>
                    {loading ? <LoaderIcon className="animate-spin" /> : "Save"}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
