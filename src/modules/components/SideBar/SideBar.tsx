import DropboxLogo from "@/assets/logo.svg";
import { Files } from "styled-icons/bootstrap";
import SideBarItem from "../SideBarItem/SideBarItem";
import { Photo } from "styled-icons/material-outlined";
import { Signature } from "styled-icons/fa-solid";
import { PeopleOutline } from "styled-icons/material";
import { Separator } from "@/modules/components/ui/separator";
import Endpoints from "@/shared/constants/endpoints";

const sideItems = [
  { icon: <Files />, title: "Усі файли", endpoint: Endpoints.AllFiles },
  { icon: <Photo />, title: "Фотографії", endpoint: Endpoints.AllPhoto },
  {
    icon: <PeopleOutline />,
    title: "Спільний доступ",
    endpoint: Endpoints.ShareAccess,
  },
  { icon: <Signature />, title: "Підписи", endpoint: Endpoints.Signature },
];

const SideBar = () => {
  return (
    <div className="min-w-[240px] min-h-screen bg-[#F7F5F1] overflow-auto  border-r-[1px]">
      <img
        src={DropboxLogo}
        alt="DropboxLogo"
        className="w-7 h-7 ml-[22px] mt-[25px]"
      />
      <div className="mt-[26px]">
        {sideItems.map((item, index) => (
          <SideBarItem key={index} {...item} />
        ))}
      </div>
      <Separator />
    </div>
  );
};

export default SideBar;
