import { Suspense } from 'react'
import React from 'react'
import { Nav } from '../components/layout/Nav'
import { HeroSections } from '../components/HeroSection/HeroSection'
import { ServicesSection } from '../components/servicesSection/ServicesSection'
import { TechSection } from '../components/techSection/techSection'
import { BeneficiosSection } from '../components/beneficiosExclusivos/beneficiosSection'
const BenefitsSection = React.lazy(() =>
  import('../components/benefitsSection/BenefitsSection')
)
const Footer = React.lazy(() => import('../components/layout/Footer'))


export const Home = () => {
  return (
    <>
      <Nav />
      <HeroSections />
      <ServicesSection />
      <Suspense>
        <TechSection />
        <BeneficiosSection />
        <BenefitsSection />
        <Footer />
      </Suspense>
    </>
  )
}
