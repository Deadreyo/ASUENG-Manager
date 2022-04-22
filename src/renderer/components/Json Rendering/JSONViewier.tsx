import { useContext } from "react"
import ReactJson from "react-json-view"
import { projectContext } from "renderer/App"
import JsonCustomRender from "./JsonCustomRender"

export default function JSONViewer() {

  const {project} = useContext(projectContext)
  //ashes, brewer, bright
  return(
    // <ReactJson src={project} theme={"brewer"} displayDataTypes={false} style={styles} name="project" collapsed={1} quotesOnKeys={false} />
    <JsonCustomRender src={project}/>
  )
}
