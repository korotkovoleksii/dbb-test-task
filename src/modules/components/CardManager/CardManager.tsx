import { Card, CardContent, CardFooter } from "@/modules/components/ui/card";

import { Folder } from "styled-icons/boxicons-solid";
import { File, Star } from "styled-icons/boxicons-regular";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

interface IFolderCardProp {
  name?: string;
  size?: number;
  tag?: string;
  pathLower?: string;
}

const CardManager = ({
  name = "folder1",
  tag = "folder",
  pathLower = "name.txt",
  size = 256,
}: IFolderCardProp) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [clicked, setClicked] = useState(false);

  const handelOnClickFolder = () => {
    if (!clicked) {
      navigate(`${pathname}${pathLower}`);
      setClicked(true);
    }
  };
  const handelOnClickFile = () => {
    window.open(`https://www.dropbox.com/preview${pathLower}`);
  };
  const cardFooter =
    tag === "folder" ? (
      <CardFooter className="mt-1 border-none  h-[64px] flex content-center gap-2 p-0 pl-2">
        <Folder className="text-[#A1C9F7] w-[30px]" />
        <section>
          <p className="text-[14px]">{name}</p>
          <p className="text-[#736C64] text-[10px]">Папка * 0 обʼєктів</p>
        </section>
      </CardFooter>
    ) : (
      <CardFooter className="mt-1 border-none  h-[64px] flex content-center gap-2 p-0 pl-2">
        <section>
          <p className="text-[14px]">{name}</p>
          <p className="text-[#736C64] text-[10px]">
            {pathLower.split(".").slice(-1).join("").toUpperCase()} * {size} кб
          </p>
        </section>
      </CardFooter>
    );
  return (
    <Card
      className="w-[224px]  rounded-none border-none relative shadow-none flex flex-col"
      onClick={tag === "folder" ? handelOnClickFolder : handelOnClickFile}
    >
      <CardContent className="bg-bgdropbox w-[100%] h-[224px] hover:bg-[#EBE9E5] flex justify-center p-5 items-center ">
        {tag === "folder" ? (
          <Folder className="text-[#A1C9F7] w-[110px]" />
        ) : (
          <File className="text-[#A1C9F7] w-[110px]" />
        )}
      </CardContent>
      {cardFooter}
    </Card>
  );
};

export default CardManager;
