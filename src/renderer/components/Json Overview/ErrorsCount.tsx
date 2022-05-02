import { useContext, useEffect, useState } from "react"
import { projectContext } from "renderer/App"
import { selectedObjectContext } from "../Workspace"
import { JSONoverviewResultStyle, JSONoverviewTitleStyle } from "./Styling"

let errorsCount = 0;

export default function ErrorsCount() {
  const {project} = useContext(projectContext)
  const {selected} = useContext(selectedObjectContext)
  const [, refresh] = useState(0)

  useEffect(() => {
    refresh(errorsCount)
  }, [selected, project])

  return(
    <h6 style={JSONoverviewTitleStyle}>Errors Count: <span style={JSONoverviewResultStyle}>{errorsCount}</span></h6>
  )
}

export function modifyErrorsCount(value: number) {
  errorsCount += value;
}
