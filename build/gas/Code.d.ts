/// <reference types="spreadsheet-models" />
/**
 * For each spreadsheet that you wish to manipulate
 * you need to create a Sheet object defining the
 * sheet name, columns (as they appear), fields for
 * accessing the columns.
 *
 * Optionally you
 */
declare const PROJECTS: SheetLib.Sheet;
interface Project {
    name: string;
    key: string;
}
declare function myFunction(): void;
declare function create(): void;
