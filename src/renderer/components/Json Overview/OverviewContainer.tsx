import { Row, Col } from "react-bootstrap";
import FilesCount from "./FilesCount";
import FoldersCount from "./FoldersCount";

export default function OverviewContainer() {

  return(
    <Row>
      <Col xs={12} className="mt-4 mb-3">
        <div className="p-1">
          <center><h5 style={{borderBottom: "#303030 1px solid"}} className="mb-3 pb-1 text-warning">Overview</h5></center>
          <div className="p-2 pt-3" style={{backgroundColor: "#0c0d0e"}}>
            <FoldersCount />
            <FilesCount />
            <h6>Errors: 22</h6>
            <h6>Unlinked Files: 6</h6>
          </div>


        </div>
      </Col>
    </Row>
  )
}
