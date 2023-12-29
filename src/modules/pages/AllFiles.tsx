import { Outlet, Route, Routes } from "react-router-dom";
import OperationToolbar from "../components/OperationToolbar/OperationToolbar";
import Finder from "../components/Finder/Finder";

const AllFiles = () => {
  return (
    <div>
      <OperationToolbar />
      <div className="mt-5">
        <Finder />
      </div>
    </div>
  );
};

export default AllFiles;
