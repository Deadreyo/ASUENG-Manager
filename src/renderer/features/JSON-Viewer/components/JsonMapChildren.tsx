import ProjectObject from 'renderer/types/ProjectObjectInterface';
import JsonElement from './JsonElement';

export default function JsonMapChildren(
  object: ProjectObject
): JSX.Element | JSX.Element[] | null {
  if (object.children) {
    // Folder things...
    if (Array.isArray(object.children)) {
      return object.children
        .sort((a, b) => {
          if (a.children && !b.children) return -1;
          else if (a.children && b.children) return 0;
          else return 1;
        })
        .map((obj, i) => <JsonElement object={obj} parent={object} key={i} />);
    } else {
      return <JsonElement object={object.children} parent={object} />;
    }
  } else {
    return null;
  }
}
