/* eslint-disable prettier/prettier */
import React, { createContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ProjectObject from "renderer/@types/ProjectObjectInterface";
import jsonTest from './jsonTest.json'

import FileViewer from "./FileViewer";
import TitlePanel from "./TitlePanel";
// const fs = window.require('fs');

const mainContent: React.CSSProperties = {
  height: "auto",
  overflowY: "auto",
}

export const selectedObjectContext = createContext({ selected: {}, setSelected: (obj) => {}})

export default function MainPage() {

  let [selected, setSelected] = React.useState<ProjectObject|undefined>(jsonTest)

  return(
    <selectedObjectContext.Provider value={{selected, setSelected}}>
      <TitlePanel />
      <Row style={mainContent}>
        <Row className="mt-3">
          <Col xs={12}>
            {/* <Button variant="primary" size="sm" onClick = {CreateFromJson}>Open a JSON file</Button> */}
            <h5 className="mt-4">Workspace</h5>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col xs={9}>
            <FileViewer />
          </Col>
          <Col xs={1} className="vr p-0" >
            {/* <div className="vr m-0" style={{height: "100%"}}/> */}
          </Col>
          <Col xs={3} style={{width: "auto"}}>
            <Row>
              <Col xs={9}>
                {/* <Row> */}
                  <Col xs={12}>
                    <Button variant="primary" size="sm">Primary</Button>
                  </Col>
                  <Col xs={12}>
                    <Button variant="primary" size="sm">Primary</Button>
                  </Col>
                  <Col xs={12}>
                    <Button variant="primary" size="sm">Primary</Button>
                  </Col>
                {/* </Row> */}
              </Col>


            </Row>
          </Col>
        </Row>

      </Row>
    </selectedObjectContext.Provider>
  )
}
