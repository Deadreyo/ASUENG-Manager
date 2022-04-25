/* eslint-disable prettier/prettier */
import React, { createContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ProjectObject from "renderer/@types/ProjectObjectInterface";
import jsonTest from './jsonTest.json'

import JSONViewer from "./JSON Rendering/JSONViewier";
import TitlePanel from "./TitlePanel";
import ChangeDateButton from "./JSON Interactions/ChangeDate";
import ChangeLinkButton from "./JSON Interactions/ChangeLink";
import ObjectName from "./JSON Interactions/Name";
import AddNoteButton from "./JSON Interactions/AddNote";
import AddCreditButton from "./JSON Interactions/AddCredits";
import AddSourceButton from "./JSON Interactions/AddSource";
// const fs = window.require('fs');

const mainContent: React.CSSProperties = {
  maxHeight: "80vh",
  overflowY: "auto",
}

export const selectedObjectContext = createContext(undefined as unknown as { selected: ProjectObject, setSelected: (obj: ProjectObject) => {}})

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
          <Col xs={8} style={{borderRight: "1px solid #303030"}}>
            <JSONViewer />
          </Col>
          {/* <Col xs={1} className="vr p-0" > */}
            {/* <div className="vr m-0" style={{height: "100%"}}/> */}
          {/* </Col> */}
          <Col xs={4}>
            <Row style={{marginLeft: "1px"}}>
              <Col xs={12} style={{backgroundColor: "#0c0d0e", paddingTop: "5px", paddingBottom: "5px"}} className="bg-light">
                {/* <Row> */}
                  {/* {selected &&
                    <Col xs={12} className="mb-2">
                      {/* <h5>{selected.name}</h5> */}
                      {/* <input type={"text"} style={selectedTitle} className="mb-2" value={selected.name}/> */}

                    {/* </Col> */}

                  <ObjectName />
                  <ChangeDateButton />
                  <ChangeLinkButton />
                  <AddNoteButton />
                  <AddCreditButton />
                  <AddSourceButton />
                {/* </Row> */}
              </Col>


            </Row>
          </Col>
        </Row>

      </Row>
    </selectedObjectContext.Provider>
  )
}
