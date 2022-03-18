import { readdirSync, statSync, readFileSync, PathLike } from "fs"
import path, { extname } from "path"

export function FolderToObject(dir: string, mode: 'normal' | 'link' = 'normal', mainInstance?: boolean) {
    let totalObj: {}[] = []
    readdirSync(dir).forEach( fileName => {

      // console.log(fileName)
      var filepath = path.join(dir, fileName)
      var isDir = statSync(filepath).isDirectory()


      var children = null

      if(isDir) {
        var children: any = FolderToObject(filepath, mode)
      } else {
        //
      }


      let obj: any = {}
      let fixedName = fileName;
      if(mode === 'normal') {
        if(fileName.indexOf(' - 19') > 0) {
          obj.date = "19"
          fixedName = fixedName.replace(" - 19", "")
        }
        if(fileName.indexOf(' - 20') > 0) {
          obj.date = "20"
          fixedName = fixedName.replace(" - 20", "")
        }
        if(fileName.indexOf(' - 21') > 0) {
          obj.date = "21"
          fixedName = fixedName.replace(" - 21", "")
        }
        fixedName = fixedName.replace(/\s/g, "_")
      }

      obj.name = fixedName
      if(extname(fileName) === '.txt') {
        if(fileName.slice(0, 4) === 'note') obj.note = readFileSync(filepath).toString()
        if(fileName.slice(0, 7) === 'credits') obj.credits = readFileSync(filepath).toString()
      } else {
        if(mode === 'link') if(!isDir) obj.link = ""
        if(isDir) obj.children = children
      }

      totalObj.push(obj)
    })

    if(mainInstance) {
      let returnedObject = {
        name: path.basename(dir),
        children: totalObj
      }
      return returnedObject;
    } else {
      return totalObj
    }
  }
