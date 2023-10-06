import { ipcRenderer } from "electron"
import { writeFile } from "fs"
import { useContext } from "react"
import { Anchor } from "react-bootstrap"
import { ProjectObjContext } from "renderer/app/App"

export default function SaveASProjectOption() {

    const {project} = useContext(ProjectObjContext)

    const SaveAsJSON = () => {

      ipcRenderer.invoke("saveAs")
      .then( (filePath: string | undefined) => {
        if(!filePath) {
          alert("Save cancelled");
          return;
        }

        writeFile(filePath, JSON.stringify(project), (err) => {
          if(err) {
            alert("Error saving project");
            console.error("Save As Error: ", err)
          } else {
            alert("Saved to "+filePath)
          }
        })

      })
    }

    return(
        <Anchor role="" color="primary" onClick={() => SaveAsJSON()} className="sidepanelOptionsAnchor">
            <h6 className="ps-5 mb-4 sidepanelOptionsTitle">
              <i className="fa fa-save pe-2" aria-hidden="true"></i> Save Project As
            </h6>
        </Anchor>
    )
}
