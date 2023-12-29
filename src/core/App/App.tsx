import Finder from "@/modules/components/Finder/Finder";
import OperationToolbar from "@/modules/components/OperationToolbar/OperationToolbar";
import SideBar from "@/modules/components/SideBar/SideBar";
import TopActionBar from "@/modules/components/TopActionBar/TopActionBar";
import { Toaster } from "@/modules/components/ui/toaster";
import AllFiles from "@/modules/pages/AllFiles";
import AllPhoto from "@/modules/pages/AllPhoto";
import ShareAccess from "@/modules/pages/ShareAccess";
import Signature from "@/modules/pages/Signature";
import Endpoints from "@/shared/constants/endpoints";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="flex gap-10">
        <SideBar />
        <div className="pt-4">
          <TopActionBar />
          <Routes>
            <Route path={Endpoints.AllFiles} element={<AllFiles />}>
              <Route path="*" element={<AllFiles />} />
            </Route>
            <Route
              path="/"
              element={<Navigate to={Endpoints.AllFiles} replace />}
            />

            <Route path={Endpoints.AllPhoto} element={<AllPhoto />} />
            <Route path={Endpoints.ShareAccess} element={<ShareAccess />} />
            <Route path={Endpoints.Signature} element={<Signature />} />
          </Routes>
          <div className="w-10 h-10 bg-red-500"></div>
        </div>
        <Toaster />
      </div>
    </BrowserRouter>
  );
};

export default App;
