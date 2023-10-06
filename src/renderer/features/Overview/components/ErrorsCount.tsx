import { useContext, useEffect, useState } from 'react';
import { ProjectObjContext } from 'renderer/app/App';
import { selectedObjectContext } from '../../../app/Workspace';
import {
  JSONoverviewTitleStyle,
  JSONoverviewResultStyle,
} from '../shared-styling';

let errorsCount = 0;

export default function ErrorsCount() {
  const { project } = useContext(ProjectObjContext);
  const { selected } = useContext(selectedObjectContext);
  const [, refresh] = useState(0);

  useEffect(() => {
    refresh(errorsCount);
  }, [selected, project]);

  return (
    <h6 style={JSONoverviewTitleStyle}>
      Errors Count:{' '}
      <span style={{ ...JSONoverviewResultStyle, color: 'red' }}>
        {errorsCount}
      </span>
    </h6>
  );
}

export function modifyErrorsCount(value: number) {
  errorsCount += value;
}
