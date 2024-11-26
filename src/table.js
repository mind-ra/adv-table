import Toolbox from './toolbox';
import * as $ from './utils/dom';
import throttled from './utils/throttled';

import {
	IconDirectionLeftDown,
	IconDirectionRightDown,
	IconDirectionUpRight,
	IconDirectionDownRight,
	IconCross,
	IconPlus,
	IconChevronUp,
	IconChevronRight,
	IconChevronDown,
	IconChevronLeft,
} from '@codexteam/icons';

const CSS = {
	wrapper: 'tc-wrap',
	wrapperReadOnly: 'tc-wrap--readonly',
	tableContainer: 'tc-table-container',
	table: 'tc-table',
	row: 'tc-row',
	withHeadings: 'tc-table--heading',
	rowSelected: 'tc-row--selected',
	cell: 'tc-cell',
	cellSelected: 'tc-cell--selected',
	addRow: 'tc-add-row',
	addRowDisabled: 'tc-add-row--disabled',
	addColumn: 'tc-add-column',
	addColumnDisabled: 'tc-add-column--disabled',
};

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
	constructor(readOnly, api, data, config) {
		this.readOnly = readOnly;
		this.api = api;
		this.data = data;
		this.config = config;
		/**
		 * DOM nodes
		 */
		this.wrapper = null;
		this.tableContainer = null;
		this.table = null;

		/**
		 * Toolboxes
		 */
		this.toolboxRow = this.createRowToolbox();
		this.toolboxColumn = this.createColumnToolbox();
		this.toolboxCell = null;

		/**
		 * Elements
		 */
		this.focusedCell = null;

		/**
		 * Data
		 */
		this.validateData();
		const { rows, cols } = this.computeSize();
		this.rows = rows;
		this.cols = cols;
		this.focusedRow = -1;
		this.focusedCol = -1;

		/**
		 * Create table and wrapper elements
		 */
		this.createTableWrapper();

		// Additional settings for the table
		this.tunes = {
			withHeadings: data.withHeadings
		};

		this.render();

		/**
		 * Global click listener allows to delegate clicks on some elements
		 */
		this.documentClicked = (event) => {
			const clickedInsideTable = event.target.closest(`.${CSS.table}`) !== null;
			const outsideTableClicked = event.target.closest(`.${CSS.wrapper}`) === null;
			const clickedOutsideToolboxes = clickedInsideTable || outsideTableClicked;

			if (clickedOutsideToolboxes) {
				//this.hideToolboxes();
			}

			const clickedOnAddRowButton = event.target.closest(`.${CSS.addRow}`);
			const clickedOnAddColumnButton = event.target.closest(`.${CSS.addColumn}`);

			/**
			 * Also, check if clicked in current table, not other (because documentClicked bound to the whole document)
			 */
			if (clickedOnAddRowButton && clickedOnAddRowButton.parentNode === this.wrapper) {
				this.addRow(undefined, true);
				this.closeCellToolbox();
			} else if (clickedOnAddColumnButton && clickedOnAddColumnButton.parentNode === this.wrapper) {
				this.addColumn(undefined, true);
				this.closeCellToolbox();
			}
		};

		if (!this.readOnly) {
			this.bindEvents();
		}
	}

	/**
	 * Setup empty data based on config parameters
	 *
	 */
	validateData() {
		const isValidArray = Array.isArray(this.data.content);
		const isEmptyArray = isValidArray ? this.data.content.length === 0 : false;

		if (isEmptyArray) {

			const parsedRows = Number.parseInt(this.config && this.config.rows);
			const parsedCols = Number.parseInt(this.config && this.config.cols);

			const configRows = !isNaN(parsedRows) && parsedRows > 0 ? parsedRows : undefined;
			const configCols = !isNaN(parsedCols) && parsedCols > 0 ? parsedCols : undefined;
			const defaultRows = 2;
			const defaultCols = 2;

			const rows = configRows || defaultRows;
			const cols = configCols || defaultCols;

			for (let i = 0; i < rows; i++) {
				let row = [];
				for (let j = 0; j < cols; j++) {
					row.push('');
				}
				this.data.content.push(row);
			}
		}
	}

	/**
	 * Returns the size of the table based on initial data
	 *
	 * @return {{rows: number, cols: number}} - number of cols and rows
	 */
	computeSize() {
		const content = this.data && this.data.content;
		const isValidArray = Array.isArray(content);

		const contentRows = isValidArray ? content.length : undefined;

		let contentCols = 0;
		for (let i = 0; i < content.length; i++) {
			let rowCols = 0;
			for (let j = 0; j < content[i].length; j++) {
				rowCols++;
			}
			contentCols = Math.max(contentCols, rowCols);
		}

		const rows = contentRows;
		const cols = contentCols;

		return {
			rows: rows,
			cols: cols
		};
	}

	/**
	 * Render the table with data passed to the constructor
	 *
	 * @returns {void}
	 */
	render() {
		const data = this.data;

		if (data && data.content) {

			this.emptyTable();

			for (let i = 0; i < data.content.length; i++) {
				let rowElement = $.make('tr', CSS.row);

				for (let j = 0; j < data.content[i].length; j++) {
					let cellData = data.content[i][j];
					//let tag = this.tunes.withHeadings && i == 0 ? 'th' : 'td';
					let tag = 'td';
					let cellElement = $.make(tag, CSS.cell, {
						contentEditable: !this.readOnly
					});
					if (typeof cellData === 'object') {
						cellElement.innerHTML = cellData.content;
						if (cellData.hasOwnProperty('colspan')) {
							cellElement.setAttribute('colspan', cellData.colspan);
						}
						if (cellData.hasOwnProperty('rowspan')) {
							cellElement.setAttribute('rowspan', cellData.rowspan);
						}
					} else {
						cellElement.innerHTML = cellData;
					}
					rowElement.appendChild(cellElement);
				}
				this.table.appendChild(rowElement);
			}
		}
	}

	/**
	 * Empty Table element
	 */
	emptyTable() {
		while (this.table.hasChildNodes()) {
			this.table.removeChild(this.table.lastChild);
		}
	}

	/**
	 * Add row in table on index place
	 *
	 * @param {number} index - number in the array of rows, where new row to insert, -1 if insert at the end
	 */
	addRow(index = -1) {
		this.rows++;
		if (index === -1) {
			index = this.rows;
		}

		let row = [];
		for (let j = 0; j < this.cols; j++) {
			row.push('');
		}

		this.data.content.splice(index, 0, row);

		this.render()
	};

	/**
	 * Delete a row by index
	 *
	 * @param {number} index
	 */
	deleteRow(index){
		this.rows--;

		this.data.content.splice(index, 1);

		this.render()
	}

	/**
	 * Add column in table on index place
	 *
	 * @param {number} index - number in the array of columns, where new column to insert, -1 if insert at the end
	 */
	addColumn(index = -1) {
		this.cols++;

		if (index === -1) {
			index = this.cols;
		}

		for (let i = 0; i < this.data.content.length; i++) {
			this.data.content[i].splice(index, 0, '');
		}

		this.render()
	};

	/**
	 * Delete a column by index
	 *
	 * @param {number} index
	 */
	deleteColumn(index) {
		this.cols--;

		for (let i = 0; i < this.data.content.length; i++) {
			this.data.content[i].splice(index, 1);
		}

		this.render()
	};

	saveData() {
		const data = [];

		const rows = this.table.querySelectorAll(`.${CSS.row}`);
		rows.forEach((row) => {
			const cells = Array.from(row.querySelectorAll(`.${CSS.cell}`));
			data.push(cells.map(cell => {
				let obj = { content: cell.innerHTML }
				let colspan = cell.getAttribute('colspan');
				if (colspan) {
					obj.colspan = colspan;
				}
				let rowspan = cell.getAttribute('rowspan');
				if (rowspan) {
					obj.rowspan = rowspan;
				}

				if (!colspan && !rowspan)
					return cell.innerHTML;

				return obj;
			}));
		})

		this.data.content = data;

		return data;
	}

	/**
	 * Create a wrapper containing a table, toolboxes
	 * and buttons for adding rows and columns
	 *
	 * @returns {HTMLElement} wrapper - where all buttons for a table and the table itself will be
	 */
	createTableWrapper() {
		this.wrapper = $.make('div', CSS.wrapper);
		this.tableContainer = $.make('div', CSS.tableContainer);
		this.table = $.make('table', CSS.table);
		

		if (this.readOnly) {
			this.wrapper.classList.add(CSS.wrapperReadOnly);
		}

		this.wrapper.appendChild(this.toolboxColumn.element);
		this.wrapper.appendChild(this.toolboxRow.element);
		this.tableContainer.appendChild(this.table);
		this.wrapper.appendChild(this.tableContainer);

		if (!this.readOnly) {
			const addColumnButton = $.make('div', CSS.addColumn, {
				innerHTML: IconPlus
			});
			const addRowButton = $.make('div', CSS.addRow, {
				innerHTML: IconPlus
			});

			this.wrapper.appendChild(addColumnButton);
			this.wrapper.appendChild(addRowButton);
		}
	}

	/**
	 * Returns the rendered table wrapper
	 *
	 * @returns {Element}
	 */
	getWrapper() {
		return this.wrapper;
	}

	/**
	 * Hangs the necessary handlers to events
	 */
	bindEvents() {
		// set the listener to close toolboxes when click outside
		document.addEventListener('click', this.documentClicked);

		// Controls some of the keyboard buttons inside the table
		this.table.onkeypress = (event) => this.onKeyPressListener(event);

		// Tab is executed by default before keypress, so it must be intercepted on keydown
		this.table.addEventListener('keydown', (event) => this.onKeyDownListener(event));

		// Determine the position of the cell in focus
		this.table.addEventListener('focusin', event => this.focusInTableListener(event));

		// Save data every focusout
		this.table.addEventListener('focusout', (event) => this.focusOutTableListener(event));
	}

	/**
 * Configures and creates the toolbox for manipulating with columns
 *
 * @returns {Toolbox}
 */
	createColumnToolbox() {
		return new Toolbox({
			api: this.api,
			cssModifier: 'column',
			items: [
				{
					label: this.api.i18n.t('Add column to left'),
					icon: IconDirectionLeftDown,
					hideIf: () => {
						return false;
					},
					onClick: () => {
						this.addColumn(this.focusedCol);
						this.closeCellToolbox();
						this.toolboxRow.hide();
						this.toolboxColumn.hide();
					}
				},
				{
					label: this.api.i18n.t('Add column to right'),
					icon: IconDirectionRightDown,
					hideIf: () => {
						return false;
					},
					onClick: () => {
						this.addColumn(this.focusedCol + 1);
						this.closeCellToolbox();
						this.toolboxRow.hide();
						this.toolboxColumn.hide();
					}
				},
				{
					label: this.api.i18n.t('Delete column'),
					icon: IconCross,
					hideIf: () => {
						return this.cols === 1;
					},
					confirmationRequired: true,
					onClick: () => {
						this.deleteColumn(this.focusedCol);
						this.closeCellToolbox();
						this.toolboxRow.hide();
						this.toolboxColumn.hide();
					}
				}
			],
			onOpen: () => {
				this.toolboxRow.popover.close();
				this.toolboxCell.popover.close();
			},
			onClose: () => {
			}
		});
	}

	/**
	 * Configures and creates the toolbox for manipulating with rows
	 *
	 * @returns {Toolbox}
	 */
	createRowToolbox() {
		return new Toolbox({
			api: this.api,
			cssModifier: 'row',
			items: [
				{
					label: this.api.i18n.t('Add row above'),
					icon: IconDirectionUpRight,
					hideIf: () => {
						return false;
					},
					onClick: () => {
						this.addRow(this.focusedRow);
						this.closeCellToolbox();
						this.toolboxRow.hide();
						this.toolboxColumn.hide();
					}
				},
				{
					label: this.api.i18n.t('Add row below'),
					icon: IconDirectionDownRight,
					hideIf: () => {
						return false;
					},
					onClick: () => {
						this.addRow(this.focusedRow+1);
						this.closeCellToolbox();
						this.toolboxRow.hide();
						this.toolboxColumn.hide();
					}
				},
				{
					label: this.api.i18n.t('Delete row'),
					icon: IconCross,
					hideIf: () => {
						return this.rows === 1;
					},
					confirmationRequired: true,
					onClick: () => {
						this.deleteRow(this.focusedRow);
						this.closeCellToolbox();
						this.toolboxRow.hide();
						this.toolboxColumn.hide();
					}
				}
			],
			onOpen: () => {
				this.toolboxColumn.popover.close();
				this.toolboxCell.popover.close();
			},
			onClose: () => {
			}
		});
	}


	/**
	 * Configures and creates the toolbox for manipulating with cells
	 *
	 * @returns {Toolbox}
	 */
	createCellToolbox() {
		return new Toolbox({
			api: this.api,
			cssModifier: 'cell',
			items: [
				{
					label: this.api.i18n.t('Merge to Up'),
					icon: IconChevronUp,
					hideIf: () => {
						if (this.focusedRow === 0 || this.data.withHeadings && this.focusedRow === 1)
							return true;

						let maxNumberofRows = this.data.withHeadings ? this.rows - 1 : this.rows;
						let focusedRowspan = this.getIntAttribute(this.focusedCell, 'rowspan');
						if (focusedRowspan === maxNumberofRows)
							return true;

						let focusedRow = this.focusedCell.parentElement;

						let prevRow = focusedRow;
						focusedRowspan = 1;
						while (focusedRowspan !== 0) {
							focusedRowspan--;
							prevRow = prevRow.previousElementSibling;
							let prevRowspan = this.getIntAttribute(prevRow, 'rowspan');
							focusedRowspan += prevRowspan - 1;
						}
	

						if (focusedRow.children.length !== prevRow.children.length)
							return true;

						return false;
					},
					onClick: () => {
						this.mergeUp();
						this.closeCellToolbox();
					}
				},
				{
					label: this.api.i18n.t('Merge to Right'),
					icon: IconChevronRight,
					hideIf: () => {
						let nextElement = this.focusedCell.nextElementSibling;
						if (nextElement === null || nextElement === undefined)
							return true;

						let focusedRowspan = this.getIntAttribute(this.focusedCell, 'rowspan');
						let nextRowspan = this.getIntAttribute(nextElement, 'rowspan');
						if (focusedRowspan !== nextRowspan)
							return true;

						let colspan = this.getIntAttribute(this.focusedCell, 'colspan');
						if (colspan === this.cols)
							return true;

						return false;
					},
					onClick: () => {
						this.mergeRight();
						this.closeCellToolbox();
					}
				},
				{
					label: this.api.i18n.t('Merge to Down'),
					icon: IconChevronDown,
					hideIf: () => {
						if (this.data.withHeadings && this.focusedRow === 0)
							return true;

						let maxNumberofRows = this.data.withHeadings ? this.rows - 1 : this.rows;
						let focusedRowspan = this.getIntAttribute(this.focusedCell, 'rowspan');
						if (focusedRowspan === maxNumberofRows)
							return true;

						let focusedRow = this.focusedCell.parentElement;

						let nextRow = focusedRow;
						while (focusedRowspan !== 0) {
							focusedRowspan--;
							nextRow = nextRow.nextElementSibling;
							let nextRowspan = this.getIntAttribute(nextRow, 'rowspan');
							focusedRowspan += nextRowspan - 1;
						}


						if (focusedRow.children.length !== nextRow.children.length)
							return true;

						return false;
					},
					onClick: () => {
						this.mergeDown();
						this.closeCellToolbox();
					}
				},
				{
					label: this.api.i18n.t('Merge to Left'),
					icon: IconChevronLeft,
					hideIf: () => {
						let prevElement = this.focusedCell.previousElementSibling;
						if (prevElement === null || prevElement === undefined)
							return true;

						let focusedRowspan = this.getIntAttribute(this.focusedCell, 'rowspan');
						let prevRowspan = this.getIntAttribute(prevElement, 'rowspan');
						if (focusedRowspan !== prevRowspan)
							return true;

						let colspan = this.getIntAttribute(this.focusedCell, 'colspan');
						if (colspan === this.cols)
							return true;

						return false;
					},
					onClick: () => {
						this.mergeLeft();
						this.closeCellToolbox();
					}
				},
			],
			onOpen: () => {
				this.toolboxColumn.popover.close();
				this.toolboxRow.popover.close();
			},
			onClose: () => {
			}
		});
	}

	/**
	 * Merge Up
	 */
	mergeUp() {
		let prevRow = this.table.querySelector(`.${CSS.row}:nth-child(${this.focusedRow})`)
		let prevCell = prevRow.querySelector(`.${CSS.cell}:nth-child(${this.focusedCol + 1})`);

		if (prevCell === null || prevCell === undefined)
			return;

		let currentRowSpan = this.getIntAttribute(this.focusedCell, 'rowspan');
		let prevRowSpan = this.getIntAttribute(prevCell, 'rowspan');
		prevCell.setAttribute('rowspan', currentRowSpan + prevRowSpan);
		prevCell.innerHTML = `${prevCell.innerHTML} ${this.focusedCell.innerHTML}`.trim();
		this.focusedCell.remove();

		this.saveData();
		this.render();
	}

	/**
	 * Merge Right
	 */
	mergeRight() {
		let nextCell = this.focusedCell.nextElementSibling;
		if (nextCell === null || nextCell === undefined)
			return;

		let currentColSpan = this.getIntAttribute(this.focusedCell, 'colspan');
		let nextColSpan = this.getIntAttribute(nextCell, 'colspan');
		this.focusedCell.setAttribute('colspan', currentColSpan + nextColSpan);
		this.focusedCell.innerHTML = `${this.focusedCell.innerHTML} ${nextCell.innerHTML}`.trim();
		nextCell.remove();

		this.saveData();
		this.render();
	}

	/**
	 * Merge Down
	 */
	mergeDown() {
		let focusedRowspan = this.getIntAttribute(this.focusedCell, 'rowspan');
		let nthRow = this.focusedRow + 1 + focusedRowspan;
		let nextRow = this.table.querySelector(`.${CSS.row}:nth-child(${nthRow})`)
		let nextCell = nextRow.querySelector(`.${CSS.cell}:nth-child(${this.focusedCol + 1})`);
		let nextRowspan = this.getIntAttribute(this.focusedCell, 'rowspan');
		if (nextCell === null || nextCell === undefined)
			return;

		let currentRowSpan = this.getIntAttribute(this.focusedCell, 'rowspan');
		let nextRowSpan = this.getIntAttribute(nextCell, 'rowspan');
		this.focusedCell.setAttribute('rowspan', currentRowSpan + nextRowSpan);
		this.focusedCell.innerHTML = `${this.focusedCell.innerHTML} ${nextCell.innerHTML}`.trim();
		nextCell.remove();

		this.saveData();
		this.render();
	}

	/**
	 * Merge Left
	 */
	mergeLeft() {
		this.focusedCell = this.focusedCell.previousElementSibling;
		this.mergeRight();
	}



	/**
	 * generate and place cellToolbox
	 * 
	 */
	generateAndPlaceCellToolbox() {
		this.toolboxCell = this.createCellToolbox();

		this.table.appendChild(this.toolboxCell.element);

		const { fromTopBorder, fromLeftBorder } = $.getRelativeCoordsOfTwoElems(this.table, this.focusedCell);
		const cellRect = this.focusedCell.getBoundingClientRect();
		const toolboxRect = this.toolboxCell.element.getBoundingClientRect();

		this.toolboxCell.show(() => {
			return {
				top: `${fromTopBorder}px`,
				left: `${fromLeftBorder + cellRect.width - toolboxRect.width}px`
			}
		});
	}

	/**
	 * close cellToolbox
	 * 
	 */
	closeCellToolbox() {
		this.toolboxCell?.element.remove();
		this.toolboxCell = null;
	}

	focusInTableListener(event) {
		this.focusedCell?.classList.remove(`${CSS.cellSelected}`);
		this.closeCellToolbox();
		this.toolboxRow.hide();
		this.toolboxColumn.hide();

		this.focusedCell = event.target;
		this.focusedCell.classList.add(`${CSS.cellSelected}`);

		this.focusedRow = this.focusedCell.parentElement.rowIndex;
		this.focusedCol = this.focusedCell.cellIndex;

		this.generateAndPlaceCellToolbox();
		this.updateToolboxesPosition();
	}

	/**
 * Update toolboxes position
 *
 */
	updateToolboxesPosition() {

		this.toolboxRow.hide();
		this.toolboxColumn.hide();

		this.toolboxRow.show(() => {
			const focusedRow  = this.focusedCell.parentElement;
			const { fromTopBorder } = $.getRelativeCoordsOfTwoElems(this.table, focusedRow);
			const { height } = focusedRow.getBoundingClientRect();

			return {
				top: `${Math.ceil(fromTopBorder + height / 2)}px`
			};
		});

		this.toolboxColumn.show(() => {
			return {
				left: `calc((100% - var(--cell-size)) / (${this.cols} * 2) * (1 + (${this.focusedCol}) * 2))`
			};
		});

	}

	focusOutTableListener(event) {
		this.saveData();
		// this.focusedCell?.classList.remove(`${CSS.cellSelected}`);
		// this.closeCellToolbox();
		// this.focusedCell = null;
	}

	/**
 * Prevents default Enter behaviors
 * Adds Shift+Enter processing
 *
 * @param {KeyboardEvent} event - keypress event
 */
	onKeyPressListener(event) {
		if (event.key === 'Enter') {
			if (event.shiftKey) {
				return true;
			}

			this.moveCursorToNextRow();
		}

		return event.key !== 'Enter';
	};

	/**
	 * Prevents tab keydown event from bubbling
	 * so that it only works inside the table
	 *
	 * @param {KeyboardEvent} event - keydown event
	 */
	onKeyDownListener(event) {
		if (event.key === 'Tab') {
			event.stopPropagation();
		}
	}

	/**
	 * Makes the first row headings
	 *
	 * @param {boolean} withHeadings - use headings row or not
	 */
	setHeadingsSetting(withHeadings) {
		this.tunes.withHeadings = withHeadings;

		if (withHeadings) {
			this.table.classList.add(CSS.withHeadings);
		} else {
			this.table.classList.remove(CSS.withHeadings);
		}
	}

	/**
	 * return data.content
	 *
	 * @returns {object[][]}
	 */
	getData() {
		return this.data.content;
	}

	/**
	 * Get attribute and parse to number
	 *
	 * @param {HTMLElement} element
	 * @param {string} attributeName
	 * @param {number} defaultValue
	 */
	getIntAttribute(element, attributeName, defaultValue = 1) {
		return Number(element.getAttribute(attributeName) ?? defaultValue);
	}
}