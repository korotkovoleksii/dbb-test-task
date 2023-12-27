import { Search } from "styled-icons/material";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Bell, Grid3x3GapFill, QuestionCircle } from "styled-icons/bootstrap";
import { Avatar, AvatarFallback } from "@/modules/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/modules/components/ui/tooltip";

const TopActionBar = () => {
  return (
    <div className="relative flex flex-row items-center">
      <div className="w-[20px] absolute top-[50%] left-[25px] transform -translate-x-1/2 -translate-y-1/2">
        <Search />
      </div>
      <Input
        placeholder="Пошук"
        className=" w-[920px] h-[48px] rounded-none border-[1px] pl-[38px] text-base hover:border-current"
      />
      <div className="ml-4 flex flex-row items-center w-[140px]  justify-between">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="w-8 h-8 rounded-none hover:bg-bgdropbox"
              >
                <Grid3x3GapFill className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ознайомитись з іншими продуктами Dropbox</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button
          variant={"ghost"}
          size="icon"
          className="w-8 h-8 rounded-none hover:bg-bgdropbox"
        >
          <QuestionCircle className="h-4 w-4" />
        </Button>
        <Button
          variant={"ghost"}
          size="icon"
          className="w-8 h-8 rounded-none hover:bg-bgdropbox"
        >
          <Bell className="h-4 w-4" />
        </Button>
        <Button
          variant={"ghost"}
          size="icon"
          className="w-8 h-8 rounded-none hover:bg-bgdropbox"
        >
          <Avatar className="size-6">
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </div>
  );
};

export default TopActionBar;
