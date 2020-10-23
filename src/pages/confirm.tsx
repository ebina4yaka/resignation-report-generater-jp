import React from 'react'
import Header from '../organisms/Header'
import ExportConfirm from '../organisms/ExportConfirm'
import Footer from '../organisms/Footer'

export default function Confirm(): React.ReactElement {
  return (
    <>
      <Header headerTitle="確認" />
      <ExportConfirm />
      <Footer />
    </>
  )
}
