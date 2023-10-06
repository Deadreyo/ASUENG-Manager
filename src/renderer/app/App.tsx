import './styles/App.css';
import './styles/bootstrap.min.css';
import './styles/fontawesome/css/all.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import SidePanel from '../features/SidePanel/SidePanel';
import Workspace from './Workspace';
import React, { createContext, useState } from 'react';
import starterProject from '../utils/starterProject';
import ProjectObject from 'renderer/types/ProjectObjectInterface';
import TitlePanel from './TitlePanel';

export const ProjectObjContext = createContext({ project: starterProject, setProject: (obj: ProjectObject) => {}})

export default function App() {
  const [project, setProject] =  useState(starterProject)

  return (
    <ProjectObjContext.Provider value={{ project, setProject }}>
      <Container fluid className="mainContainer">
        <Row>
          <Col xs={3} style={{"padding": "0"}}>
            <SidePanel />
          </Col>
          <Col xs={9}>
            <TitlePanel />
            <Workspace />
          </Col>
        </Row>
      </Container>
    </ProjectObjContext.Provider>
  );
}
