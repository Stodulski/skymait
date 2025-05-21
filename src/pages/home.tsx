import React from 'react'
import { Nav } from '../components/layout/Nav'
import { HeroSections } from '../components/HeroSection/HeroSection'
import { ServicesSection } from '../components/servicesSection/ServicesSection'
const BenefitsSection = React.lazy(
  () => import('../components/benefitsSection/BenefitsSection')
)
const Footer = React.lazy(() => import('../components/layout/Footer'))
import { Suspense } from 'react'

export const Home = () => {
  return (
    <>
      <Nav />
      <HeroSections />
      <ServicesSection />
      <Suspense>
        <BenefitsSection />
        <Footer />
      </Suspense>
    </>
  )
}
