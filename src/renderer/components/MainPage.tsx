/* eslint-disable prettier/prettier */

import { Button, Col, Row } from "react-bootstrap";
import TitlePanel from "./TitlePanel";





export default function MainPage() {

    return(
      <>
        <TitlePanel />
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
