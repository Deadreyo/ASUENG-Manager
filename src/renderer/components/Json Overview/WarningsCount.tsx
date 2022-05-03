import { useContext, useEffect, useState } from "react"
import { projectContext } from "renderer/App"
import { selectedObjectContext } from "../Workspace"
import { JSONoverviewResultStyle, JSONoverviewTitleStyle } from "./Styling"

let warningsCount = 0;

export default function WarningsCount() {
  const {project} = useContext(projectContext)
  const {selected} = useContext(selectedObjectContext)
  const [, refresh] = useState(0)

  useEffect(() => {
    refresh(warningsCount)
  }, [selected, project])

  return(
    <h6 style={JSONoverviewTitleStyle}>Warnings Count: <span style={{...JSONoverviewResultStyle, color: "#e6e60d"}}>{warningsCount}</span></h6>
  )
}

export function modifyWarningsCount(value: number) {
  warningsCount += value;
}
