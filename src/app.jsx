import React, { Suspense } from 'react'
import './global.css'
import { Nav } from './components/Nav'
import Main from './components/Main'
import { ServicesSection } from './components/ServicesSection'
const BenefitsSection = React.lazy(() => import('./components/BenefitsSection'))
const Footer = React.lazy(() => import('./components/Footer'))
const templateReact = () => {
  return (
    <>
      <Nav />
      <Main />
      <ServicesSection />
      <Suspense>
        <BenefitsSection />
        <Footer />
      </Suspense>
    </>
  )
}

export default templateReact
