import { ipcRenderer } from "electron"
import { useContext } from "react"
import { Anchor } from "react-bootstrap"
import { projectContext } from "renderer/App"
import { FolderToObject } from "renderer/utilities/FolderToObject"

export default function OpenFolderOption() {

    const {setProject} = useContext(projectContext)

    const CreateFromFolder = () => {

      ipcRenderer.invoke("openFolder")
      .then( (filePath) => {
        if(!filePath) return;
        let project = FolderToObject(filePath, "normal", true)
        console.log("project: ", project)
        setProject(project)
      })
    }

    return(
        <Anchor role="" color="primary" onClick={() => CreateFromFolder()} className="sidepanelOptionsAnchor">
            <h6 className="ps-5 mb-4 sidepanelOptionsTitle"><i className="fa fa-folder-plus pe-2" aria-hidden="true"></i> Folder to Project</h6>
        </Anchor>
    )
}
