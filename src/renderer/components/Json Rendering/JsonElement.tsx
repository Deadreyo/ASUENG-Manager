import { useContext, useEffect, useState } from "react";
import ProjectObject from "renderer/@types/ProjectObjectInterface";
import { selectedObjectContext } from "../Workspace";
import ErrorComponent from "./ErrorComponent";
import JsonMapChildren from "./JsonMapChildren";
import { NameValidation } from "./JsonValidation";
import WarningComponent from "./WarningComponent";

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


export default function JsonElement( {object, parent} : {object: ProjectObject, parent: ProjectObject | undefined}) {


    const [display, setDisplay] = useState("none");
    const [icon, setIcon] = useState(object.children? "fa-folder" : "fa-file");
    const {selected, setSelected} = useContext(selectedObjectContext)

    useEffect(() => {
      if(display == "inherit") {
        if(object.children) setIcon("fa-folder-open")
        else setIcon("fa-file-alt")
      } else {
        if(object.children) setIcon("fa-folder")
        else setIcon("fa-file")
      }
    }, [object])


    // Validation
    const [validName, invalidChar] = NameValidation(object)
    const unlinkedFile = !object.children && !object.link;

    const FolderFileNameStyle: React.CSSProperties = {
      color: validName? unlinkedFile? "#e6e60d" :"rgb(230, 85, 13)" : "red"
    }

    if(object.note && !Array.isArray(object.note)) {
      object.note = [object.note]
    }
    if(object.source && !Array.isArray(object.source)) {
      object.source = [object.source]
    }
    if(object.credits && !Array.isArray(object.credits)) {
      object.credits = [object.credits]
    }

    let childrenElements: JSX.Element | JSX.Element[] | null = JsonMapChildren(object);

    const expandObject = () => {
      // setDisplay("none")
      if(display == "inherit") {
        setDisplay("none")
        if(object.children) setIcon("fa-folder")
        else setIcon("fa-file")
      } else {
        setDisplay("inherit");
        if(object.children) setIcon("fa-folder-open")
        else setIcon("fa-file-alt")
      }

    }

    const selectObject = () => {
      if(object !== selected?.obj) setSelected({obj: object, parent: parent});
      else setSelected(undefined);
    }

    let styleUsed = object.children? FolderIconStyle : FileIconStyle;
    let initialWord = object.children? `Folder` : "File";
    return (
      <div>
        <span style={object == selected?.obj ? {outline: "3px dashed red", outlineOffset: "2px"} : {}}>
          <span onClick={() => expandObject()}>
            <i className={`fas ${icon}`} style={styleUsed}></i> {initialWord}
          </span>
          :
          <span style={FolderFileNameStyle} onClick={() => selectObject()}>
            {invalidChar !== ""? <ErrorComponent title={`( ${invalidChar} ) is not allowed.`} />
            : unlinkedFile? <WarningComponent title={`File has no link.`} />
            : null
            }
            {" "+object.name}
          </span>
        </span>

        <div style={{...innerContainersStyle, display: display}}>

          {object.date? <div style={DateTextStyle}><i className="fa-solid fa-calendar" style={DateIconStyle}></i> date : <span>{object.date}</span></div>
            : null}
          {object.note? object.note.map( (note, i) => <div style={NoteTextStyle} key={i}><i className="fas fa-comment-dots" style={NoteIconStyle}></i> note {note.date? <span style={DateIconStyle}><i className="fa-solid fa-calendar" style={Object.assign({}, NoteTextStyle, DateIconStyle)}></i>{" "+note.date}</span> : null} : <span>{note.message}</span></div>)
            : null}
          {object.source? object.source.map( (str, i) => ( <div style={SourceTextStyle} key={i}><i className="fas fa-link" style={SourceIconStyle}></i> source : <span>{str}</span> </div> ))
            : null}
          {object.link? <div style={LinkTextStyle}><i className="fas fa-link" style={LinkIconStyle}></i> link : <span>{object.link}</span></div>
            : null}
          {object.credits? object.credits.map( (str, i) => ( <div style={CreditsTextStyle} key={i}><i className="fas fa-thumbs-up" style={CreditsIconStyle}></i> credits : <span>{str}</span></div>))
            : null}
          {
          childrenElements
          }
        </div>
      </div>
    )
}
