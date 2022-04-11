import { readdirSync, statSync, readFileSync, PathLike } from "fs"
import path, { extname } from "path"
import ProjectObject from "./ProjectObjectInterface"

export function FolderToObject(dir: string, mode: 'normal' | 'link' = 'normal', mainInstance?: boolean): ProjectObject | ProjectObject[] {
    let totalObj: ProjectObject[] = []
    readdirSync(dir).forEach( fileName => {

      // console.log(fileName)
      const filepath = path.join(dir, fileName)
      const isDir = statSync(filepath).isDirectory()


      let children: ProjectObject | ProjectObject[] | undefined;

      if(isDir) {
        children = FolderToObject(filepath, mode)
      } else {
        //
      }


      let obj: ProjectObject = {} as ProjectObject;
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
        if(fileName.slice(0, 4) === 'note') obj.note = [{message: readFileSync(filepath).toString(), date: obj.date}]
        if(fileName.slice(0, 7) === 'credits') obj.credits = [... readFileSync(filepath).toString().split('\n')]
      } else {
        if(mode === 'link') if(!isDir) obj.link = ""

        if(isDir) {
          if(children && Array.isArray(children)) {
            children.filter( child => child.note !== undefined).forEach(child => {
              if(!obj.note) obj.note = [];
              if(child.note) obj.note.push(...child.note);
              (children as ProjectObject[]).splice((children as ProjectObject[]).indexOf(child), 1)
            })

            children.filter( child => child.credits !== undefined).forEach(child => {
              if(!obj.credits) obj.credits = [];
              if(child.credits) obj.credits.push(...child.credits);
              (children as ProjectObject[]).splice((children as ProjectObject[]).indexOf(child), 1)
            })
          }
          obj.children = children
        }

      }

      totalObj.push(obj)
    })

    if(mainInstance) {
      let returnedObject: ProjectObject = {
        name: path.basename(dir),
        children: totalObj
      }
      return returnedObject;
    } else {
      return totalObj
    }
  }
