import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DeleteStudentRecord } from "@/app/_services/GlobalApi";
import { toast } from "sonner";

const pagination = true;
const paginationPageSize = 10;
const paginationPageSizeSelector = [25, 50, 100];

export default function StudentListTable({ studentList, refreshData }) {
  // Column Definitions: Defines the columns to be displayed.
  const CustomButtons = (props) => {
    return (
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant="destructive">
            <Trash />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              record and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => DeleteRecord(props?.data?.id)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  const [colDefs, setColDefs] = useState([
    { field: "id", filter: true },
    { field: "name", filter: true },
    { field: "grade", filter: true },
    { field: "address", filter: true },
    { field: "contact", filter: true },
    { field: "action", cellRenderer: CustomButtons },
  ]);

  // Row Datta: The data to be displayed.
  const [rowData, setRowData] = useState();
  const [searchInput, setSearchInput] = useState();
  useEffect(() => {
    studentList && setRowData(studentList);
  }, [studentList]);

  const DeleteRecord = (id) => {
    DeleteStudentRecord(id)
      .then((resp) => {
        if (resp) {
          toast("Record deleted successfully!");
          refreshData();
        }
      })
      .catch((error) => {
        console.error("Error deleting record:", error);
        toast("Failed to delete record!");
      });
  };

  return (
    <div className="my-7">
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <div className="p-2 rounded-lg border shadow-sm flex gap-2 mb-4 max-w-sm">
          <Search />
          <input
            type="text"
            placeholder="Search on Anything..."
            className="outline-none w-full"
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </div>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={pagination}
          quickFilterText={searchInput}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
    </div>
  );
}
