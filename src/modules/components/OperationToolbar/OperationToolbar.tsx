import {
  ArrowBarUp,
  FileArrowDown,
  FolderPlus,
  Pen,
  Plus,
  Record2,
} from "styled-icons/bootstrap";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const OperationToolbar = () => {
  const { toast } = useToast();

  const dataItemToolbar = [
    {
      title: "Створити",
      icon: <Plus />,
      primary: true,
      onClick: () => {
        toast({
          title: "Not implemented ",
        });
      },
    },
    {
      title: "Передати",
      icon: <ArrowBarUp />,
      primary: false,
      onClick: () => {
        toast({
          title: "Not implemented ",
        });
      },
    },
    {
      title: "Створити папку",
      icon: <FolderPlus />,
      primary: false,
      onClick: () => {
        toast({
          title: "Not implemented ",
        });
      },
    },
    {
      title: "Записати",
      icon: <Record2 />,
      primary: false,
      onClick: () => {
        toast({
          title: "Not implemented ",
        });
      },
    },
    {
      title: "Редагувати PDF",
      icon: <Pen />,
      primary: false,
      onClick: () => {
        toast({
          title: "Not implemented ",
        });
      },
    },
    {
      title: "Отримати підпис",
      icon: <FileArrowDown />,
      primary: false,
      onClick: () => {
        toast({
          title: "Not implemented ",
        });
      },
    },
  ];

  return (
    <div className="mt-4 flex gap-[16px]">
      {dataItemToolbar.map((item) => (
        <Button
          variant={item.primary ? "toolBarItemPrimary" : "toolBarItemOrdinary"}
          size={"toolbarItemSize"}
          onClick={item.onClick}
        >
          <div className="h-5 w-5">{item.icon}</div>
          <p className="max-w-[90%]  truncate ...">{item.title}</p>
        </Button>
      ))}
    </div>
  );
};
export default OperationToolbar;
