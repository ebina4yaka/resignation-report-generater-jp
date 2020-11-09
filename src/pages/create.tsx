import { ReactElement } from 'react'
import Header from '../organisms/Header'
import ExportConfig from '../organisms/ExportConfig'
import ExportDialog from '../organisms/ExportDialog'
import FooterDefault from '../organisms/FooterDefault'
import useParameters, { parametersContext } from '../context/useParameters'

export default function Create(): ReactElement {
  const context = useParameters()
  return (
    <parametersContext.Provider value={context}>
      <Header title="作成" />
      <ExportConfig />
      <ExportDialog />
      <FooterDefault />
    </parametersContext.Provider>
  )
}
