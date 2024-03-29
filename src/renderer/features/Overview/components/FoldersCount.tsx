import { useContext, useEffect, useState } from 'react';
import ProjectObject from 'renderer/types/ProjectObjectInterface';
import { ProjectObjContext } from 'renderer/app/App';
import { selectedObjectContext } from '../../../app/Workspace';
import {
  JSONoverviewTitleStyle,
  JSONoverviewResultStyle,
} from '../shared-styling';

export default function FoldersCount() {
  const { project } = useContext(ProjectObjContext);
  const { selected } = useContext(selectedObjectContext);
  const [foldersCount, setFoldersCount] = useState(0);

  let folders = 0;

  useEffect(() => {
    folders = 0;
    countFolders(project);
    setFoldersCount(folders);
  }, [project, selected]);

  const countFolders = (object: ProjectObject) => {
    if (object.children) {
      folders++;
      object.children.forEach((child) => {
        countFolders(child);
      });
    }
  };

  return (
    <h6 style={JSONoverviewTitleStyle}>
      Folders Count: <span style={JSONoverviewResultStyle}>{foldersCount}</span>
    </h6>
  );
}
