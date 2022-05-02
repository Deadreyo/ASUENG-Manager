import { useContext } from "react"
// import ReactJson from "react-json-view"
import { projectContext } from "renderer/App"
import JsonContainer from "./JsonContainer"

export default function JSONViewer() {

  const {project} = useContext(projectContext)
  //ashes, brewer, bright
  return(
    // <ReactJson src={project} theme={"ashes"} displayDataTypes={false} name="project" collapsed={1} quotesOnKeys={false} />
    <JsonContainer src={project}/>
  )
}
