import { ipcRenderer } from "electron"
import { readdirSync, readFileSync } from "fs"
import React, { useContext } from "react"
import { Anchor } from "react-bootstrap"
import { projectContext } from "renderer/App"
import { FolderToObject } from "renderer/utilities/FolderToObject"

export default function OpenFolderOption({style} : {style : React.CSSProperties | undefined}) {

    const {project, setProject} = useContext(projectContext)

    const CreateFromFolder = () => {

      ipcRenderer.invoke("openFolder")
      .then( (filePath) => {
        if(!filePath) return;
        let project = FolderToObject(filePath, "normal", true)
        setProject(project)
      })
    }

    return(
        <Anchor role="" color="primary" onClick={() => CreateFromFolder()}>
            <h6 className="ps-5 mb-4" style={style}><i className="fa fa-home pe-2" aria-hidden="true"></i> Folder to Project</h6>
        </Anchor>
    )
}