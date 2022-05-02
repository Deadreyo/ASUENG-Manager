import { FormEvent, useContext } from "react";
import ValidationRules from "../Validation/Rules";
import { selectedObjectContext } from "../Workspace";

const selectedTitle: React.CSSProperties = {
  overflow: "auto",
  backgroundColor: "#0c0d0e",
  padding: "2px 5px",
  marginBottom: "5px",
  border: "5px outset #f80",
  borderRadius: "5px",
  color: "white",
  width: "inherit",
}

export default function ObjectName() {
  let {selected, setSelected} = useContext(selectedObjectContext);

  const editName = (ev: FormEvent) => {
    if(selected) {

      let value = (ev.target as HTMLInputElement).value;

      // Validation
      // if(selected.obj.children) value = value.replace(ValidationRules.NameFolderRule, "");
      // else value = value.replace(ValidationRules.NameFileRule, "");


      // add extension
      if(!selected.obj.children) value += ".pdf";

      selected.obj.name = value;
      setSelected({obj: selected.obj, parent: selected.parent})
    }
  }

  return (
    <>
      {selected &&
        // <input type={"text"} style={selectedTitle} className="mb-2" value={selected.name.replace(".pdf", "")} onChange={editName}/>
        <input type={"text"} style={selectedTitle} className="mb-2" value={selected.obj.name.replace(".pdf", "")} onChange={editName}/>
      }
    </>
  )
}
