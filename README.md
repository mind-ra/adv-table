# Table tool

The Table Block for the [Editor.js](https://editorjs.io).


![](assets/68747470733a2f2f636170656c6c612e706963732f34313239346365632d613262332d343135372d383339392d6666656665643364386666642e6a7067.jpeg)

## Installation

Get the package

```shell
yarn add https://github.com/mind-ra/adv-table
```

Include module at your application

```javascript
import Table from '@adv-table'
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
import Table from '@adv-table';

var editor = EditorJS({
  tools: {
    table: Table,
  }
});
```

Or init the Table tool with additional settings

```javascript
var editor = EditorJS({
  tools: {
    table: {
      class: Table,
      inlineToolbar: true,
      config: {
        rows: 2,
        cols: 3,
      },
    },
  },
});
```

## Config Params

| Field          | Type      | Description                                                            |
| -------------- | --------- | ---------------------------------------------------------------------- |
| `rows`         | `number`  | initial number of rows. `2` by default                                 |
| `cols`         | `number`  | initial number of columns. `2` by default                              |
| `withHeadings` | `boolean` | toggle table headings. `false` by default                              |
| `stretched`    | `boolean` | whether the table is stretched to fill the full width of the container |

## Output data

This Tool returns `data` in the following format

| Field          | Type         | Description                                                            |
| -------------- | ------------ | ---------------------------------------------------------------------- |
| `withHeadings` | `boolean`    | Uses the first line as headings                                        |
| `stretched`    | `boolean`    | whether the table is stretched to fill the full width of the container |
| `content`      | `object[][]` | two-dimensional array with table contents                              |

```json
{
  "type" : "table",
  "data" : {
    "withHeadings": true,
    "stretched": false,
    "content" : [ [ "Kine", "Pigs", "Chicken" ], [ "1 pcs", "3 pcs", "12 pcs" ], [ "100$", "200$", "150$" ] ]
  }
}

{
  "type" : "table",
  "data" : {
    "withHeadings": true,
    "stretched": false,
    "content" : [ [
                        "1",
                        "2",
                        "3"
                    ],
                    [
                        {
                            "content": "a b c",
                            "colspan": "3"
                        }
                    ],
                    [
                        "d",
                        {
                            "content": "e h",
                            "rowspan": "2"
                        },
                        "f"
                    ],
                    [
                        "g",
                        "i"
                    ],
                    [
                        "j",
                        "k",
                        "l"
                    ] ]
  }
}
```

## CSP support

If you're using Content Security Policy (CSP) pass a `nonce` via [`<meta property="csp-nonce" content={{ nonce }} />`](https://github.com/marco-prontera/vite-plugin-css-injected-by-js#usestrictcsp-boolean) in your document head.

