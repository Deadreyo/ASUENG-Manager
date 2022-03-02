import React, { useContext } from "react"
import ReactJson from "react-json-view"
import { projectContext } from "renderer/App"

const styles: React.CSSProperties = {
  height: "100%",
  overflowY: "auto",
  maxHeight: "60vh",
}


export default function FileViewer() {

  const {project, setProject} = useContext(projectContext)

  return(
    <ReactJson src={project} theme={"ocean"} displayDataTypes={false} style={styles} name="project" collapsed={1}/>
  )
}
