/**
 * For each spreadsheet that you wish to manipulate
 * you need to create a Sheet object defining the
 * sheet name, columns (as they appear), fields for 
 * accessing the columns.
 * 
 * Optionally you
 */
const PROJECTS: SheetLib.Sheet = {
  name: 'Projects',
  columns: [
    SheetLib.fillWithUnderScore('NAME', 20),
    'KEY',
    "No of Students",
    "No of Verified Students"],
  fields: ["name", "key", "noStudents", "noVerifiedStudents"],
  // hidden: false,
  // protected: true,
  // unprotected: 'A2:B',
}

interface Project {
  name: string,
  key: string
}

function myFunction() {
  //  Sheet.createSheet(PROJECTS);

  let project: Project = {
    key: "projKey",
    name: "Project Name",
  }

  let projectsNew: Project[] = [
    {
      key: "projKey",
      name: "Project Name",
    },
    { key: "en", name: 'fds' }
  ];

  SheetLib.appendRow<Project>(PROJECTS, project);
  SheetLib.appendRow<Project>(PROJECTS, { key: 'proj', name: 'Name' });

  SheetLib.appendRows<Project>(PROJECTS, projectsNew);

  let projects = SheetLib.getData<Project>(PROJECTS);
  Logger.log(projects);

  var rows = SheetLib.getRows<Project>(PROJECTS);
  Logger.log(rows);

  let updatedProj: SheetLib.Row<Project> = rows[0];
  updatedProj.data.name = 'UPdated name';
  updatedProj.data.key  = 'updatedKEY';

  SheetLib.updateRow<Project>(PROJECTS, updatedProj);

}

function create() {
  SheetLib.createSheet(PROJECTS);
}
