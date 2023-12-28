import {
  ArrowBarUp,
  FileArrowDown,
  FolderPlus,
  Pen,
  Plus,
  Record2,
} from "styled-icons/bootstrap";
import { Button } from "../ui/button";

const dataItemToolbar = [
  {
    title: "Створити",
    icon: <Plus />,
    primary: true,
  },
  {
    title: "Передати",
    icon: <ArrowBarUp />,
    primary: false,
  },
  {
    title: "Створити папку",
    icon: <FolderPlus />,
    primary: false,
  },
  {
    title: "Записати",
    icon: <Record2 />,
    primary: false,
  },
  {
    title: "Редагувати PDF",
    icon: <Pen />,
    primary: false,
  },
  {
    title: "Отримати підпис",
    icon: <FileArrowDown />,
    primary: false,
  },
];

const OperationToolbar = () => {
  return (
    <div className="mt-4 flex gap-[16px]">
      {dataItemToolbar.map((item) => (
        <Button
          variant={item.primary ? "toolBarItemPrimary" : "toolBarItemOrdinary"}
          size={"toolbarItemSize"}
        >
          <div className="h-5 w-5">{item.icon}</div>
          <p className="max-w-[90%]  truncate ...">{item.title}</p>
        </Button>
      ))}
    </div>
  );
};
export default OperationToolbar;
