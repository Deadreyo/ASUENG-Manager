/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ProjectObject from "renderer/types/ProjectObjectInterface";

import Overview from "../features/Overview/Overview";
import { ProjectObjContext } from "renderer/app/App";
import starterProject from "renderer/utils/starterProject";
import JSONViewer from "renderer/features/JSON-Viewer/JSON-Viewer";
import Toolbar from "../features/Toolbar/Toolbar";

const mainContent: React.CSSProperties = {
  maxHeight: "80vh",
  overflowY: "auto",
}

type selectionType = {obj: ProjectObject, parent: ProjectObject | undefined} | undefined
type selectionContextType = { selected: selectionType, setSelected: (selection: selectionType) => void }

export const selectedObjectContext = createContext<selectionContextType>(
  {
    selected: {obj: starterProject, parent: undefined},
    setSelected: () => {}
  }
)
export default function Workspace() {

  let [selected, setSelected] = React.useState<selectionType>({obj: starterProject, parent: undefined})
  let {project} = useContext(ProjectObjContext)

  useEffect( () => {
    setSelected(undefined)
  }, [project])

  return(
    <selectedObjectContext.Provider value={{selected, setSelected}}>
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

          <Col xs={4}>
            <Toolbar />
          </Col>
        </Row>

        <Overview />

      </Row>
    </selectedObjectContext.Provider>
  )
}
