'use client'

import { Button } from '@/src/components/ui/button'
import { Card } from '@/src/components/ui/card'
import {
  ArrowRight,
  Code,
  Globe,
  Zap,
  ChevronDown,
  Calendar
} from 'lucide-react'
import { useState, useEffect, useRef, memo, useMemo } from 'react'
import { Navbar } from '@/src/components/navbar'
import Image from 'next/image'

const handleWhatsAppClick = () => {
  const message = encodeURIComponent(
    '¡Hola! Me interesa conocer más sobre sus servicios de desarrollo web.'
  )
  window.open(`https://wa.me/5491124638281?text=${message}`, '_blank')
}

function useScrollAnimation () {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isVisible] as const
}

const OptimizedBackground = memo(() => {
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none'>
      <div className='absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#1a0a1a] to-[#0a1a1a]'></div>
    </div>
  )
})

const ServiceCard = memo(
  ({ service, visible }: { service: any; visible: boolean }) => {
    const cardClasses = `
    relative 
    bg-gradient-to-br from-[#0F0F0F]/90 
    p-8 
    shadow-xl 
    backdrop-blur-sm 
    transition-all 
    duration-500
    border
    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
  `
    const iconClasses = `
    w-16 
    h-16 
    rounded-xl 
    flex 
    items-center 
    justify-center 
    mb-6
  `
    const tagClasses = `
    px-3 
    py-1 
    text-sm 
    rounded-full 
    border
  `
    return (
      <Card
        style={{
          borderColor: `${service.color}4D`, // 30% opacity
          background: `linear-gradient(135deg, rgba(15, 15, 15, 0.9), ${service.color}0D, rgba(15, 15, 15, 0.9))` // 5% opacity para via
        }}
        className={cardClasses}
      >
        <div
          style={{
            background: `linear-gradient(to right, ${service.color}, ${service.color}B3)` // 70% opacity para el to
          }}
          className={iconClasses}
        >
          <service.icon className='w-8 h-8 text-white' />
        </div>
        <h3 className='text-2xl font-bold text-white mb-4'>{service.title}</h3>
        <p className='text-gray-300 leading-relaxed mb-4'>
          {service.description}
        </p>
        <div className='flex flex-wrap gap-2'>
          {service.tags.map((tag: string, index: number) => (
            <span
              key={index}
              style={{
                backgroundColor: `${service.color}33`, // 20% opacity
                color: service.color,
                borderColor: `${service.color}4D` // 30% opacity
              }}
              className={tagClasses}
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>
    )
  }
)

export default function HomePage () {
  const [servicesRef, servicesVisible] = useScrollAnimation()
  const [agendarRef, agendarVisible] = useScrollAnimation()
  const [ctaRef, ctaVisible] = useScrollAnimation()

  const services = useMemo(
    () => [
      {
        icon: Globe,
        title: 'Desarrollo Web',
        description:
          'Sitios web modernos, responsivos y optimizados con las últimas tecnologías como React, Next.js y Node.js.',
        color: '#FF007F',
        tags: ['React', 'Next.js', 'TypeScript']
      },
      {
        icon: Code,
        title: 'E-commerce',
        description:
          'Tiendas online completas con sistemas de pago seguros, gestión de inventario y analytics avanzados.',
        color: '#FFD600',
        tags: ['Shopify', 'WooCommerce', 'Stripe']
      }
    ],
    []
  )

  return (
    <div className='min-h-screen bg-[#0F0F0F] text-white overflow-hidden relative'>
      <OptimizedBackground />
      <Navbar onWhatsAppClick={handleWhatsAppClick} />
      <section className='relative px-4 sm:px-6 lg:px-12 py-12 sm:py-20 lg:py-32'>
        <div className='relative z-10 max-w-6xl mx-auto text-center'>
          <div className='inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-[#FF007F]/10 to-[#00E5FF]/10 border border-[#FF007F]/20 rounded-full mb-6 sm:mb-8'>
            <Zap className='w-4 h-4 text-[#FFD600] mr-2' />
            <span className='text-xs sm:text-sm text-[#00E5FF]'>
              Desarrollo Web del Futuro
            </span>
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in'>
            <span className='bg-gradient-to-r from-white via-[#00E5FF] to-[#FF007F] bg-clip-text text-transparent'>
              Transformamos
            </span>
            <br />
            <span className='text-white'>Ideas en</span>
            <br />
            <span className='bg-gradient-to-r from-[#FFD600] to-[#FF007F] bg-clip-text text-transparent'>
              Experiencias Digitales
            </span>
          </h1>

          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in-delay'>
            Somos una agencia de desarrollo web que combina creatividad,
            tecnología de vanguardia y diseño futurista para crear soluciones
            digitales que impactan.
          </p>

          <div className='animate-fade-in-delay-2'>
            <Button
              size='lg'
              onClick={handleWhatsAppClick}
              className='bg-[#FFD600] text-[#0F0F0F] font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto transition-all duration-300 hover:bg-[#FFD600]/80 hover:scale-105 hover:cursor-pointer active:scale-95 hover:shadow-lg'
            >
              Iniciar Proyecto
              <ArrowRight className='ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1' />
            </Button>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 gap-4 justify-center items-center mb-12 sm:mb-16 px-4 mt-16'>
            <div className='text-center'>
              <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF007F] mb-1 sm:mb-2'>
                98%
              </div>
              <div className='text-xs sm:text-sm text-gray-400'>
                Satisfacción Cliente
              </div>
            </div>
            <div className='text-center'>
              <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2'>
                24/7
              </div>
              <div className='text-xs sm:text-sm text-gray-400'>
                Soporte Técnico
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <ChevronDown className='w-5 sm:w-6 h-5 sm:h-6 text-[#00E5FF]' />
        </div>
      </section>

      {/* Services Section */}
      <section
        id='servicios'
        ref={servicesRef}
        className='px-4 sm:px-6 lg:px-12 py-12 sm:py-20 relative'
      >
        <div className='max-w-6xl mx-auto relative z-10'>
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              servicesVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className='inline-flex items-center px-4 py-2 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-full mb-6'>
              <Code className='w-4 h-4 text-[#FFD600] mr-2' />
              <span className='text-sm text-[#00E5FF]'>Servicios Premium</span>
            </div>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative'>
              <span className='bg-gradient-to-r from-[#FF007F] via-[#FFD600] to-[#00E5FF] bg-clip-text text-transparent'>
                Nuestros Servicios
              </span>
              <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#FF007F] to-[#00E5FF] rounded-full'></div>
            </h2>
            <p className='text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4'>
              Ofrecemos soluciones tecnológicas completas para llevar tu negocio
              al siguiente nivel digital
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16'>
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                visible={servicesVisible}
              />
            ))}
          </div>

          {/* Additional Features */}
          <div
            className={`bg-[#0F0F0F]/30 border border-[#00E5FF]/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-1000 delay-300 ${
              servicesVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className='text-center mb-8'>
              <h3 className='text-2xl sm:text-3xl font-bold text-white mb-4'>
                <span className='bg-gradient-to-r from-[#00E5FF] to-[#FFD600] bg-clip-text text-transparent'>
                  Características Adicionales
                </span>
              </h3>
              <p className='text-gray-400'>
                Todo lo que necesitas para destacar en el mundo digital
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                {
                  icon: Zap,
                  title: 'Performance',
                  desc: 'Optimización extrema para velocidad de carga',
                  color: '#00E5FF'
                },
                {
                  icon: Globe,
                  title: 'SEO',
                  desc: 'Posicionamiento web para máxima visibilidad',
                  color: '#FF007F'
                },
                {
                  icon: Code,
                  title: 'Soporte',
                  desc: 'Mantenimiento y actualizaciones continuas',
                  color: '#FFD600'
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}1A, ${feature.color}0D)`, // 10% to 5% opacity
                    borderColor: `${feature.color}33` // 20% opacity
                  }}
                  className='text-center p-6 border rounded-xl transition-all duration-500'
                >
                  <div
                    style={{
                      background: `linear-gradient(to right, ${feature.color}4D, ${feature.color}33)` // 30% to 20% opacity
                    }}
                    className='w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4'
                  >
                    <feature.icon
                      style={{ color: feature.color }}
                      className='w-6 h-6'
                    />
                  </div>
                  <h4 className='text-lg font-semibold text-white mb-2 transition-colors'>
                    {feature.title}
                  </h4>
                  <p className='text-sm text-gray-400'>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agendar Section */}
      <section
        id='agendar'
        ref={agendarRef}
        className='px-4 sm:px-6 lg:px-12 py-12 sm:py-20 relative'
      >
        <div
          className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${
            agendarVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className='inline-flex items-center px-4 py-2 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-full mb-8'>
            <Calendar className='w-4 h-4 text-[#FFD600] mr-2' />
            <span className='text-sm text-[#00E5FF]'>Consulta Gratuita</span>
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6'>
            <span className='text-white'>Agenda una </span>
            <span className='bg-gradient-to-r from-[#FFD600] to-[#FF007F] bg-clip-text text-transparent'>
              Consulta Gratuita
            </span>
          </h2>

          <p className='text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4'>
            Conversemos sobre tu proyecto. Te ofrecemos una consulta gratuita de
            30 minutos para analizar tus necesidades y proponerte la mejor
            solución digital.
          </p>

          <div className='border w-full border-[#FF007F]/20 rounded-2xl mb-8 overflow-hidden backdrop-blur-sm bg-[#000] shadow-[0_0_15px_rgba(255,0,127,0.1)] px-2'>
            <iframe
              title='Calendly Scheduler'
              src='https://calendly.com/maxisto043/30min?background_color=000&text_color=fff&primary_color=0ea5e9&hide_gdpr_banner=1'
              style={{
                width: '100%',
                height: 780,
                border: 0,
                display: 'block'
              }}
              loading='lazy'
            />
          </div>

          <p className='text-sm text-gray-400'>
            * Sin compromiso. Cancela o reprograma cuando quieras.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className='px-4 sm:px-6 lg:px-12 py-12 sm:py-20 relative'
      >
        <div
          className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${
            ctaVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6'>
            <span className='text-white'>¿Listo para </span>
            <span className='bg-gradient-to-r from-[#FFD600] to-[#FF007F] bg-clip-text text-transparent'>
              Revolucionar
            </span>
            <span className='text-white'> tu Presencia Digital?</span>
          </h2>
          <p className='text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4'>
            Contactanos hoy y descubre cómo podemos transformar tu visión en una
            realidad digital extraordinaria.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center px-4'>
            <Button
              size='lg'
              onClick={handleWhatsAppClick}
              className='group bg-[#FFD600] text-[#0F0F0F] font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto transition-all duration-300 hover:bg-[#FFD600]/80 hover:scale-105 hover:cursor-pointer active:scale-95 hover:shadow-lg'
            >
              Comenzar Ahora
              <ArrowRight className='ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1' />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-[#0F0F0F]/95 border-t border-[#FF007F]/30 px-4 sm:px-6 lg:px-12 py-8 sm:py-12 relative'>
        <div className='max-w-6xl mx-auto relative z-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Logo y descripción */}
            <div className=''>
              <div className='flex items-center space-x-2'>
                <Image
                  src='/logo.png'
                  width='100'
                  height={100}
                  alt='Logo Skyma IT'
                  className='w-32'
                />
              </div>
              <p className='text-gray-400 text-sm'>
                Transformamos ideas en experiencias digitales extraordinarias
                con tecnología de vanguardia.
              </p>
            </div>

            {/* Información de contacto */}
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-white'>Contacto</h3>
              <div className='space-y-2'>
                <p className='text-gray-400 text-sm'>clientes@skymait.com</p>
                <p className='text-gray-400 text-sm'>+54 9 11 2463-8281</p>
                <a
                  href='https://www.instagram.com/skymait/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 text-sm cursor-pointer'
                >
                  @skymait
                </a>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-white'>Enlaces</h3>
              <div className='space-y-2'>
                <a
                  href='#servicios'
                  className='block text-gray-400 transition-colors text-sm'
                >
                  Servicios
                </a>
                <a
                  href='#agendar'
                  className='block text-gray-400 transition-colors text-sm'
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </div>

          <div className='border-t border-[#FF007F]/20 mt-8 pt-8 text-center'>
            <p className='text-gray-400 text-sm'>
              © 2025 SKYMA IT. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
