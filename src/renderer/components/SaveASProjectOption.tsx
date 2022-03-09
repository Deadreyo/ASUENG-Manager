import { ipcRenderer } from "electron"
import { readFileSync } from "fs"
import React, { useContext } from "react"
import { Anchor } from "react-bootstrap"
import { projectContext } from "renderer/App"

export default function SaveASProjectOption({style} : {style : React.CSSProperties | undefined}) {

    const {project, setProject} = useContext(projectContext)

    const CreateFromJson = () => {

      ipcRenderer.invoke("showDialog")
      .then( (filePath) => {
        setProject(JSON.parse(readFileSync(filePath).toString()))
      })
    }

    return(
        <Anchor role="" color="primary" onClick={() => CreateFromJson()}>
            <h6 className="ps-5 mb-4" style={style}>
              <i className="fa fa-home pe-2" aria-hidden="true"></i> Save Project As
            </h6>
        </Anchor>
    )
}