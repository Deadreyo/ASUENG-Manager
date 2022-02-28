/* eslint-disable prettier/prettier */

import { Button, Col, Row } from "react-bootstrap";
import FileViewer from "./FileViewer";
import TitlePanel from "./TitlePanel";





export default function MainPage() {

    return(
      <>
        <TitlePanel />
        <Row className="mainContent">
          <Row className="mt-3">
            <Col xs={12}>
              <Button variant="primary" size="sm">Primary</Button>
              <div>hello</div>
            </Col>
            <Col xs={12}>
              <FileViewer />
            </Col>

          </Row>
        </Row>
      </>
    )
}
