import { default as Toolbox } from './toolbox';
/**
 * @typedef {object} TableConfig
 * @description Tool's config from Editor
 * @property {boolean} withHeadings — Uses the first line as headings
 * @property {TableCell[][]} content — two-dimensional array with table contents
 */
/**
 * @typedef {object} TableCell
 * @description Data per table cell
 * @property {string} content - string content for table
 * @property {number} colspan - width of the cell
 * @property {number} rowspan - height of the cell
 */
/**
 * @typedef {object} TableData - object with the data transferred to form a table
 * @property {number} rows - number of rows in the table
 * @property {number} cols - number of columns in the table
 */
/**
 * Generates and manages table contents.
 */
export default class Table {
    /**
     * Creates
     *
     * @constructor
     * @param {boolean} readOnly - read-only mode flag
     * @param {object} api - Editor.js API
     * @param {TableData} data - Editor.js API
     * @param {TableConfig} config - Editor.js API
     */
    constructor(readOnly: boolean, api: object, data: TableData, config: TableConfig);
    readOnly: boolean;
    api: any;
    data: TableData;
    config: any;
    /**
     * DOM nodes
     */
    wrapper: Element;
    tableContainer: Element;
    table: Element;
    /**
     * Toolboxes
     */
    toolboxRow: Toolbox;
    toolboxColumn: Toolbox;
    toolboxCell: Toolbox;
    /**
     * Elements
     */
    focusedCell: any;
    rows: number;
    cols: number;
    focusedRow: number;
    focusedCol: number;
    tunes: {
        withHeadings: any;
    };
    /**
     * Global click listener allows to delegate clicks on some elements
     */
    documentClicked: (event: any) => void;
    /**
     * Setup empty data based on config parameters
     *
     */
    validateData(): void;
    /**
     * Returns the size of the table based on initial data
     *
     * @return {{rows: number, cols: number}} - number of cols and rows
     */
    computeSize(): {
        rows: number;
        cols: number;
    };
    /**
     * Render the table with data passed to the constructor
     *
     * @returns {void}
     */
    render(): void;
    /**
     * Empty Table element
     */
    emptyTable(): void;
    /**
     * Add row in table on index place
     *
     * @param {number} index - number in the array of rows, where new row to insert, -1 if insert at the end
     */
    addRow(index?: number): void;
    /**
     * Delete a row by index
     *
     * @param {number} index
     */
    deleteRow(index: number): void;
    /**
     * Add column in table on index place
     *
     * @param {number} index - number in the array of columns, where new column to insert, -1 if insert at the end
     */
    addColumn(index?: number): void;
    /**
     * Delete a column by index
     *
     * @param {number} index
     */
    deleteColumn(index: number): void;
    saveData(): any[];
    /**
     * Create a wrapper containing a table, toolboxes
     * and buttons for adding rows and columns
     *
     * @returns {HTMLElement} wrapper - where all buttons for a table and the table itself will be
     */
    createTableWrapper(): HTMLElement;
    /**
     * Returns the rendered table wrapper
     *
     * @returns {Element}
     */
    getWrapper(): Element;
    /**
     * Hangs the necessary handlers to events
     */
    bindEvents(): void;
    /**
 * Configures and creates the toolbox for manipulating with columns
 *
 * @returns {Toolbox}
 */
    createColumnToolbox(): Toolbox;
    /**
     * Configures and creates the toolbox for manipulating with rows
     *
     * @returns {Toolbox}
     */
    createRowToolbox(): Toolbox;
    /**
     * Configures and creates the toolbox for manipulating with cells
     *
     * @returns {Toolbox}
     */
    createCellToolbox(): Toolbox;
    /**
     * Merge Up
     */
    mergeUp(): void;
    /**
     * Merge Right
     */
    mergeRight(): void;
    /**
     * Merge Down
     */
    mergeDown(): void;
    /**
     * Merge Left
     */
    mergeLeft(): void;
    /**
     * generate and place cellToolbox
     *
     */
    generateAndPlaceCellToolbox(): void;
    /**
     * close cellToolbox
     *
     */
    closeCellToolbox(): void;
    focusInTableListener(event: any): void;
    /**
 * Update toolboxes position
 *
 */
    updateToolboxesPosition(): void;
    focusOutTableListener(event: any): void;
    /**
 * Prevents default Enter behaviors
 * Adds Shift+Enter processing
 *
 * @param {KeyboardEvent} event - keypress event
 */
    onKeyPressListener(event: KeyboardEvent): boolean;
    /**
     * Prevents tab keydown event from bubbling
     * so that it only works inside the table
     *
     * @param {KeyboardEvent} event - keydown event
     */
    onKeyDownListener(event: KeyboardEvent): void;
    /**
     * Makes the first row headings
     *
     * @param {boolean} withHeadings - use headings row or not
     */
    setHeadingsSetting(withHeadings: boolean): void;
    /**
     * return data.content
     *
     * @returns {object[][]}
     */
    getData(): object[][];
    /**
     * Get attribute and parse to number
     *
     * @param {HTMLElement} element
     * @param {string} attributeName
     * @param {number} defaultValue
     */
    getIntAttribute(element: HTMLElement, attributeName: string, defaultValue?: number): number;
}
export type TableConfig = object;
export type TableCell = object;
/**
 * - object with the data transferred to form a table
 */
export type TableData = {
    /**
     * - number of rows in the table
     */
    /**
     * - number of rows in the table
     */
    rows: number;
    /**
     * - number of columns in the table
     */
    /**
     * - number of columns in the table
     */
    cols: number;
};
