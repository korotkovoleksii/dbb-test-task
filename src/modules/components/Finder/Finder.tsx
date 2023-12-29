import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dropbox, files } from "dropbox";
import ContentArea from "../ContentArea/ContentArea";
import Endpoints from "@/shared/constants/endpoints";

const Finder = () => {
  const [dataFolders, setDataFolders] = useState<files.ListFolderResult>();

  const accessToken = import.meta.env.VITE_TOKEN;
  const sharedLink = import.meta.env.VITE_SHARED_LINK;
  const { pathname } = useLocation();
  const dbx = new Dropbox({ accessToken });

  useEffect(() => {
    dbx
      .sharingGetSharedLinkMetadata({ url: sharedLink })
      .then((res) => {
        const resPathLower = res.result.path_lower || "";

        const path =
          pathname === Endpoints.AllFiles
            ? resPathLower
            : `${resPathLower}/${pathname.split("/").slice(-1).join("")}`;

        return dbx.filesListFolder({ path });
      })
      .then((res) => {
        setDataFolders(res.result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [pathname]);

  return (
    <div>
      {dataFolders && dataFolders.entries.length > 0 ? (
        <ContentArea data={dataFolders} />
      ) : (
        <div>Empty Folder</div>
      )}
    </div>
  );
};

export default Finder;
