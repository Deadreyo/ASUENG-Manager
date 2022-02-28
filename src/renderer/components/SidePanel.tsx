import React from 'react';
import { Col, Row } from 'react-bootstrap';

const sidePanel: React.CSSProperties = {
  "color": "#ffffff",
  "height": "100vh"

}

const titlePart: React.CSSProperties = {
  "backgroundColor": "#232F3E",
  "height": "fit-content",
  "paddingBottom": "10px",
}

const subtitleColor: React.CSSProperties = {
  "color": "#BBBEC3"
}

const optionsPart: React.CSSProperties = {
  "backgroundColor": "#18202C",
  "height": "80%",
  "marginTop": "-15px"
}

const optionsSubtitles: React.CSSProperties = {
  fontSize: "larger"
}


export default function SidePanel() {

  return(
    <div style={sidePanel}>
    <Col style={titlePart}>
      {/* <Row className="m-3 mx-0 d-flex SidepanelTitle"> */}
        <h4 className="p-4 pb-0">ASUENG Manager</h4>
      {/* </Row> */}
      <hr />
      {/* <Row className="m-3 mx-0 d-flex SidepanelTitle"> */}
        <h5 className="ps-4" style={subtitleColor}><i className="fa fa-home pe-2" aria-hidden="true"></i> Side Panel</h5>
      {/* </Row> */}
    </Col>
    <Col style={optionsPart}>
      <hr />
      <h5 className="ps-4 mb-4">Main Options</h5>
      <h6 className="ps-5 mb-4" style={optionsSubtitles}><i className="fa fa-home pe-2" aria-hidden="true"></i> Option 1</h6>
      <h6 className="ps-5 mb-4" style={optionsSubtitles}><i className="fa fa-home pe-2" aria-hidden="true"></i> Option 1</h6>
      <h6 className="ps-5 mb-4" style={optionsSubtitles}><i className="fa fa-home pe-2" aria-hidden="true"></i> Option 1</h6>
      <h6 className="ps-5 mb-4" style={optionsSubtitles}><i className="fa fa-home pe-2" aria-hidden="true"></i> Option 1</h6>
    </Col>
    </div>
  )
}
