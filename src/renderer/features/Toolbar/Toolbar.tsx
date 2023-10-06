import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import AddCreditButton from 'renderer/features/Toolbar/components/AddCredits';
import AddFileButton from 'renderer/features/Toolbar/components/AddFile';
import AddFolderButton from 'renderer/features/Toolbar/components/AddFolder';
import AddNoteButton from 'renderer/features/Toolbar/components/AddNote';
import AddSourceButton from 'renderer/features/Toolbar/components/AddSource';
import ChangeDateButton from 'renderer/features/Toolbar/components/ChangeDate';
import ChangeLinkButton from 'renderer/features/Toolbar/components/ChangeLink';
import DeleteButton from 'renderer/features/Toolbar/components/DeleteButton';
import ObjectName from 'renderer/features/Toolbar/components/ObjectName';
import { selectedObjectContext } from '../../app/Workspace';

export default function Toolbar() {
  const { selected } = useContext(selectedObjectContext);

  return (
    <Row style={{ marginLeft: '1px' }}>
      {selected && (
        <Col
          xs={12}
          style={{
            backgroundColor: '#0c0d0e',
            paddingTop: '5px',
            paddingBottom: '5px',
          }}
          className="bg-light"
        >
          <ObjectName />
          {selected?.obj.children ? (
            <>
              <AddFolderButton />
              <AddFileButton />
              <ChangeDateButton />
              <AddNoteButton />
              <AddCreditButton />
              <AddSourceButton />
            </>
          ) : (
            <>
              <ChangeLinkButton />
              <ChangeDateButton />
            </>
          )}
          <DeleteButton />
        </Col>
      )}
    </Row>
  );
}
