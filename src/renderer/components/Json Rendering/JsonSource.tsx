import { useContext } from "react"
import ProjectObject from "renderer/@types/ProjectObjectInterface"
import { selectedObjectContext } from "../Workspace"
import DeleteIcon from "./DeleteIcon"

const SourceIconStyle: React.CSSProperties = {
  color: "grey",
}
const SourceTextStyle: React.CSSProperties = {
  color: "rgb(149, 150, 151)",
  fontStyle: "italic",
}

export default function JsonSource({source, object} : {source: string, object: ProjectObject}) {
  const {selected, setSelected} = useContext(selectedObjectContext)

  const deleteSource = () => {
    object.source?.splice(object.source.indexOf(source), 1)
    if(selected) setSelected({...selected})
    else {
      //@ts-ignore
      setSelected(null); // fix to refresh selection if it is already undefined
      // reverted to 'undefined' in JsonContainer
    }
  }

  return (
  <>
    <div style={SourceTextStyle}>
      <i className="fas fa-link" style={SourceIconStyle}></i>
      {" "}source : <span>{source}</span>
      <span style={{float: "right", fontStyle: "normal", paddingRight: "2px", paddingLeft: "2px"}} className="bg-danger text-white">
        <DeleteIcon onClick={deleteSource} />
      </span>
    </div>
  </>
  )
}
