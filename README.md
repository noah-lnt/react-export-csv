# React Export CSV

[![NPM](https://img.shields.io/npm/v/react-export-csv.svg)](https://www.npmjs.com/package/react-export-csv) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**React Export CSV component for React.**

## Installation

```bash
npm install --save react-export-csv
```

## Documentation

| Props | Type | Default | Details |
|--|--|--|--|
| header | array | null | header for CSV file |
| data | array | null | data row for CSV file |
| separator | string | ; | CSV separator (";" / "," / ...) |
| callback | function | null | callback data |
| isDownload | boolean | false | if auto download file |
| filename | string | "no_name.csv" | file name downloaded file |

## Getting started

### Import Component and style

```bash
import { ExportCSV } from 'react-export-csv'
```

### Render Component

```bash
<ExportCSV
  header={[
    {
      name: "Col 1",
      key: "col_1"
    },
    {
      name: "Col 2",
      key: "col_2"
    }
  ]}
  data={[
    {
      col_1: "Data 1 col 1",
      col_2: "Data 1 col 2"
    },
    {
      col_1: "Data 2 col 1",
      col_2: "Data 2 col 2"
    }
  ]}
  separator={';'}
  callback={(res) => console.log(res)}
  isDownload={true}
  filename={"test.csv"}
/>
```

## License

MIT © [noah-lnt](https://github.com/noah-lnt)
