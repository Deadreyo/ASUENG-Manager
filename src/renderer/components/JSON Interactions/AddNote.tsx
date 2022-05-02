import { Button, Col } from "react-bootstrap";

export default function AddNoteButton() {

  return (
    <Col xs={12} className="mb-2 d-grid">
      <Button variant="secondary" size="sm" disabled>Add Note</Button>
    </Col>
  )
}