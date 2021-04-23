import React, { Fragment, useEffect } from 'react'

export const ExportCSV = (props) => {
  useEffect(() => {
    const separator = props.separator || ';'
    let data = '\uFEFF'
    if (props.header.length > 0 && props.data.length > 0) {
      props.header.map((elemHeader, keyHeader) => {
        data += `${keyHeader > 0 ? separator : ''}"${elemHeader.name}"`
      })
      props.data.map((elemData, keyData) => {
        data += '\n'
        props.header.map((elemHeader, keyHeader) => {
          // eslint-disable-next-line no-prototype-builtins
          const tmpData = elemData.hasOwnProperty(elemHeader.key)
            ? `"${elemData[elemHeader.key]}"`
            : '""'
          data += `${keyHeader > 0 ? separator : ''}${tmpData}`
        })
      })
      if (props.isDownload) {
        downloadTxtFile(data)
      }
      if (props.callback) {
        props.callback({
          success: true,
          data
        })
      }
    } else {
      if (props.callback) {
        props.callback({ success: false })
      }
    }
  })

  const downloadTxtFile = (value) => {
    const element = document.createElement('a')
    // eslint-disable-next-line no-undef
    const file = new Blob([value], { type: 'text/csv;charset=utf-8' })
    element.href = URL.createObjectURL(file)
    element.download = props.filename || 'no_name.csv'
    document.body.appendChild(element)
    element.click()
  }

  return <Fragment />
}
