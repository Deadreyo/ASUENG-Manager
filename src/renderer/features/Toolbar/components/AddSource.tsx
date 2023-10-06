import React, { ChangeEvent } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ValidationRules from "../../../app/ValidationRules";
import { selectedObjectContext } from "../../../app/Workspace";
import { JSONInteractionDropDownDiv } from "../shared-styling";

export default function AddSourceButton() {
  const [show, setShow] = React.useState(false);
  const { selected, setSelected } = React.useContext(selectedObjectContext);

  const sourceLinkElement = document.getElementById("sourceLink") as HTMLInputElement;

  const validateLink = (ev: ChangeEvent) => {
    (ev.target as HTMLInputElement).value = (ev.target as HTMLInputElement).value.replace(ValidationRules.LinkRule, "");
  }

  const addSource = () => {
    if(selected) {

      if(!selected.obj.source) selected.obj.source = [];

      let source = ""
      if(sourceLinkElement.value) source = sourceLinkElement.value
      else return;

      selected.obj.source.push(source)
      setSelected({obj: selected.obj, parent: selected.parent})
    }
  }

  return (
    <Col xs={12} className="mb-2 d-grid">
      <Button variant="secondary" size="sm" onClick={() => setShow(!show)}>Add Source</Button>

      <Form.Group style={{...JSONInteractionDropDownDiv, display: show? "initial" : "none"}}>
        <Row className="align-items-center">
          <Col lg={8}>
            <Form.Control type="text" placeholder="Source Link" onChange={validateLink} id="sourceLink"/>
          </Col>
          <Col lg={3} style={{paddingLeft: "0px"}} className="d-grid">
            <Button variant="primary" onClick={addSource}>Add</Button>
          </Col>
        </Row>
      </Form.Group>
    </Col>
  )
}
