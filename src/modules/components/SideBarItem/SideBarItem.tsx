import { Link, useLocation } from "react-router-dom";
import { DisabledByDefault } from "styled-icons/material";

interface ISideBarItemProp {
  icon: any;
  title: string;
  endpoint: string;
}

const SideBarItem = ({
  icon = <DisabledByDefault />,
  title,
  endpoint,
}: ISideBarItemProp) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Link to={endpoint}>
      <div
        className={`flex pl-[16px] h-[40px] pt-2 pb-2 gap-[12px] items-center ${
          location.pathname === endpoint
            ? "text-black"
            : "text-muted-foreground"
        }   hover:bg-[#DEDCD7]`}
      >
        <div className="w-[20px] h-[20px] flex justify-center items-center ">
          {icon}
        </div>
        <p className=" text-sm  select-none  ">{title}</p>
      </div>
    </Link>
  );
};

export default SideBarItem;
