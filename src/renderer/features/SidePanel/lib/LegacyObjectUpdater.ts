import ProjectObject, { NoteObject } from "renderer/types/ProjectObjectInterface";

export default function LegacyObjectUpdater(project: ProjectObject) : void {try{
  ObjectUpdating(project, null)
}catch(e){console.log('FKKKKK: ',e)}
}

function ObjectUpdating(obj: ProjectObject, parent: ProjectObject | null) : void {
  childrenArrayUpdating(obj)
  console.log(obj.name)
  if(obj.name == "Previous_Exams") console.log("IONNNNSIIIIIDE")
  if(obj.children) {
    obj.children.forEach(child => {
      ObjectUpdating(child, obj)
    })
  }
  noteUpdating(obj, parent)
  sourceUpdating(obj)
  creditsUpdating(obj, parent)


}

function childrenArrayUpdating(obj: ProjectObject) : void {
  if(obj.children) {
    if(!Array.isArray(obj.children)) {
      obj.children = [obj.children]
    }
  }
}

function noteUpdating(obj: ProjectObject, parent: ProjectObject | null) : void {
  if(!parent) {
    return;
  };
  if(obj.name.indexOf('.txt') >= 0 && obj.note) {
    console.log(obj.name, obj.note)
    let newNote: NoteObject = {
      message: obj.note as unknown as string,
      date: obj.date
    }
    if(!parent.note) parent.note = []
    parent.note.push(newNote)
    // We schedule the deletion of the note from the parent using nextTick
    // so that it doesn't mess with the "forEach" loop of the parent
    process.nextTick( () => {
      if(parent.children) {
        parent.children.splice(parent.children.indexOf(obj), 1)
      }
    })
  }
}

function sourceUpdating(obj: ProjectObject) : void {
  if(obj.source && !Array.isArray(obj.source)) {
    obj.source = [obj.source]
  }
}

function creditsUpdating(obj: ProjectObject, parent: ProjectObject | null) : void {

    if(obj.credits && !Array.isArray(obj.credits)) {
      obj.credits = [obj.credits]
    }

    if(parent) {
      if(obj.name.indexOf('.txt') >= 0 && obj.credits) {
        if(!parent.credits) parent.credits = []

        parent.credits.push(...obj.credits)
        // We schedule the deletion of the note from the parent using nextTick
        // so that it doesn't mess with the "forEach" loop of the parent
        process.nextTick( () => {
          if(parent.children) {
            parent.children.splice(parent.children.indexOf(obj), 1)
          }
        })
      }
    }
}
