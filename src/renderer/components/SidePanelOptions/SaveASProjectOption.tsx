import { ipcRenderer } from "electron"
import { readFileSync, writeFile } from "fs"
import React, { useContext } from "react"
import { Anchor } from "react-bootstrap"
import { projectContext } from "renderer/App"

export default function SaveASProjectOption({style} : {style : React.CSSProperties | undefined}) {

    const {project, setProject} = useContext(projectContext)

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
        <Anchor role="" color="primary" onClick={() => SaveAsJSON()}>
            <h6 className="ps-5 mb-4" style={style}>
              <i className="fa fa-home pe-2" aria-hidden="true"></i> Save Project As
            </h6>
        </Anchor>
    )
}
