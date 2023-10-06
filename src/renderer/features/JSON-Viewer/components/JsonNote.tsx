import { useContext, useEffect } from 'react';
import ProjectObject, {
  NoteObject,
} from 'renderer/types/ProjectObjectInterface';
import { selectedObjectContext } from '../../../app/Workspace';
import DeleteButton from './DeleteButton';

const DateIconStyle: React.CSSProperties = {
  color: '#ed6210',
};

const NoteIconStyle: React.CSSProperties = {
  color: 'grey',
};
const NoteTextStyle: React.CSSProperties = {
  color: 'rgb(149, 150, 151)',
  fontStyle: 'italic',
};

export default function JsonNote({
  note,
  object,
}: {
  note: NoteObject;
  object: ProjectObject;
}) {
  const { selected, setSelected } = useContext(selectedObjectContext);

  const deleteNote = () => {
    object.note?.splice(object.note.indexOf(note), 1);
    if (selected) setSelected({ ...selected });
    else {
      //@ts-ignore
      setSelected(null); // fix to refresh selection if it is already undefined
      // reverted to 'undefined' in JsonContainer
    }
  };

  return (
    <>
      <div style={NoteTextStyle}>
        <i className="fas fa-comment-dots" style={NoteIconStyle}></i> note{' '}
        {note.date ? (
          <span style={DateIconStyle}>
            <i
              className="fa-solid fa-calendar"
              style={Object.assign({}, NoteTextStyle, DateIconStyle)}
            ></i>
            {' ' + note.date}
          </span>
        ) : null}
        : <span>{note.message}</span>
        <DeleteButton onClick={deleteNote} />
      </div>
    </>
  );
}
