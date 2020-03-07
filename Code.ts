

let PROJECTS: Sheet = {
  sheet: 'Projects',
  columns: [
    SheetLib.fillWithUnderScore("NAME", 20),
    SheetLib.fillWithUnderScore("KEY", 20),
    "No of Students",
    "No of Verified Students"],
  fields: ["name", "key", "noStudents", "noVerifiedStudents"],
  hidden: false,
  protected: true,
  unprotected: 'A2:B',
}

interface Project {
  name: string,
  key: string
}

function myFunction() {
//  Sheet.createSheet(PROJECTS);
  
  let projects = SheetLib.getData<Project>(PROJECTS);
  Logger.log(projects);
  
  var rows = SheetLib.getRows<Project>(PROJECTS);
  Logger.log(rows);
  
}

function create() {
  SheetLib.createSheet(PROJECTS);
}
