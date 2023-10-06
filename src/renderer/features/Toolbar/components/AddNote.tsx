import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { selectedObjectContext } from "../../../app/Workspace";
import { JSONInteractionDropDownDiv } from "../shared-styling";

export default function AddNoteButton() {
  const [show, setShow] = React.useState(false);
  const { selected, setSelected } = React.useContext(selectedObjectContext);
  const [checked, setChecked] = useState(false);

  const noteDateElement = document.getElementById("noteDate") as HTMLInputElement;
  const noteMessageElement = document.getElementById("noteMessage") as HTMLTextAreaElement;

  const addNote = () => {

    if(selected) {

      if(!selected.obj.note) selected.obj.note = [];

      let message = ""
      if(noteMessageElement.value) message = noteMessageElement.value
      else return;

      let date = undefined
      if(checked && noteDateElement.value) date = noteDateElement.value;

      selected.obj.note.push({message: message, date: date})
      setSelected({obj: selected.obj, parent: selected.parent})
    }
  }

  return (
    <Col xs={12} className="mb-2 d-grid">
      <Button variant="secondary" size="sm" onClick={() => {setShow(!show)}}>Add Note</Button>

      <Form.Group style={{...JSONInteractionDropDownDiv, display: show? "initial" : "none"}}>
        <Row className="align-items-center">
          <Col lg={12}>
            {/* <Form.Control type="textarea" placeholder="File Name"/> */}
            {/* <Form.Text /> */}
            <textarea rows={6} placeholder="Note Message" id="noteMessage"/>
          </Col>
          <Row className="align-items-center">
            <Col md={4}>
              <Form.Check type="switch" label="Date" checked={checked} onChange={() => setChecked(!checked)}/>
            </Col>
            <Col md={{span: 6, offset: 2}} className="mt-1 align-self-center">
              <Form.Control type="number" step={1} min={17} max={25} placeholder="##" disabled={!checked} id="noteDate"/>
            </Col>
          </Row>
          <Col className="d-grid mt-2">
            <Button variant="primary" onClick={addNote}>Add</Button>
          </Col>
        </Row>
      </Form.Group>
    </Col>
  )
}
