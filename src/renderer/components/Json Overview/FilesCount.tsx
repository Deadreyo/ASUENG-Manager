import { useContext, useEffect, useState } from "react"
import ProjectObject from "renderer/@types/ProjectObjectInterface"
import { projectContext } from "renderer/App"
import { selectedObjectContext } from "../Workspace"

export default function FilesCount() {
  const {project} = useContext(projectContext)
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
    <h6>Folders Count: {filesCount}</h6>
  )
}
