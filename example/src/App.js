import React from 'react'

import { ExportCSV } from 'react-export-csv'
import 'react-export-csv/dist/index.css'

const App = () => {
  return <ExportCSV
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
}

export default App
