export default class ValidationRules {
  // The un-allowed Characters
  static NameFolderRule = /[^\w| |\.|\-]/g;
  static NameFileRule = /\/|\\|"|<|>|:|\?|\*|\|/g;
  static LinkRule = / |{|}|\||\\|\^|~|\[|\]|`/g;
}
