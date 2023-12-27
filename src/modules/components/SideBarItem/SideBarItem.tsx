import { DisabledByDefault } from "styled-icons/material";

interface ISideBarItemProp {
  icon: any;
  title: string;
}

const SideBarItem = ({
  icon = <DisabledByDefault />,
  title,
}: ISideBarItemProp) => {
  return (
    <div className="flex pl-[16px] h-[40px] pt-2 pb-2 gap-[12px] hover:bg-bgdropbox items-center">
      <div className="w-[20px] h-[20px] flex justify-center items-center text-muted-foreground">
        {icon}
      </div>
      <p className="color-[#1a1918] text-sm  select-none text-muted-foreground ">
        {title}
      </p>
    </div>
  );
};

export default SideBarItem;
