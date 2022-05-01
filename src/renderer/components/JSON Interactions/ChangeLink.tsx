import React, { ChangeEvent } from "react";
import { Button, Col, Form } from "react-bootstrap";
import ValidationRules from "../Validation/Rules";
import { selectedObjectContext } from "../Workspace";
import { JSONInteractionDropDownDiv } from "./Styling";

export default function ChangeLinkButton() {
  const [show, setShow] = React.useState(false);
  const { selected, setSelected } = React.useContext(selectedObjectContext);

  let value = ""
  let disabled = false;
  if(selected?.obj.link) {
    value = selected.obj.link;
  }
  if(selected?.obj.children) {
    disabled = true;
    if(show) setShow(false)
  }

  const changeLink = (ev: ChangeEvent) => {
    if(selected) {
      let entered = (ev.target as HTMLInputElement).value.replace(ValidationRules.LinkRule, "");

      if(entered) selected.obj.link = entered;
      else selected.obj.link = undefined;

      setSelected({obj: selected.obj})
    }


  }

  return (
    <Col xs={12} className="mb-2 d-grid">
      <Button variant={ disabled? "secondary": "primary"} size="sm" onClick={() => setShow(!show)} disabled={disabled}>Change Link</Button>

      <Form.Group style={{...JSONInteractionDropDownDiv, display: show? "initial" : "none"}}>
        <Form.Control type="text" placeholder="Link" value={value} onChange={changeLink}/>
      </Form.Group>
    </Col>
  )
}
