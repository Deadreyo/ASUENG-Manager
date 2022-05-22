import { useContext } from "react"
import ProjectObject from "renderer/@types/ProjectObjectInterface"
import { selectedObjectContext } from "../Workspace"
import DeleteButton from "./DeleteButton"

const CreditsIconStyle: React.CSSProperties = {
  color: "rgb(49, 130, 189)",
}
const CreditsTextStyle: React.CSSProperties = {
  color: "rgb(49, 130, 189)",
  fontStyle: "italic",
}

export default function JsonCredits({credit, object} : {credit: string, object: ProjectObject}) {
  const {selected, setSelected} = useContext(selectedObjectContext)

  const deleteCredit = () => {
    object.credits?.splice(object.credits.indexOf(credit), 1)
    if(selected) setSelected({...selected})
    else {
      //@ts-ignore
      setSelected(null); // fix to refresh selection if it is already undefined
      // reverted to 'undefined' in JsonContainer
    }
  }

  return (
    <>
      <div style={CreditsTextStyle}>
        <i className="fas fa-link" style={CreditsIconStyle}>
        </i> credit : <span>{credit}</span>
        <DeleteButton onClick={deleteCredit} />
      </div>
    </>
  )
}
