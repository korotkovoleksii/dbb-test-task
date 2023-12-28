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

  const handleNotImplemented = () => {
    toast({
      title: "Not implemented ",
    });
  };

  const dataItemToolbar = [
    {
      title: "Створити",
      icon: <Plus />,
      primary: true,
      onClick: handleNotImplemented,
    },
    {
      title: "Передати",
      icon: <ArrowBarUp />,
      primary: false,
      onClick: handleNotImplemented,
    },
    {
      title: "Створити папку",
      icon: <FolderPlus />,
      primary: false,
      onClick: handleNotImplemented,
    },
    {
      title: "Записати",
      icon: <Record2 />,
      primary: false,
      onClick: handleNotImplemented,
    },
    {
      title: "Редагувати PDF",
      icon: <Pen />,
      primary: false,
      onClick: handleNotImplemented,
    },
    {
      title: "Отримати підпис",
      icon: <FileArrowDown />,
      primary: false,
      onClick: handleNotImplemented,
    },
  ];

  return (
    <div className="mt-4 flex gap-[16px]">
      {dataItemToolbar.map((item, index) => (
        <Button
          key={index}
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
