import React, { useEffect } from "react";
import { Button, Col, Form } from "react-bootstrap";
import ProjectObject from "renderer/@types/ProjectObjectInterface";
import { selectedObjectContext } from "../Workspace";
import { JSONInteractionDropDownDiv } from "./Styling";

export default function DeleteButton() {

  const [show, setShow] = React.useState(false);
  let { selected, setSelected } = React.useContext(selectedObjectContext);

  const isFolder = selected?.obj.children? true : false;

  useEffect( () => {
    if(!selected?.parent) setShow(false)
  }, [selected])

  const Delete = () => {
    if(selected && selected.parent) {


      selected.obj.children = undefined;
      let parentChildren = selected.parent.children as ProjectObject[]
      (parentChildren).splice(parentChildren.indexOf(selected.obj, 1))

      setSelected(undefined)
      setShow(false);
    }
  }

  return (
    <Col xs={12} className="mb-2 d-grid">
      <Button variant="danger" size="sm" onClick={() => {setShow(!show)}}
        disabled={selected?.parent ? false : true} >
        Delete {isFolder? "Folder" : "File"}
      </Button>

      <Form.Group style={{...JSONInteractionDropDownDiv, display: show? "initial" : "none"}}>
        <Col xs={12}  className="d-grid" >
          <Button variant="danger" size="sm" onClick={Delete}>Confirm</Button>
        </Col>
      </Form.Group>
    </Col>
  )
}
