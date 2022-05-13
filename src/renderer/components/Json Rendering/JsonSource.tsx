import ProjectObject, { noteObject } from "renderer/@types/ProjectObjectInterface"

const SourceIconStyle: React.CSSProperties = {
  color: "grey",
}
const SourceTextStyle: React.CSSProperties = {
  color: "rgb(149, 150, 151)",
  fontStyle: "italic",
}

export default function JsonSource({source, object} : {source: string, object: ProjectObject}) {

  return (
  <div style={SourceTextStyle}>
    <i className="fas fa-link" style={SourceIconStyle}></i>
    {" "}source : <span>{source}</span>
    </div>
  )
}
