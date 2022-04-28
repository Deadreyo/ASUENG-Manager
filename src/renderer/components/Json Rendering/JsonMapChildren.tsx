import ProjectObject from "renderer/@types/ProjectObjectInterface";
import JsonElement from "./JsonElement";

export default function JsonMapChildren(children: ProjectObject | ProjectObject[] | undefined): JSX.Element | JSX.Element[] | null {
  if(children) {
    // Folder things...
    if(Array.isArray(children)) {
      return children
        .sort((a, b) => {
          if(a.children && !b.children) return -1;
          else if(a.children && b.children) return 0;
          else return 1;
        })
        .map( (obj, i) => (
          <JsonElement object={obj} key={i}/>
        ));

    } else {
      return <JsonElement object= {children} />;
    }
  } else {
    return null;
  }
}
