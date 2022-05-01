import ProjectObject from "renderer/@types/ProjectObjectInterface";

/**
 *
 * @param object The object to check its name
 * @returns an array, with the first element being if it is valid (true) or not,
 * and the second element being the invalid character or "" if it is valid
 */
export function NameValidation(object: ProjectObject): [boolean, string] {
  let valid = true;
  let objName = object.name.replace(".pdf", "")
  let invalidChar = "";
  let search = object.children? /[^\w| |\.|\-]/g : /\/|\\|"|<|>|:|\?|\*|\|/g ;

  let invalidCharPos = objName.search(search)
  if(invalidCharPos != -1) {
    valid = false;
    invalidChar = objName[invalidCharPos];
  }
  return [valid, invalidChar];
}
