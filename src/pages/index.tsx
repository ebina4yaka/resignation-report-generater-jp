import React from 'react'
import Header from '../organisms/Header'
import PdfExport from '../organisms/PdfExport'
import Footer from '../organisms/Footer'

export default function Index(): React.ReactElement {
  return (
    <>
      <Header />
      <PdfExport />
      <Footer />
    </>
  )
}
