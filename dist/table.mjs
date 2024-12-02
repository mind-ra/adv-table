(function(){var r;"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.nonce=(r=document.head.querySelector("meta[property=csp-nonce]"))==null?void 0:r.content,o.appendChild(document.createTextNode('.tc-wrap{--color-background:#f9f9fb;--color-background:#e3e3e3;--color-text-secondary:#7b7e89;--color-border:#e8e8eb;--cell-size:34px;--toolbox-icon-size:18px;--toolbox-padding:6px;--toolbox-aiming-field-size:calc(var(--toolbox-icon-size) + var(--toolbox-padding)*2);border-left:0;position:relative;height:100%;width:100%;margin-top:var(--toolbox-icon-size);box-sizing:border-box;display:grid;grid-template-columns:calc(100% - var(--cell-size)) var(--cell-size)}.tc-wrap--readonly{grid-template-columns:100% var(--cell-size)}.tc-wrap svg{vertical-align:top}@media print{.tc-wrap{border-left-color:var(--color-border);border-left-style:solid;border-left-width:1px;grid-template-columns:100% var(--cell-size)}}@media print{.tc-wrap .tc-row:after{display:none}}.tc-table-container{overflow-x:auto}.tc-table,.tc-table-container{width:100%;height:100%}.tc-table{position:relative;border-collapse:collapse;font-size:14px;border-top:1px solid var(--color-border);line-height:1.4}.tc-table:after{position:absolute;content:"";width:calc(var(--cell-size));left:calc(var(--cell-size)*-1);top:0}.tc-table:before{position:absolute;content:"";height:var(--toolbox-aiming-field-size);top:calc(var(--toolbox-aiming-field-size)*-1);left:0}.tc-table--heading .tc-row:first-child{text-align:left;font-weight:600;border-bottom:2px solid var(--color-border)}.tc-table--heading .tc-row:first-child [contenteditable]:empty:before{content:attr(heading);color:var(--color-text-secondary)}.tc-table--heading .tc-row:first-child:after{bottom:-2px;border-bottom:2px solid var(--color-border)}.tc-add-column,.tc-add-row{display:flex;color:var(--color-text-secondary)}@media print{.tc-add{display:none}}.tc-add-column{padding:4px 0;justify-content:center;align-items:center}.tc-add-column--disabled{visibility:hidden}@media print{.tc-add-column{display:none}}.tc-add-row{height:var(--cell-size);justify-content:center;align-items:center;padding-left:4px;position:relative}.tc-add-row--disabled{display:none}@media print{.tc-add-row{display:none}}.tc-add-column,.tc-add-row{transition:0s;cursor:pointer;will-change:background-color}.tc-add-column:hover,.tc-add-row:hover{transition:background-color .1s ease;background-color:var(--color-background)}.tc-add-row{margin-top:1px}.tc-add-row:hover:before{transition:.1s;background-color:var(--color-background)}.tc-row{position:relative;border-bottom:1px solid var(--color-border)}.tc-row--selected{background:var(--color-background)}.tc-row--selected:after{background:var(--color-background)}.tc-cell{border-right:1px solid var(--color-border);border-bottom:1px solid var(--color-border);padding:6px 12px;overflow:hidden;outline:none;line-break:normal}.tc-cell--selected{background:var(--color-background)}.tc-cell[colspan="0"],.tc-cell[rowspan="0"]{display:none}.tc-wrap--readonly .tc-row:after{display:none}.tc-toolbox{--toolbox-padding:6px;--popover-margin:30px;--toggler-click-zone-size:30px;--toggler-dots-color:#7b7e89;--toggler-dots-color-hovered:#1d202b;position:absolute;cursor:pointer;z-index:1;opacity:0;transition:opacity .1s;will-change:left,top,opacity}.tc-toolbox .tc-popover{position:absolute}.tc-toolbox--column{top:calc(var(--toggler-click-zone-size)*-1);transform:translate(calc(var(--toggler-click-zone-size)*-1/2));will-change:left,opacity}.tc-toolbox--column .tc-popover{top:100%;right:0}.tc-toolbox--row{left:calc(var(--popover-margin)*-1);transform:translateY(calc(var(--toggler-click-zone-size)*-1/2));margin-top:-1px;will-change:top,opacity}.tc-toolbox--row .tc-popover{top:0;left:100%}.tc-toolbox--cell{will-change:left,top,opacity}.tc-toolbox--cell .tc-popover{top:0;right:100%}.tc-toolbox--showed{opacity:1}.tc-toolbox__toggler{display:flex;align-items:center;justify-content:center;width:var(--toggler-click-zone-size);height:var(--toggler-click-zone-size);color:var(--toggler-dots-color);z-index:0}.tc-toolbox__toggler:hover{color:var(--toggler-dots-color-hovered);background:var(--toggler-dots-color)}.tc-toolbox__toggler svg{fill:currentColor}.tc-settings .cdx-settings-button{width:50%;margin:0}.tc-popover{--color-border:#eaeaea;--color-background:#fff;--color-background-hover:rgba(232,232,235,.49);--color-background-confirm:#e24a4a;--color-background-confirm-hover:#d54040;--color-text-confirm:#fff;background:var(--color-background);border:1px solid var(--color-border);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;padding:6px;display:none;will-change:opacity,transform}.tc-popover--opened{display:block;animation:menuShowing .1s cubic-bezier(.215,.61,.355,1) forwards;z-index:100}.tc-popover__item{display:flex;align-items:center;padding:2px 14px 2px 2px;border-radius:5px;cursor:pointer;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tc-popover__item:hover{background:var(--color-background-hover)}.tc-popover__item:not(:last-of-type){margin-bottom:2px}.tc-popover__item-icon{display:inline-flex;width:26px;height:26px;align-items:center;justify-content:center;background:var(--color-background);border-radius:5px;border:1px solid var(--color-border);margin-right:8px}.tc-popover__item-label{line-height:22px;font-size:14px;font-weight:500}.tc-popover__item--confirm{background:var(--color-background-confirm);color:var(--color-text-confirm)}.tc-popover__item--confirm:hover{background-color:var(--color-background-confirm-hover)}.tc-popover__item--confirm .tc-popover__item-icon{background:var(--color-background-confirm);border-color:#0000001a}.tc-popover__item--hidden{display:none}@keyframes menuShowing{0%{opacity:0;transform:translateY(-8px) scale(.9)}70%{opacity:1;transform:translateY(2px)}to{transform:translateY(0)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function a(u, t, e = {}) {
  const o = document.createElement(u);
  Array.isArray(t) ? o.classList.add(...t) : t && o.classList.add(t);
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) && (o[i] = e[i]);
  return o;
}
function b(u) {
  const t = u.getBoundingClientRect();
  return {
    y1: Math.floor(t.top + window.pageYOffset),
    x1: Math.floor(t.left + window.pageXOffset),
    x2: Math.floor(t.right + window.pageXOffset),
    y2: Math.floor(t.bottom + window.pageYOffset)
  };
}
function m(u, t) {
  const e = b(u), o = b(t);
  return {
    fromTopBorder: o.y1 - e.y1,
    fromLeftBorder: o.x1 - e.x1,
    fromRightBorder: e.x2 - o.x2,
    fromBottomBorder: e.y2 - o.y2
  };
}
class h {
  /**
   * @param {object} options - constructor options
   * @param {PopoverItem[]} options.items - constructor options
   */
  constructor({ items: t }) {
    this.items = t, this.wrapper = void 0, this.itemEls = [];
  }
  /**
   * Set of CSS classnames used in popover
   *
   * @returns {object}
   */
  static get CSS() {
    return {
      popover: "tc-popover",
      popoverOpened: "tc-popover--opened",
      item: "tc-popover__item",
      itemHidden: "tc-popover__item--hidden",
      itemConfirmState: "tc-popover__item--confirm",
      itemIcon: "tc-popover__item-icon",
      itemLabel: "tc-popover__item-label"
    };
  }
  /**
   * Returns the popover element
   *
   * @returns {Element}
   */
  render() {
    return this.wrapper = a("div", h.CSS.popover), this.items.forEach((t, e) => {
      const o = a("div", h.CSS.item), i = a("div", h.CSS.itemIcon, {
        innerHTML: t.icon
      }), s = a("div", h.CSS.itemLabel, {
        textContent: t.label
      });
      o.dataset.index = e, o.appendChild(i), o.appendChild(s), this.wrapper.appendChild(o), this.itemEls.push(o);
    }), this.wrapper.addEventListener("click", (t) => {
      this.popoverClicked(t);
    }), this.wrapper;
  }
  /**
   * Popover wrapper click listener
   * Used to delegate clicks in items
   *
   * @returns {void}
   */
  popoverClicked(t) {
    const e = t.target.closest(`.${h.CSS.item}`);
    if (!e)
      return;
    const o = e.dataset.index, i = this.items[o];
    if (i.confirmationRequired && !this.hasConfirmationState(e)) {
      this.setConfirmationState(e);
      return;
    }
    i.onClick();
  }
  /**
   * Enable the confirmation state on passed item
   *
   * @returns {void}
   */
  setConfirmationState(t) {
    t.classList.add(h.CSS.itemConfirmState);
  }
  /**
   * Disable the confirmation state on passed item
   *
   * @returns {void}
   */
  clearConfirmationState(t) {
    t.classList.remove(h.CSS.itemConfirmState);
  }
  /**
   * Check if passed item has the confirmation state
   *
   * @returns {boolean}
   */
  hasConfirmationState(t) {
    return t.classList.contains(h.CSS.itemConfirmState);
  }
  /**
   * Return an opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.wrapper.classList.contains(h.CSS.popoverOpened);
  }
  /**
   * Opens the popover
   *
   * @returns {void}
   */
  open() {
    this.items.forEach((t, e) => {
      typeof t.hideIf == "function" && this.itemEls[e].classList.toggle(h.CSS.itemHidden, t.hideIf());
    }), this.wrapper.classList.add(h.CSS.popoverOpened);
  }
  /**
   * Closes the popover
   *
   * @returns {void}
   */
  close() {
    this.wrapper.classList.remove(h.CSS.popoverOpened), this.itemEls.forEach((t) => {
      this.clearConfirmationState(t);
    });
  }
}
const k = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', M = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L10 12M10 12L7 15M10 12H4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L14 12M14 12L17 15M14 12H20"/></svg>', v = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 9.16666L18.2167 12.5M18.2167 12.5L14.8833 15.8333M18.2167 12.5H10.05C9.16594 12.5 8.31809 12.1488 7.69297 11.5237C7.06785 10.8986 6.71666 10.0507 6.71666 9.16666"/></svg>', A = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.9167 14.9167L11.5833 18.25M11.5833 18.25L8.25 14.9167M11.5833 18.25L11.5833 10.0833C11.5833 9.19928 11.9345 8.35143 12.5596 7.72631C13.1848 7.10119 14.0326 6.75 14.9167 6.75"/></svg>', T = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.13333 14.9167L12.4667 18.25M12.4667 18.25L15.8 14.9167M12.4667 18.25L12.4667 10.0833C12.4667 9.19928 12.1155 8.35143 11.4904 7.72631C10.8652 7.10119 10.0174 6.75 9.13333 6.75"/></svg>', H = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 15.8333L18.2167 12.5M18.2167 12.5L14.8833 9.16667M18.2167 12.5L10.05 12.5C9.16595 12.5 8.31811 12.8512 7.69299 13.4763C7.06787 14.1014 6.71667 14.9493 6.71667 15.8333"/></svg>', I = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 9.66H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 9.66H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.31 14.36H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 14.36H14.59"/></svg>', x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', E = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>', O = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', B = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M14 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><path stroke="currentColor" stroke-width="2" d="M5 14H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', $ = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
class p {
  /**
   * Creates toolbox buttons and toolbox menus
   *
   * @param {Object} config
   * @param {any} config.api - Editor.js api
   * @param {PopoverItem[]} config.items - Editor.js api
   * @param {function} config.onOpen - callback fired when the Popover is opening
   * @param {function} config.onClose - callback fired when the Popover is closing
   * @param {string} config.cssModifier - the modifier for the Toolbox. Allows to add some specific styles.
   */
  constructor({ api: t, items: e, onOpen: o, onClose: i, cssModifier: s = "" }) {
    this.api = t, this.items = e, this.onOpen = o, this.onClose = i, this.cssModifier = s, this.popover = null, this.wrapper = this.createToolbox();
  }
  /**
   * Style classes
   */
  static get CSS() {
    return {
      toolbox: "tc-toolbox",
      toolboxShowed: "tc-toolbox--showed",
      toggler: "tc-toolbox__toggler"
    };
  }
  /**
   * Returns rendered Toolbox element
   */
  get element() {
    return this.wrapper;
  }
  /**
   * Creating a toolbox to open menu for a manipulating columns
   *
   * @returns {Element}
   */
  createToolbox() {
    const t = a("div", [
      p.CSS.toolbox,
      this.cssModifier ? `${p.CSS.toolbox}--${this.cssModifier}` : ""
    ]);
    t.dataset.mutationFree = "true";
    const e = this.createPopover(), o = this.createToggler();
    return t.appendChild(o), t.appendChild(e), t;
  }
  /**
   * Creates the Toggler
   *
   * @returns {Element}
   */
  createToggler() {
    const t = a("div", p.CSS.toggler, {
      innerHTML: I
    });
    return t.addEventListener("click", () => {
      this.togglerClicked();
    }), t;
  }
  /**
   * Creates the Popover instance and render it
   *
   * @returns {Element}
   */
  createPopover() {
    return this.popover = new h({
      items: this.items
    }), this.popover.render();
  }
  /**
   * Toggler click handler. Opens/Closes the popover
   *
   * @returns {void}
   */
  togglerClicked() {
    this.popover.opened ? (this.popover.close(), this.onClose()) : (this.popover.open(), this.onOpen());
  }
  /**
   * Shows the Toolbox
   *
   * @param {function} computePositionMethod - method that returns the position coordinate
   * @returns {void}
   */
  show(t) {
    const e = t();
    Object.entries(e).forEach(([o, i]) => {
      this.wrapper.style[o] = i;
    }), this.wrapper.classList.add(p.CSS.toolboxShowed);
  }
  /**
   * Hides the Toolbox
   *
   * @returns {void}
   */
  hide() {
    this.popover.close(), this.wrapper.classList.remove(p.CSS.toolboxShowed);
  }
}
const r = {
  wrapper: "tc-wrap",
  wrapperReadOnly: "tc-wrap--readonly",
  tableContainer: "tc-table-container",
  table: "tc-table",
  row: "tc-row",
  withHeadings: "tc-table--heading",
  rowSelected: "tc-row--selected",
  cell: "tc-cell",
  cellSelected: "tc-cell--selected",
  addRow: "tc-add-row",
  addRowDisabled: "tc-add-row--disabled",
  addColumn: "tc-add-column",
  addColumnDisabled: "tc-add-column--disabled"
};
class j {
  /**
   * Creates
   *
   * @constructor
   * @param {boolean} readOnly - read-only mode flag
   * @param {object} api - Editor.js API
   * @param {TableData} data - Editor.js API
   * @param {TableConfig} config - Editor.js API
   */
  constructor(t, e, o, i) {
    this.readOnly = t, this.api = e, this.data = o, this.config = i, this.wrapper = null, this.tableContainer = null, this.table = null, this.toolboxRow = this.createRowToolbox(), this.toolboxColumn = this.createColumnToolbox(), this.toolboxCell = null, this.focusedCell = null, this.validateData();
    const { rows: s, cols: d } = this.computeSize();
    this.rows = s, this.cols = d, this.focusedRow = -1, this.focusedCol = -1, this.createTableWrapper(), this.tunes = {
      withHeadings: o.withHeadings
    }, this.render(), this.documentClicked = (n) => {
      n.target.closest(`.${r.table}`), n.target.closest(`.${r.wrapper}`);
      const l = n.target.closest(`.${r.addRow}`), c = n.target.closest(`.${r.addColumn}`);
      l && l.parentNode === this.wrapper ? (this.addRow(void 0, !0), this.closeCellToolbox()) : c && c.parentNode === this.wrapper && (this.addColumn(void 0, !0), this.closeCellToolbox());
    }, this.readOnly || this.bindEvents();
  }
  /**
   * Setup empty data based on config parameters
   *
   */
  validateData() {
    if (Array.isArray(this.data.content) ? this.data.content.length === 0 : !1) {
      const o = Number.parseInt(this.config && this.config.rows), i = Number.parseInt(this.config && this.config.cols), s = !isNaN(o) && o > 0 ? o : void 0, d = !isNaN(i) && i > 0 ? i : void 0, n = 2, l = 2, c = s || n, f = d || l;
      for (let w = 0; w < c; w++) {
        let g = [];
        for (let C = 0; C < f; C++)
          g.push("");
        this.data.content.push(g);
      }
    }
  }
  /**
   * Returns the size of the table based on initial data
   *
   * @return {{rows: number, cols: number}} - number of cols and rows
   */
  computeSize() {
    const t = this.data && this.data.content, o = Array.isArray(t) ? t.length : void 0;
    let i = 0;
    for (let n = 0; n < t.length; n++) {
      let l = 0;
      for (let c = 0; c < t[n].length; c++)
        l++;
      i = Math.max(i, l);
    }
    return {
      rows: o,
      cols: i
    };
  }
  /**
   * Render the table with data passed to the constructor
   *
   * @returns {void}
   */
  render() {
    const t = this.data;
    if (t && t.content) {
      this.emptyTable();
      for (let e = 0; e < t.content.length; e++) {
        let o = a("tr", r.row);
        for (let i = 0; i < t.content[e].length; i++) {
          let s = t.content[e][i], n = a("td", r.cell, {
            contentEditable: !this.readOnly
          });
          typeof s == "object" ? (n.innerHTML = s.content, s.hasOwnProperty("colspan") && n.setAttribute("colspan", s.colspan), s.hasOwnProperty("rowspan") && n.setAttribute("rowspan", s.rowspan)) : n.innerHTML = s, o.appendChild(n);
        }
        this.table.appendChild(o);
      }
    }
  }
  /**
   * Empty Table element
   */
  emptyTable() {
    for (; this.table.hasChildNodes(); )
      this.table.removeChild(this.table.lastChild);
  }
  /**
   * Add row in table on index place
   *
   * @param {number} index - number in the array of rows, where new row to insert, -1 if insert at the end
   */
  addRow(t = -1) {
    this.rows++, t === -1 && (t = this.rows);
    let e = [];
    for (let o = 0; o < this.cols; o++)
      e.push("");
    this.data.content.splice(t, 0, e), this.render();
  }
  /**
   * Delete a row by index
   *
   * @param {number} index
   */
  deleteRow(t) {
    this.rows--, this.data.content.splice(t, 1), this.render();
  }
  /**
   * Add column in table on index place
   *
   * @param {number} index - number in the array of columns, where new column to insert, -1 if insert at the end
   */
  addColumn(t = -1) {
    this.cols++, t === -1 && (t = this.cols);
    for (let e = 0; e < this.data.content.length; e++)
      this.data.content[e].splice(t, 0, "");
    this.render();
  }
  /**
   * Delete a column by index
   *
   * @param {number} index
   */
  deleteColumn(t) {
    this.cols--;
    for (let e = 0; e < this.data.content.length; e++)
      this.data.content[e].splice(t, 1);
    this.render();
  }
  saveData() {
    const t = [];
    return this.table.querySelectorAll(`.${r.row}`).forEach((o) => {
      const i = Array.from(o.querySelectorAll(`.${r.cell}`));
      t.push(i.map((s) => {
        let d = { content: s.innerHTML }, n = s.getAttribute("colspan");
        n && (d.colspan = n);
        let l = s.getAttribute("rowspan");
        return l && (d.rowspan = l), !n && !l ? s.innerHTML : d;
      }));
    }), this.data.content = t, t;
  }
  /**
   * Create a wrapper containing a table, toolboxes
   * and buttons for adding rows and columns
   *
   * @returns {HTMLElement} wrapper - where all buttons for a table and the table itself will be
   */
  createTableWrapper() {
    if (this.wrapper = a("div", r.wrapper), this.tableContainer = a("div", r.tableContainer), this.table = a("table", r.table), this.readOnly && this.wrapper.classList.add(r.wrapperReadOnly), this.wrapper.appendChild(this.toolboxColumn.element), this.wrapper.appendChild(this.toolboxRow.element), this.tableContainer.appendChild(this.table), this.wrapper.appendChild(this.tableContainer), !this.readOnly) {
      const t = a("div", r.addColumn, {
        innerHTML: x
      }), e = a("div", r.addRow, {
        innerHTML: x
      });
      this.wrapper.appendChild(t), this.wrapper.appendChild(e);
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
    document.addEventListener("click", this.documentClicked), this.table.onkeypress = (t) => this.onKeyPressListener(t), this.table.addEventListener("keydown", (t) => this.onKeyDownListener(t)), this.table.addEventListener("focusin", (t) => this.focusInTableListener(t)), this.table.addEventListener("focusout", (t) => this.focusOutTableListener(t));
  }
  /**
  * Configures and creates the toolbox for manipulating with columns
  *
  * @returns {Toolbox}
  */
  createColumnToolbox() {
    return new p({
      api: this.api,
      cssModifier: "column",
      items: [
        {
          label: this.api.i18n.t("Add column to left"),
          icon: A,
          hideIf: () => !1,
          onClick: () => {
            this.addColumn(this.focusedCol), this.closeCellToolbox(), this.toolboxRow.hide(), this.toolboxColumn.hide();
          }
        },
        {
          label: this.api.i18n.t("Add column to right"),
          icon: T,
          hideIf: () => !1,
          onClick: () => {
            this.addColumn(this.focusedCol + 1), this.closeCellToolbox(), this.toolboxRow.hide(), this.toolboxColumn.hide();
          }
        },
        {
          label: this.api.i18n.t("Delete column"),
          icon: v,
          hideIf: () => this.cols === 1,
          confirmationRequired: !0,
          onClick: () => {
            this.deleteColumn(this.focusedCol), this.closeCellToolbox(), this.toolboxRow.hide(), this.toolboxColumn.hide();
          }
        }
      ],
      onOpen: () => {
        this.toolboxRow.popover.close(), this.toolboxCell.popover.close();
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
    return new p({
      api: this.api,
      cssModifier: "row",
      items: [
        {
          label: this.api.i18n.t("Add row above"),
          icon: H,
          hideIf: () => !1,
          onClick: () => {
            this.addRow(this.focusedRow), this.closeCellToolbox(), this.toolboxRow.hide(), this.toolboxColumn.hide();
          }
        },
        {
          label: this.api.i18n.t("Add row below"),
          icon: y,
          hideIf: () => !1,
          onClick: () => {
            this.addRow(this.focusedRow + 1), this.closeCellToolbox(), this.toolboxRow.hide(), this.toolboxColumn.hide();
          }
        },
        {
          label: this.api.i18n.t("Delete row"),
          icon: v,
          hideIf: () => this.rows === 1,
          confirmationRequired: !0,
          onClick: () => {
            this.deleteRow(this.focusedRow), this.closeCellToolbox(), this.toolboxRow.hide(), this.toolboxColumn.hide();
          }
        }
      ],
      onOpen: () => {
        this.toolboxColumn.popover.close(), this.toolboxCell.popover.close();
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
    return new p({
      api: this.api,
      cssModifier: "cell",
      items: [
        {
          label: this.api.i18n.t("Merge to Up"),
          icon: S,
          hideIf: () => {
            if (this.focusedRow === 0 || this.data.withHeadings && this.focusedRow === 1)
              return !0;
            let t = this.data.withHeadings ? this.rows - 1 : this.rows, e = this.getIntAttribute(this.focusedCell, "rowspan");
            if (e === t)
              return !0;
            let o = this.focusedCell.parentElement, i = o;
            for (e = 1; e !== 0; ) {
              e--, i = i.previousElementSibling;
              let s = this.getIntAttribute(i, "rowspan");
              e += s - 1;
            }
            return o.children.length !== i.children.length;
          },
          onClick: () => {
            this.mergeUp(), this.closeCellToolbox();
          }
        },
        {
          label: this.api.i18n.t("Merge to Right"),
          icon: R,
          hideIf: () => {
            let t = this.focusedCell.nextElementSibling;
            if (t == null)
              return !0;
            let e = this.getIntAttribute(this.focusedCell, "rowspan"), o = this.getIntAttribute(t, "rowspan");
            return e !== o || this.getIntAttribute(this.focusedCell, "colspan") === this.cols;
          },
          onClick: () => {
            this.mergeRight(), this.closeCellToolbox();
          }
        },
        {
          label: this.api.i18n.t("Merge to Down"),
          icon: k,
          hideIf: () => {
            if (this.data.withHeadings && this.focusedRow === 0)
              return !0;
            let t = this.data.withHeadings ? this.rows - 1 : this.rows, e = this.getIntAttribute(this.focusedCell, "rowspan");
            if (e === t)
              return !0;
            let o = this.focusedCell.parentElement, i = o;
            for (; e !== 0; ) {
              e--, i = i.nextElementSibling;
              let s = this.getIntAttribute(i, "rowspan");
              e += s - 1;
            }
            return o.children.length !== i.children.length;
          },
          onClick: () => {
            this.mergeDown(), this.closeCellToolbox();
          }
        },
        {
          label: this.api.i18n.t("Merge to Left"),
          icon: L,
          hideIf: () => {
            let t = this.focusedCell.previousElementSibling;
            if (t == null)
              return !0;
            let e = this.getIntAttribute(this.focusedCell, "rowspan"), o = this.getIntAttribute(t, "rowspan");
            return e !== o || this.getIntAttribute(this.focusedCell, "colspan") === this.cols;
          },
          onClick: () => {
            this.mergeLeft(), this.closeCellToolbox();
          }
        }
      ],
      onOpen: () => {
        this.toolboxColumn.popover.close(), this.toolboxRow.popover.close();
      },
      onClose: () => {
      }
    });
  }
  /**
   * Merge Up
   */
  mergeUp() {
    let e = this.table.querySelector(`.${r.row}:nth-child(${this.focusedRow})`).querySelector(`.${r.cell}:nth-child(${this.focusedCol + 1})`);
    if (e == null)
      return;
    let o = this.getIntAttribute(this.focusedCell, "rowspan"), i = this.getIntAttribute(e, "rowspan");
    e.setAttribute("rowspan", o + i), e.innerHTML = `${e.innerHTML} ${this.focusedCell.innerHTML}`.trim(), this.focusedCell.remove(), this.saveData(), this.render();
  }
  /**
   * Merge Right
   */
  mergeRight() {
    let t = this.focusedCell.nextElementSibling;
    if (t == null)
      return;
    let e = this.getIntAttribute(this.focusedCell, "colspan"), o = this.getIntAttribute(t, "colspan");
    this.focusedCell.setAttribute("colspan", e + o), this.focusedCell.innerHTML = `${this.focusedCell.innerHTML} ${t.innerHTML}`.trim(), t.remove(), this.saveData(), this.render();
  }
  /**
   * Merge Down
   */
  mergeDown() {
    let t = this.getIntAttribute(this.focusedCell, "rowspan"), e = this.focusedRow + 1 + t, i = this.table.querySelector(`.${r.row}:nth-child(${e})`).querySelector(`.${r.cell}:nth-child(${this.focusedCol + 1})`);
    if (this.getIntAttribute(this.focusedCell, "rowspan"), i == null)
      return;
    let s = this.getIntAttribute(this.focusedCell, "rowspan"), d = this.getIntAttribute(i, "rowspan");
    this.focusedCell.setAttribute("rowspan", s + d), this.focusedCell.innerHTML = `${this.focusedCell.innerHTML} ${i.innerHTML}`.trim(), i.remove(), this.saveData(), this.render();
  }
  /**
   * Merge Left
   */
  mergeLeft() {
    this.focusedCell = this.focusedCell.previousElementSibling, this.mergeRight();
  }
  /**
   * generate and place cellToolbox
   * 
   */
  generateAndPlaceCellToolbox() {
    this.toolboxCell = this.createCellToolbox(), this.table.appendChild(this.toolboxCell.element);
    const { fromTopBorder: t, fromLeftBorder: e } = m(this.table, this.focusedCell), o = this.focusedCell.getBoundingClientRect(), i = this.toolboxCell.element.getBoundingClientRect();
    this.toolboxCell.show(() => ({
      top: `${t}px`,
      left: `${e + o.width - i.width}px`
    }));
  }
  /**
   * close cellToolbox
   * 
   */
  closeCellToolbox() {
    var t;
    (t = this.toolboxCell) == null || t.element.remove(), this.toolboxCell = null;
  }
  focusInTableListener(t) {
    var e;
    (e = this.focusedCell) == null || e.classList.remove(`${r.cellSelected}`), this.closeCellToolbox(), this.toolboxRow.hide(), this.toolboxColumn.hide(), this.focusedCell = t.target, this.focusedCell.classList.add(`${r.cellSelected}`), this.focusedRow = this.focusedCell.parentElement.rowIndex, this.focusedCol = this.focusedCell.cellIndex, this.generateAndPlaceCellToolbox(), this.updateToolboxesPosition();
  }
  /**
  * Update toolboxes position
  *
  */
  updateToolboxesPosition() {
    this.toolboxRow.hide(), this.toolboxColumn.hide(), this.toolboxRow.show(() => {
      const t = this.focusedCell.parentElement, { fromTopBorder: e } = m(this.table, t), { height: o } = t.getBoundingClientRect();
      return {
        top: `${Math.ceil(e + o / 2)}px`
      };
    }), this.toolboxColumn.show(() => ({
      left: `calc((100% - var(--cell-size)) / (${this.cols} * 2) * (1 + (${this.focusedCol}) * 2))`
    }));
  }
  focusOutTableListener(t) {
    this.saveData();
  }
  /**
  * Prevents default Enter behaviors
  * Adds Shift+Enter processing
  *
  * @param {KeyboardEvent} event - keypress event
  */
  onKeyPressListener(t) {
    if (t.key === "Enter") {
      if (t.shiftKey)
        return !0;
      this.moveCursorToNextRow();
    }
    return t.key !== "Enter";
  }
  /**
   * Prevents tab keydown event from bubbling
   * so that it only works inside the table
   *
   * @param {KeyboardEvent} event - keydown event
   */
  onKeyDownListener(t) {
    t.key === "Tab" && t.stopPropagation();
  }
  /**
   * Makes the first row headings
   *
   * @param {boolean} withHeadings - use headings row or not
   */
  setHeadingsSetting(t) {
    this.tunes.withHeadings = t, t ? this.table.classList.add(r.withHeadings) : this.table.classList.remove(r.withHeadings);
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
  getIntAttribute(t, e, o = 1) {
    return Number(t.getAttribute(e) ?? o);
  }
  /**
   * Remove listeners on the document
   */
  destroy() {
    document.removeEventListener("click", this.documentClicked);
  }
}
class D {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to press Enter inside the CodeTool textarea
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {TableConstructor} init
   */
  constructor({ data: t, config: e, api: o, readOnly: i, block: s }) {
    this.api = o, this.readOnly = i, this.config = e, this.data = {
      withHeadings: this.getConfig("withHeadings", !1, t),
      stretched: this.getConfig("stretched", !1, t),
      content: t && t.content ? t.content : []
    }, this.table = null, this.block = s;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: $,
      title: "Table"
    };
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.table = new j(this.readOnly, this.api, this.data, this.config), this.container = a("div", this.api.styles.block), this.container.appendChild(this.table.getWrapper()), this.table.setHeadingsSetting(this.data.withHeadings), this.container;
  }
  /**
   * Returns plugin settings
   *
   * @returns {Array}
   */
  renderSettings() {
    return [
      {
        label: this.api.i18n.t("With headings"),
        icon: O,
        isActive: this.data.withHeadings,
        closeOnActivate: !0,
        toggle: !0,
        onActivate: () => {
          this.data.withHeadings = !0, this.table.setHeadingsSetting(this.data.withHeadings);
        }
      },
      {
        label: this.api.i18n.t("Without headings"),
        icon: B,
        isActive: !this.data.withHeadings,
        closeOnActivate: !0,
        toggle: !0,
        onActivate: () => {
          this.data.withHeadings = !1, this.table.setHeadingsSetting(this.data.withHeadings);
        }
      },
      {
        label: this.data.stretched ? this.api.i18n.t("Collapse") : this.api.i18n.t("Stretch"),
        icon: this.data.stretched ? M : E,
        closeOnActivate: !0,
        toggle: !0,
        onActivate: () => {
          this.data.stretched = !this.data.stretched, this.block.stretched = this.data.stretched;
        }
      }
    ];
  }
  /**
   * Extract table data from the view
   *
   * @returns {TableData} - saved data
   */
  save() {
    const t = this.table.getData();
    return {
      withHeadings: this.data.withHeadings,
      stretched: this.data.stretched,
      content: t
    };
  }
  /**
   * Plugin destroyer
   *
   * @returns {void}
   */
  destroy() {
    this.table.destroy();
  }
  /**
   * A helper to get config value.
   *
   * @param {string} configName - the key to get from the config.
   * @param {any} defaultValue - default value if config doesn't have passed key
   * @param {object} savedData - previously saved data. If passed, the key will be got from there, otherwise from the config
   * @returns {any} - config value.
   */
  getConfig(t, e = void 0, o = void 0) {
    const i = this.data || o;
    return i ? i[t] ? i[t] : e : this.config && this.config[t] ? this.config[t] : e;
  }
  /**
   * Table onPaste configuration
   *
   * @public
   */
  static get pasteConfig() {
    return {
      tags: [
        "TABLE",
        "TR",
        { TH: { colspan: !0 } },
        { TD: { colspan: !0, rowspan: !0 } }
      ]
    };
  }
  /**
   * On paste callback that is fired from Editor
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(t) {
    const e = t.detail.data, o = e.querySelector(":scope > thead, tr:first-of-type th"), s = Array.from(e.querySelectorAll("tr")).map((d) => Array.from(d.querySelectorAll("th, td")).map((l) => {
      let c = { content: l.innerHTML }, f = l.getAttribute("colspan");
      f && (c.colspan = f);
      let w = l.getAttribute("rowspan");
      return w && (c.rowspan = w), !f && !w ? l.innerHTML : c;
    }));
    this.data = {
      withHeadings: o !== null,
      content: s
    }, this.table.wrapper && this.table.wrapper.replaceWith(this.render());
  }
}
export {
  D as default
};
