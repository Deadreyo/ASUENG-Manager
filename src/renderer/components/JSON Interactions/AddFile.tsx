import React, { ChangeEvent } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ProjectObject from "renderer/@types/ProjectObjectInterface";
import ValidationRules from "../Validation/Rules";
import { selectedObjectContext } from "../Workspace";
import { JSONInteractionDropDownDiv } from "./Styling";

export default function AddFileButton() {

  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState("");
  const { selected, setSelected } = React.useContext(selectedObjectContext);

  const createFile = () => {

    if(selected && name != "") {

      // Validation
      (selected.obj.children as ProjectObject[]).push({
        name: name+".pdf"
      })
      setSelected({obj: selected.obj})
      setName("")
    }
  }

  const nameChange = (ev: ChangeEvent) => {
    let val = (ev.target as HTMLInputElement).value
    // Validation
    console.log(ValidationRules.NameFileRule)
    val = val.replace(ValidationRules.NameFileRule, "");
    setName(val);
  }

  return (
    <Col xs={12} className="mb-2 d-grid">
      <Button variant="primary" size="sm" onClick={() => {setShow(!show)}}>Add File</Button>

      <Form.Group style={{...JSONInteractionDropDownDiv, display: show? "initial" : "none"}}>
        <Row className="align-items-center">
          <Col lg={8}>
            <Form.Control type="text" placeholder="File Name" value={name} onChange={nameChange}/>
          </Col>
          <Col lg={3} style={{paddingLeft: "0px"}} className="d-grid">
            <Button variant="primary" onClick={createFile}>Add</Button>
          </Col>
        </Row>
      </Form.Group>
    </Col>
  )
}
