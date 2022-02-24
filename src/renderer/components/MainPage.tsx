/* eslint-disable prettier/prettier */

import { Button, Col, Row } from "react-bootstrap";





export default function MainPage() {

    return(
      <>
        <Row className="titlePanel">
            Upper Panel
        </Row>
        <Row className="mainContent">
          <Row className="mt-3">
            <Col>
              <Button variant="primary" size="sm">Primary</Button>
              <div>hello</div>
            </Col>

          </Row>
        </Row>
      </>
    )
}
