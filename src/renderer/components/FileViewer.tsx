import React, { useContext } from "react"
import ReactJson from "react-json-view"
import { projectContext } from "renderer/App"
import ProjectObject from "renderer/@types/ProjectObjectInterface"
import JsonCustomRender from "./Json Rendering/JsonCustomRender"

const styles: React.CSSProperties = {
  height: "100%",
  overflowY: "auto",
  maxHeight: "60vh",
}

export default function FileViewer() {

  const {project, setProject} = useContext(projectContext)
  //ashes, brewer, bright
  return(
    // <ReactJson src={project} theme={"brewer"} displayDataTypes={false} style={styles} name="project" collapsed={1} quotesOnKeys={false} />
    <JsonCustomRender src={project}/>
  )
}
