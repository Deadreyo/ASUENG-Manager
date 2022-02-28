import React from "react"
import ReactJson from "react-json-view"

const jsonTest = {
  "glossary": {
    "title": "example glossary",
    "comprehensive": true,
    "link": undefined,
    "count": 1,
    "GlossDiv": {
        "title": "S",
        "GlossList": {
            "GlossEntry": {
                "ID": "SGML",
                "SortAs": "SGML",
                "GlossTerm": "Standard Generalized Markup Language",
                "Acronym": "SGML",
                "Abbrev": "ISO 8879:1986",
                "GlossDef": {
                    "para": "A meta-markup language, used to create markup languages such as DocBook.",
                    "GlossSeeAlso": ["GML", "XML"]
                },
                "GlossSee": "markup"
            }
        }
    }
  }
}

const styles: React.CSSProperties = {
  height: "100%",
  overflowY: "auto",
  maxHeight: "60vh",
}

export default function FileViewer() {
  return(
    <ReactJson src={jsonTest} theme={"ocean"} displayDataTypes={false} style={styles}/>
  )
}
