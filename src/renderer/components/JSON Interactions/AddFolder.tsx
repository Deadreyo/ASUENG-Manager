import React, { ChangeEvent } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ProjectObject from "renderer/@types/ProjectObjectInterface";
import ValidationRules from "../Validation/Rules";
import { selectedObjectContext } from "../Workspace";
import { JSONInteractionDropDownDiv } from "./Styling";

export default function AddFolderButton() {

  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState("");
  const { selected, setSelected } = React.useContext(selectedObjectContext);

  const createFolder = () => {

    if(selected && name != "") {
      (selected.obj.children as ProjectObject[]).push({
        name: name,
        children: []
      })
      setSelected({obj: selected.obj})
      setName("")
    }
  }

  const nameChange = (ev: ChangeEvent) => {
    let val = (ev.target as HTMLInputElement).value
    // Validation
    val = val.replace(ValidationRules.NameFolderRule, "");
    setName(val);
  }

  return (
    <Col xs={12} className="mb-2 d-grid">
      <Button variant="primary" size="sm" onClick={() => {setShow(!show)}}>Add Folder</Button>

      <Form.Group style={{...JSONInteractionDropDownDiv, display: show? "initial" : "none"}}>
        <Row className="align-items-center">
          <Col lg={8}>
            <Form.Control type="text" placeholder="Folder Name" value={name} onChange={nameChange}/>
          </Col>
          <Col lg={3} style={{paddingLeft: "0px"}} className="d-grid">
            <Button variant="primary" onClick={createFolder}>Add</Button>
          </Col>
        </Row>
      </Form.Group>
    </Col>
  )
}
