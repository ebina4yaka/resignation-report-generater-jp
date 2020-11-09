import { ReactElement } from 'react'
import Header from '../organisms/Header'
import FooterDefault from '../organisms/FooterDefault'
import AboutButtons from '../molecules/AboutButtons'
import AboutContainer from '../organisms/AboutContainer'

export default function About(): ReactElement {
  return (
    <>
      <Header title="使い方" />
      <AboutContainer />
      <AboutButtons />
      <FooterDefault />
    </>
  )
}
