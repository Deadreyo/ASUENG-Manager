import { useContext, useEffect, useState } from "react"
import ProjectObject from "renderer/types/ProjectObjectInterface"
import { ProjectObjContext } from "renderer/app/App"
import { selectedObjectContext } from "../../../app/Workspace"
import { JSONoverviewTitleStyle, JSONoverviewResultStyle } from "../shared-styling"

export default function FilesCount() {
  const {project} = useContext(ProjectObjContext)
  const {selected} = useContext(selectedObjectContext)
  const [filesCount, setFilesCount] = useState(0)

  let files = 0;

  useEffect(() => {
    files = 0;
    countFiles(project);
    setFilesCount(files)
  }, [project, selected])

  const countFiles = (object: ProjectObject) => {
    if(object.children) {
      object.children.forEach(child => {
          countFiles(child)
      })
    } else {
      files++;
    }
  }

  return(
    <h6 style={JSONoverviewTitleStyle}>Files Count: <span style={JSONoverviewResultStyle}>{filesCount}</span></h6>
  )
}
