import React, { ChangeEvent } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { selectedObjectContext } from "../../../app/Workspace";
import { JSONInteractionDropDownDiv } from "../shared-styling";

export default function ChangeDateButton() {
  const [show, setShow] = React.useState(false);
  const { selected, setSelected } = React.useContext(selectedObjectContext);

  let value = ""
  let checked = false;
  if(selected && selected.obj.date) {
    value = selected.obj.date;
    checked = true;
  }


  const changeDate = (ev: ChangeEvent) => {
    if(selected) {
      let entered = (ev.target as HTMLInputElement).value;

      // Validation
      let currentYear = new Date().getFullYear() % 2000
      if(!parseInt(entered) || parseInt(entered) > currentYear + 1 || parseInt(entered) < 17) return;

      selected.obj.date = (ev.target as HTMLInputElement).value;
      setSelected({obj: selected.obj, parent: selected.parent})
    }
  }

  const enableDate = (ev: ChangeEvent) => {
    if(selected) {
      if (!(ev.target as HTMLInputElement).checked) {
        selected.obj.date = undefined;
      } else {
        selected.obj.date = "20";
      }
      setSelected({obj: selected.obj, parent: selected.parent})
    }
  }

  return (
    <Col xs={12} className="mb-2 d-grid">
      <Button variant="primary" size="sm" onClick={() => setShow(!show)}>Change Date</Button>

      <Form.Group style={{...JSONInteractionDropDownDiv, display: show? "initial" : "none"}}>
        <Row className="align-items-center">
          <Col lg={6}>
            <Form.Check type="switch" label="Specified" checked={checked} onChange={enableDate}/>
          </Col>
          <Col lg={{span: 5, offset: 1}} className="mt-1 align-self-center">
            <Form.Control type="number" step={1} min={17} max={25} placeholder="##" value={value} onChange={changeDate} disabled={!checked}/>
          </Col>
        </Row>

        {/* <Form.Label>Date</Form.Label> */}
      </Form.Group>
    </Col>
  )
}
