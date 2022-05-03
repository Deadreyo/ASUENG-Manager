import { ipcRenderer } from "electron"
import { readFileSync } from "fs"
import { useContext } from "react"
import { Anchor } from "react-bootstrap"
import { projectContext } from "renderer/App"

export default function OpenProjectOption() {

    const {setProject} = useContext(projectContext)

    const CreateFromJson = () => {

      ipcRenderer.invoke("openProject")
      .then( (filePath) => {
        if(!filePath) return;
        setProject(JSON.parse(readFileSync(filePath).toString()))
      })
    }

    return(
        <Anchor role="" color="primary" onClick={() => CreateFromJson()} className="sidepanelOptionsAnchor">
            <h6 className="ps-5 mb-4 sidepanelOptionsTitle"><i className="fa fa-file-upload pe-2" aria-hidden="true"></i> Open a Project</h6>
        </Anchor>
    )
}
