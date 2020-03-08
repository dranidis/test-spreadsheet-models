"use strict";
/**
 * For each spreadsheet that you wish to manipulate
 * you need to create a Sheet object defining the
 * sheet name, columns (as they appear), fields for
 * accessing the columns.
 *
 * Optionally you
 */
var PROJECTS = {
    name: 'Projects',
    columns: [
        SheetLib.fillWithUnderScore('NAME', 20),
        'KEY',
        "No of Students",
        "No of Verified Students"
    ],
    fields: ["name", "key", "noStudents", "noVerifiedStudents"]
};
function myFunction() {
    //  Sheet.createSheet(PROJECTS);
    var project = {
        key: "projKey",
        name: "Project Name"
    };
    var projectsNew = [
        {
            key: "projKey",
            name: "Project Name"
        },
        { key: "en", name: 'fds' }
    ];
    SheetLib.appendRow(PROJECTS, project);
    SheetLib.appendRow(PROJECTS, { key: 'proj', name: 'Name' });
    SheetLib.appendRows(PROJECTS, projectsNew);
    var projects = SheetLib.getData(PROJECTS);
    Logger.log(projects);
    var rows = SheetLib.getRows(PROJECTS);
    Logger.log(rows);
    var updatedProj = rows[0];
    updatedProj.data.name = 'UPdated name';
    updatedProj.data.key = 'updatedKEY';
    SheetLib.updateRow(PROJECTS, updatedProj);
}
function create() {
    SheetLib.createSheet(PROJECTS);
}
