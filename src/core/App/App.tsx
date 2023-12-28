import OperationToolbar from "@/modules/components/OperationToolbar/OperationToolbar";
import SideBar from "@/modules/components/SideBar/SideBar";
import TopActionBar from "@/modules/components/TopActionBar/TopActionBar";
import { Toaster } from "@/modules/components/ui/toaster";
const App = () => {
  return (
    <div className="flex gap-10">
      <SideBar />
      <div className="pt-4">
        <TopActionBar />
        <OperationToolbar />
        <div className="w-10 h-10 bg-red-500"></div>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
