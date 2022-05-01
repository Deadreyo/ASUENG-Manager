import { ipcRenderer } from "electron"
import { readFileSync } from "fs"
import { useContext } from "react"
import { Anchor } from "react-bootstrap"
import { projectContext } from "renderer/App"

export default function SaveProjectOption() {

    const {setProject} = useContext(projectContext)

    const CreateFromJson = () => {

      ipcRenderer.invoke("showDialog")
      .then( (filePath) => {
        setProject(JSON.parse(readFileSync(filePath).toString()))
      })
    }

    return(
        <Anchor role="" color="primary" onClick={() => CreateFromJson()} className="sidepanelOptionsAnchor">
            <h6 className="ps-5 mb-4 sidepanelOptionsTitle"><i className="fa fa-home pe-2" aria-hidden="true"></i> Save Project</h6>
        </Anchor>
    )
}
