/* eslint-disable prettier/prettier */
import React, { createContext } from "react";
import { Col, Row } from "react-bootstrap";
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
import AddFileButton from "./JSON Interactions/AddFile";
import AddFolderButton from "./JSON Interactions/AddFolder";
import DeleteButton from "./JSON Interactions/Delete";
import OverviewContainer from "./Json Overview/OverviewContainer";
// const fs = window.require('fs');

const mainContent: React.CSSProperties = {
  maxHeight: "80vh",
  overflowY: "auto",
}

type selectionType = {obj: ProjectObject, parent: ProjectObject | undefined} | undefined
type selectionContextType = { selected: selectionType, setSelected: (selection: selectionType) => void }

export const selectedObjectContext = createContext<selectionContextType>(
  {
    selected: {obj: jsonTest, parent: undefined},
    setSelected: () => {}
  }
)
export default function MainPage() {

  let [selected, setSelected] = React.useState<selectionType>({obj: jsonTest, parent: undefined})

  return(
    <selectedObjectContext.Provider value={{selected, setSelected}}>
      <TitlePanel />
      <Row style={mainContent}>
        <Row className="mt-3">
          <Col xs={12}>
            <center>

            <h5 className="mt-4 mb-3 pb-1 text-warning" style={{borderBottom: "#303030 1px solid"}}>Workspace</h5>
            </center>
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
              {selected ?
                <Col xs={12} style={{backgroundColor: "#0c0d0e", paddingTop: "5px", paddingBottom: "5px"}} className="bg-light">
                    <ObjectName />
                    {selected?.obj.children ?
                    <>
                      <AddFolderButton />
                      <AddFileButton />
                    <ChangeDateButton />
                      <AddNoteButton />
                      <AddCreditButton />
                      <AddSourceButton />
                    </>
                    :
                    <>
                      <ChangeLinkButton />
                      <ChangeDateButton />
                    </>
                    }
                  <DeleteButton />
                </Col>
              : null}

            </Row>
          </Col>
        </Row>
        <OverviewContainer />

      </Row>
    </selectedObjectContext.Provider>
  )
}
