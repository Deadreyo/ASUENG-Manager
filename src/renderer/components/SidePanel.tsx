import { ipcRenderer } from 'electron';
import { readFileSync } from 'fs';
import React, { useContext } from 'react';
import { Anchor, Col, Row } from 'react-bootstrap';
import { projectContext } from 'renderer/App';

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
  "height": "inherit",
  "marginTop": "-15px",
}

const optionsSubtitles: React.CSSProperties = {
  fontSize: "larger"
}


export default function SidePanel() {
  
  const {project, setProject} = useContext(projectContext)

  const CreateFromJson = () => {

    ipcRenderer.invoke("showDialog")
    .then( (filePath) => {
      setProject(JSON.parse(readFileSync(filePath).toString()))
    })
  }

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
      <h5 className="ps-4 mb-4">Project Menu</h5>
      <Anchor role="" color="primary" onClick={() => CreateFromJson()}>

        <h6 className="ps-5 mb-4" style={optionsSubtitles}><i className="fa fa-home pe-2" aria-hidden="true"></i> Open a Project</h6>
      </Anchor>

      <h6 className="ps-5 mb-4" style={optionsSubtitles}><i className="fa fa-home pe-2" aria-hidden="true"></i> Option 1</h6>
      <h6 className="ps-5 mb-4" style={optionsSubtitles}><i className="fa fa-home pe-2" aria-hidden="true"></i> Option 1</h6>
      <h6 className="ps-5 mb-4" style={optionsSubtitles}><i className="fa fa-home pe-2" aria-hidden="true"></i> Option 1</h6>
    </Col>
    </div>
  )
}
