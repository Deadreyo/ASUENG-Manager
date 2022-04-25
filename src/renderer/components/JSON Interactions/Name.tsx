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
      selected.obj.name = (ev.target as HTMLInputElement).value;
      setSelected({obj: selected.obj})
    }
  }

  return (
    <>
      {selected &&
        // <input type={"text"} style={selectedTitle} className="mb-2" value={selected.name.replace(".pdf", "")} onChange={editName}/>
        <input type={"text"} style={selectedTitle} className="mb-2" value={selected.obj.name} onChange={editName}/>
      }
    </>
  )
}


    // <Col xs={12} className="mb-2 d-grid">
    //   <Button variant="primary" size="sm">Change Name</Button>
    // </Col>
