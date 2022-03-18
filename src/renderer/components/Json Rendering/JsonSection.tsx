import { useState } from "react";
import ProjectObject from "renderer/utilities/ProjectObjectInterface";

const innerContainersStyle: React.CSSProperties = {
  paddingLeft: "30px",
  borderLeft: "2px solid grey",

}

const iconStyle: React.CSSProperties = {
  color: "gold"
}

const nameStyle: React.CSSProperties = {
  color: "rgb(230, 85, 13)"
}


export default function JsonSection( {object} : {object: ProjectObject}) {

    const [display, setDisplay] = useState("inherit");
    const [icon, setIcon] = useState("fa-folder-open");

    let childrenElements = object.children? Array.isArray(object.children)?

      object.children
        .sort((a, b) => {
          if(a.children && !b.children) return -1;
          else if(a.children && b.children) return 0;
          else return 1;
        })
        .map( (obj) => (
          <JsonSection object={obj} />
        ))
      :
        <JsonSection object= {object.children} />
      : null;

    const Clicking = () => {
      // setDisplay("none")
      if(display == "inherit") setDisplay("none");
      else setDisplay("inherit");

      if(icon == "fa-folder") setIcon("fa-folder-open");
      else setIcon("fa-folder");
    }

    let ClassName = object.children? `fas ${icon}` : "fa-solid fa-file";
    // let ClassName = `fas fa-folder`
    let initialWord = object.children? `Folder` : "File";
    return (
      <div>
        <span onClick={() => Clicking()}><i className={ClassName} style={iconStyle}></i> {initialWord} : <span style={nameStyle}>{object.name}</span></span>
        <div style={{...innerContainersStyle, display: display}}>
          {childrenElements}
        </div>
      </div>
    )
}
