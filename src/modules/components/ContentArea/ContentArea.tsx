import { files } from "dropbox";
import CardManager from "../CardManager/CardManager";

const ContentArea = ({ data }: { data: files.ListFolderResult }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {data.entries.map((item, index) => (
        <CardManager
          key={index}
          name={item.name}
          tag={item[".tag"]}
          pathLower={item.path_lower || ""}
        />
      ))}
    </div>
  );
};
export default ContentArea;
