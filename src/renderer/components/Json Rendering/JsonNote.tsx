import ProjectObject, { noteObject } from "renderer/@types/ProjectObjectInterface"

const DateIconStyle: React.CSSProperties = {
  color: "#ed6210",
}
const DateTextStyle: React.CSSProperties = {
  color: "rgb(149, 150, 151)",
  fontStyle: "italic",
}

const NoteIconStyle: React.CSSProperties = {
  color: "grey",
}
const NoteTextStyle: React.CSSProperties = {
  color: "rgb(149, 150, 151)",
  fontStyle: "italic",
}

export default function JsonNote({note, object} : {note: noteObject, object: ProjectObject}) {

  return (
    <div style={NoteTextStyle}>
      <i className="fas fa-comment-dots" style={NoteIconStyle}></i>
      {" "}note {note.date?
        <span style={DateIconStyle}>
          <i className="fa-solid fa-calendar" style={Object.assign({}, NoteTextStyle, DateIconStyle)}></i>
          {" "+note.date}
        </span> : null}
      : <span>{note.message}</span>
    </div>
  )
}
