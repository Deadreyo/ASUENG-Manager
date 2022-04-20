import { useContext, useState } from "react";
import ProjectObject from "renderer/@types/ProjectObjectInterface";
import { selectedObjectContext } from "../Workspace";

const innerContainersStyle: React.CSSProperties = {
  paddingLeft: "30px",
  borderLeft: "2px solid grey",

}

const FolderIconStyle: React.CSSProperties = {
  color: "gold"
}
const FileIconStyle: React.CSSProperties = {
  color: "#ef96a6"
}
const FolderFileNameStyle: React.CSSProperties = {
  color: "rgb(230, 85, 13)"
}
//rgb(149, 150, 151) grey
//rgb(49, 130, 189) blue
const DateIconStyle: React.CSSProperties = {
  color: "#ed6210",
}
const DateTextStyle: React.CSSProperties = {
  color: "rgb(149, 150, 151)",
  fontStyle: "italic",
}

const NoteIconStyle: React.CSSProperties = {
  color: "grey",
}
const NoteTextStyle: React.CSSProperties = {
  color: "rgb(149, 150, 151)",
  fontStyle: "italic",
}

const CreditsIconStyle: React.CSSProperties = {
  color: "rgb(49, 130, 189)",
}
const CreditsTextStyle: React.CSSProperties = {
  color: "rgb(49, 130, 189)",
  fontStyle: "italic",
}

const SourceIconStyle: React.CSSProperties = {
  color: "grey",
}
const SourceTextStyle: React.CSSProperties = {
  color: "rgb(149, 150, 151)",
  fontStyle: "italic",
}

const LinkIconStyle: React.CSSProperties = {
  color: "#03a9f4",
}
const LinkTextStyle: React.CSSProperties = {
  color: "rgb(49, 130, 189)",
  fontStyle: "italic",
}


export default function JsonSection( {object} : {object: ProjectObject}) {

    const [display, setDisplay] = object.children? useState("inherit") : useState("none");
    const [icon, setIcon] = useState("fa-folder-open");
    const {selected, setSelected} = useContext(selectedObjectContext)

    let childrenElements: JSX.Element | JSX.Element[] | null = null;

    if(object.children) {
      // Folder things...
      if(Array.isArray(object.children)) {
        childrenElements = object.children
          .sort((a, b) => {
            if(a.children && !b.children) return -1;
            else if(a.children && b.children) return 0;
            else return 1;
          })
          .map( (obj) => (
            <JsonSection object={obj} />
          ));

      } else {
        childrenElements = <JsonSection object= {object.children} />;
      }
    } else {

    }

    const expandObject = () => {
      // setDisplay("none")
      if(display == "inherit") setDisplay("none");
      else setDisplay("inherit");

      if(icon == "fa-folder") setIcon("fa-folder-open");
      else setIcon("fa-folder");

    }

    const selectObject = () => {
      if(object !== selected) setSelected(object)
      else setSelected(undefined)
    }

    let ClassName = object.children? `fas ${icon}` : "fa-solid fa-file";
    let styleUsed = object.children? FolderIconStyle : FileIconStyle;
    let initialWord = object.children? `Folder` : "File";
    return (
      <div>
        <span style={object == selected? {outline: "3px dashed red", outlineOffset: "2px"} : {}}><span onClick={() => expandObject()}><i className={ClassName} style={styleUsed}></i> {initialWord}</span> : <span style={FolderFileNameStyle} onClick={() => selectObject()}>{object.name}</span></span>
        <div style={{...innerContainersStyle, display: display}}>

          {object.date? <div style={DateTextStyle}><i className="fa-solid fa-calendar" style={DateIconStyle}></i> date : <span>{object.date}</span></div>
            : null}
          {object.note? object.note.map( note => <div style={NoteTextStyle}><i className="fas fa-comment-dots" style={NoteIconStyle}></i> note {note.date? <span style={DateIconStyle}><i className="fa-solid fa-calendar" style={Object.assign({}, NoteTextStyle, DateIconStyle)}></i>{" "+note.date}</span> : null} : <span>{note.message}</span></div>)
            : null}
          {object.source? object.source.map( (str) => ( <div style={SourceTextStyle}><i className="fas fa-link" style={SourceIconStyle}></i> source : <span>{str}</span> </div> ))
            : null}
          {object.link? <div style={LinkTextStyle}><i className="fas fa-link" style={LinkIconStyle}></i> link : <span>{object.link}</span></div>
            : null}
          {object.credits? object.credits.map( (str) => ( <div style={CreditsTextStyle}><i className="fas fa-thumbs-up" style={CreditsIconStyle}></i> credits : <span>{str}</span></div>))
            : null}
          {
          childrenElements
          }
        </div>
      </div>
    )
}
