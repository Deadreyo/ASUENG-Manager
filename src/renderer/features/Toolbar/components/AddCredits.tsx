import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { selectedObjectContext  } from "../../../app/Workspace";
import { JSONInteractionDropDownDiv } from "../shared-styling";

export default function AddCreditButton() {
  const [show, setShow] = React.useState(false);
  const { selected, setSelected } = React.useContext(selectedObjectContext);

  const creditsLinkElement = document.getElementById("creditsLink") as HTMLInputElement;

  const addCredits = () => {
    if(selected) {

      if(!selected.obj.credits) selected.obj.credits = [];

      let credits = ""
      if(creditsLinkElement.value) credits = creditsLinkElement.value
      else return;

      selected.obj.credits.push(credits)
      setSelected({obj: selected.obj, parent: selected.parent})
    }
  }

  return (
    <Col xs={12} className="mb-2 d-grid">
      <Button variant="secondary" size="sm" onClick={() => setShow(!show)}>Add Credits</Button>

      <Form.Group style={{...JSONInteractionDropDownDiv, display: show? "initial" : "none"}}>
        <Row className="align-items-center">
          <Col xs="12">
            <Form.Control type="text" placeholder="Credits Link" id="creditsLink"/>
          </Col>
          <Col className="d-grid mt-2">
            <Button variant="primary" onClick={addCredits}>Add</Button>
          </Col>
        </Row>
      </Form.Group>
    </Col>
  )
}
