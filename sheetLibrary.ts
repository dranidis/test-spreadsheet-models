interface Sheet {
  sheet: string,
  columns: string[],
  fields: string[],
  hidden: boolean,
  protected: boolean,
  unprotected: string
}

interface Row<T> {
  data: T,
  row: number
}


interface SheetLib {
  fillWithUnderScore(str: string, len: number): string;
  createSheet(sheetModel: Sheet): void;
  getRows<T>(sheet: Sheet, firstDataRow?: number): Row<T>[];
  /**
   * Reads the data from any model sheet. Ignores the heading.
   * Returns an array of objects using the fields as attributes.
   *
   * Stops reading if no values in any field.
   *
   * @param {Sheet} sheetModel
   * @return {T[]} an array of objects
   */
  getData<T>(sheetModel: Sheet): T[];

}

declare var SheetLib: SheetLib;
