import React from 'react'
import Header from '../organisms/Header'
import ExportConfig from '../organisms/ExportConfig'
import Footer from '../organisms/Footer'

export default function Index(): React.ReactElement {
  return (
    <>
      <Header headerTitle="作成" />
      <ExportConfig />
      <Footer />
    </>
  )
}
