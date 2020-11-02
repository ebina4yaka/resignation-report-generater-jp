import React from 'react'
import Header from '../organisms/Header'
import ExportConfig from '../organisms/ExportConfig'
import ExportDialog from '../organisms/ExportDialog'
import Footer from '../organisms/Footer'
import useParameters, { parametersContext } from '../context/useParameters'

export default function Index(): React.ReactElement {
  const context = useParameters()
  return (
    <parametersContext.Provider value={context}>
      <Header headerTitle="作成" />
      <ExportConfig />
      <ExportDialog />
      <Footer />
    </parametersContext.Provider>
  )
}
