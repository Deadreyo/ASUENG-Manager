import React, { useContext, useEffect } from 'react';
import ProjectObject from 'renderer/types/ProjectObjectInterface';
import { selectedObjectContext } from '../../app/Workspace';
import JsonElement from './components/JsonElement';
import { ProjectObjContext } from 'renderer/app/App';

const containerStyle: React.CSSProperties = {
  backgroundColor: '#0c0d0e',
  color: 'rgb(252, 253, 254)',
  letterSpacing: '0.5px',
  height: '100%',
  overflowY: 'auto',
  maxHeight: '60vh',
  minHeight: '30vh',
  padding: '5px',
};

export default function JSONViewer() {
  const { project } = useContext(ProjectObjContext);
  let { selected, setSelected } = useContext(selectedObjectContext);

  useEffect(() => {
    if (selected === null) setSelected(undefined); // reverter for JsonNote null setting
  }, [selected]);

  return (
    <div style={containerStyle}>
      <JsonElement object={project} parent={undefined} />
    </div>
  );
}
