import { FormEvent, useContext } from "react";
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
      value = value.replace(/\/|\\|"|<|>|:|\?|\*|\|/g, "");
      if(selected.obj.children) value = value.replace(/[^\w| ]/g, "");


      // add extension
      if(!selected.obj.children) value += ".pdf";

      selected.obj.name = value;
      setSelected({obj: selected.obj})
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


    // <Col xs={12} className="mb-2 d-grid">
    //   <Button variant="primary" size="sm">Change Name</Button>
    // </Col>
