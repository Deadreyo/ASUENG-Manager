import React from "react"
import ProjectObject from "renderer/utilities/ProjectObjectInterface"

const containerStyle: React.CSSProperties = {
  backgroundColor: "#0c0d0e",
  color: "rgb(252, 253, 254)",
  letterSpacing: "0.5px",
}

const innerContainersStyle: React.CSSProperties = {
  paddingLeft: "20px",
  borderLeft: "2px solid grey"
}

export default function JsonCustomRender({src}: {src: ProjectObject}) {

    const convert = (object: ProjectObject) =>{
      // console.log(object.children)
      return (
        <div>
          {object.children? <span><i className="fas fa-folder"></i> name : {object.name}</span> : <span><i className="fa-solid fa-folder-open"></i> name : {object.name}</span>}
          {object.children? Array.isArray(object.children)? object.children.map( (obj, ind) => (
            <div key={ind} style={innerContainersStyle}>
              {convert(obj)}
            </div>)
          ) :
          <div key={0} style={innerContainersStyle}>
            {convert(object.children)}
          </div>
           : null}
        </div>
      )
    }

    console.log(src)

    let elementArray = []


    return(
        <div style={containerStyle}>
          {convert(src)}
        </div>
    )
}
