import ProjectObject, { noteObject } from "renderer/@types/ProjectObjectInterface"

const CreditsIconStyle: React.CSSProperties = {
  color: "rgb(49, 130, 189)",
}
const CreditsTextStyle: React.CSSProperties = {
  color: "rgb(49, 130, 189)",
  fontStyle: "italic",
}

export default function JsonCredits({credit, object} : {credit: string, object: ProjectObject}) {

  return (
    <div style={CreditsTextStyle}>
      <i className="fas fa-link" style={CreditsIconStyle}>
      </i> credit : <span>{credit}</span>
    </div>
  )
}
