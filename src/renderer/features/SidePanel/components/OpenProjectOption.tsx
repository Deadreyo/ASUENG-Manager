import { ipcRenderer } from "electron"
import { readFileSync } from "fs"
import { useContext } from "react"
import { Anchor } from "react-bootstrap"
import { ProjectObjContext } from "renderer/app/App"
import LegacyObjectUpdater from "renderer/features/SidePanel/lib/LegacyObjectUpdater"

export default function OpenProjectOption() {

    const {setProject} = useContext(ProjectObjContext)

    const CreateFromJson = () => {

      ipcRenderer.invoke("openProject")
      .then( (filePath) => {
        if(!filePath) return;
        const project = JSON.parse(readFileSync(filePath).toString())
        console.log("project: ", JSON.parse(readFileSync(filePath).toString()))
        LegacyObjectUpdater(project)
        console.log("project After Update: ", project)

        // LegacyObjectUpdater is async, in which it uses process.nextTick to process object edits,
        // so we need to wait for it to finish before setting the project
        setImmediate( () => setProject(project))
      })
    }

    return(
        <Anchor role="" color="primary" onClick={() => CreateFromJson()} className="sidepanelOptionsAnchor">
            <h6 className="ps-5 mb-4 sidepanelOptionsTitle"><i className="fa fa-file-upload pe-2" aria-hidden="true"></i> Open a Project</h6>
        </Anchor>
    )
}
