'use client'

import { Button } from '@/src/components/ui/button'
import { Card } from '@/src/components/ui/card'
import { ArrowRight, Code, Globe, Zap, ChevronDown, Calendar } from 'lucide-react'
import { useState, useEffect, useRef, memo, useMemo, useCallback } from 'react'
import { Navbar } from '@/src/components/navbar'
import Image from 'next/image'

// ---------- Utils ----------
type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  color: `#${string}`
  tags: string[]
}

const withAlpha = (hex: string, alphaHex: string) => `${hex}${alphaHex}`

// Constantes fuera del componente para no recrearlas
const SERVICES: Service[] = [
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
] as const

const FEATURES = [
  { icon: Zap,    title: 'Performance', desc: 'Optimización extrema para velocidad de carga', color: '#00E5FF' },
  { icon: Globe,  title: 'SEO',         desc: 'Posicionamiento web para máxima visibilidad',   color: '#FF007F' },
  { icon: Code,   title: 'Soporte',     desc: 'Mantenimiento y actualizaciones continuas',     color: '#FFD600' },
] as const

// ---------- Hooks ----------
function useInView (opts: IntersectionObserverInit & { once?: boolean } = { threshold: 0.1, rootMargin: '50px', once: true }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        if (opts.once) observer.disconnect()
      } else if (!opts.once) {
        setIsVisible(false)
      }
    }, opts)

    const node = ref.current
    if (node) observer.observe(node)
    return () => observer.disconnect()
  }, [opts.threshold, opts.rootMargin, opts.once])

  return [ref, isVisible] as const
}

// ---------- Components ----------
const OptimizedBackground = memo(() => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#1a0a1a] to-[#0a1a1a]" />
  </div>
))

const ServiceCard = memo(function ServiceCard ({ service, visible }: { service: Service; visible: boolean }) {
  const { title, description, tags, color, icon: Icon } = service

  const cardClass = useMemo(
    () =>
      [
        'relative bg-gradient-to-br from-[#0F0F0F]/90 p-8 shadow-xl transition-all duration-500 border rounded-2xl',
        // reducir blur en mobile; es caro
        'backdrop-blur-0 md:backdrop-blur-sm',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
      ].join(' '),
    [visible]
  )

  const cardStyle = useMemo<React.CSSProperties>(() => ({
    borderColor: withAlpha(color, '4D'),
    background: `linear-gradient(135deg, rgba(15,15,15,0.9), ${withAlpha(color,'0D')}, rgba(15,15,15,0.9))`,
    willChange: 'opacity, transform',
  }), [color])

  const iconStyle = useMemo<React.CSSProperties>(() => ({
    background: `linear-gradient(to right, ${color}, ${withAlpha(color,'B3')})`,
  }), [color])

  const tagStyle = useMemo<React.CSSProperties>(() => ({
    backgroundColor: withAlpha(color,'33'),
    color,
    borderColor: withAlpha(color,'4D'),
  }), [color])

  return (
    <Card style={cardStyle} className={cardClass}>
      <div style={iconStyle} className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" aria-hidden>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} style={tagStyle} className="px-3 py-1 text-sm rounded-full border">
            {tag}
          </span>
        ))}
      </div>
    </Card>
  )
}, (a, b) => a.visible === b.visible && a.service === b.service)

// ---------- Page ----------
export default function HomePage () {
  const [servicesRef, servicesVisible] = useInView()
  const [agendarRef, agendarVisible] = useInView()
  const [ctaRef, ctaVisible] = useInView()

  const onWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre sus servicios de desarrollo web.')
    window.open(`https://wa.me/5491124638281?text=${message}`, '_blank', 'noopener,noreferrer')
  }, [])

  // services es estático (constante global), pero si quisieras extender dinámicamente,
  // useMemo evita recrearlo por render:
  const services = useMemo(() => SERVICES, [])

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white overflow-hidden relative">
      <OptimizedBackground />
      <Navbar onWhatsAppClick={onWhatsAppClick} />

      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-12 py-12 sm:py-20 lg:py-32"
               style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px' as any }}>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-[#FF007F]/10 to-[#00E5FF]/10 border border-[#FF007F]/20 rounded-full mb-6 sm:mb-8">
            <Zap className="w-4 h-4 text-[#FFD600] mr-2" />
            <span className="text-xs sm:text-sm text-[#00E5FF]">Desarrollo Web del Futuro</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-[#00E5FF] to-[#FF007F] bg-clip-text text-transparent">Transformamos</span><br />
            <span className="text-white">Ideas en</span><br />
            <span className="bg-gradient-to-r from-[#FFD600] to-[#FF007F] bg-clip-text text-transparent">Experiencias Digitales</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Somos una agencia de desarrollo web que combina creatividad, tecnología de vanguardia y diseño futurista para crear soluciones digitales que impactan.
          </p>

          <div>
            <Button
              size="lg"
              onClick={onWhatsAppClick}
              className="group bg-[#FFD600] cursor-pointer text-[#0F0F0F] font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Iniciar Proyecto
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 justify-center items-center mb-12 sm:mb-16 px-4 mt-16">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF007F] mb-1 sm:mb-2">98%</div>
              <div className="text-xs sm:text-sm text-gray-400">Satisfacción Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-gray-400">Soporte Técnico</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce motion-reduce:animate-none">
          <ChevronDown className="w-5 sm:w-6 h-5 sm:h-6 text-[#00E5FF]" />
        </div>
      </section>

      {/* Services */}
      <section id="servicios" ref={servicesRef}
               className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20 relative"
               style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px' as any }}>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`text-center mb-12 sm:mb-16 transition-transform duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-full mb-6">
              <Code className="w-4 h-4 text-[#FFD600] mr-2" />
              <span className="text-sm text-[#00E5FF]">Servicios Premium</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative">
              <span className="bg-gradient-to-r from-[#FF007F] via-[#FFD600] to-[#00E5FF] bg-clip-text text-transparent">Nuestros Servicios</span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#FF007F] to-[#00E5FF] rounded-full" />
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Ofrecemos soluciones tecnológicas completas para llevar tu negocio al siguiente nivel digital
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} visible={servicesVisible} />
            ))}
          </div>

          {/* Features */}
          <div className={`bg-[#0F0F0F]/30 border border-[#00E5FF]/20 rounded-2xl p-8 transition-transform duration-700 delay-200 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-[#00E5FF] to-[#FFD600] bg-clip-text text-transparent">Características Adicionales</span>
              </h3>
              <p className="text-gray-400">Todo lo que necesitas para destacar en el mundo digital</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURES.map((f) => (
                <div key={f.title}
                     style={{ background: `linear-gradient(135deg, ${withAlpha(f.color,'1A')}, ${withAlpha(f.color,'0D')})`, borderColor: withAlpha(f.color,'33') }}
                     className="text-center p-6 border rounded-xl transition-transform duration-300 will-change-transform hover:translate-y-0.5">
                  <div style={{ background: `linear-gradient(to right, ${withAlpha(f.color,'4D')}, ${withAlpha(f.color,'33')})` }}
                       className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <f.icon style={{ color: f.color }} className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{f.title}</h4>
                  <p className="text-sm text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agendar */}
      <section id="agendar" ref={agendarRef}
               className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20 relative"
               style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px' as any }}>
        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-transform duration-700 ${agendarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-full mb-8">
            <Calendar className="w-4 h-4 text-[#FFD600] mr-2" />
            <span className="text-sm text-[#00E5FF]">Consulta Gratuita</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Agenda una </span>
            <span className="bg-gradient-to-r from-[#FFD600] to-[#FF007F] bg-clip-text text-transparent">Consulta Gratuita</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Conversemos sobre tu proyecto. Te ofrecemos una consulta gratuita de 30 minutos para analizar tus necesidades y proponerte la mejor solución digital.
          </p>

          {/* Carga diferida del iframe: sólo lo insertamos cuando es visible */}
          <div className="border w-full border-[#FF007F]/20 rounded-2xl mb-8 overflow-hidden bg-black px-2 shadow-[0_0_15px_rgba(255,0,127,0.1)]">
            {agendarVisible ? (
              <iframe
                title="Calendly Scheduler"
                src="https://calendly.com/maxisto043/30min?background_color=000&text_color=fff&primary_color=0ea5e9&hide_gdpr_banner=1"
                style={{ width: '100%', height: 780, border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              // Placeholder ligero para evitar layout shift
              <div style={{ height: 780 }} className="w-full animate-pulse bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-xl" aria-hidden />
            )}
          </div>

          <p className="text-sm text-gray-400">* Sin compromiso. Cancela o reprograma cuando quieras.</p>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef}
               className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20 relative"
               style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' as any }}>
        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-transform duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-white">¿Listo para </span>
            <span className="bg-gradient-to-r from-[#FFD600] to-[#FF007F] bg-clip-text text-transparent">Revolucionar</span>
            <span className="text-white"> tu Presencia Digital?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Contactanos hoy y descubre cómo podemos transformar tu visión en una realidad digital extraordinaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              size="lg"
              onClick={onWhatsAppClick}
              className="group bg-[#FFD600] cursor-pointer text-[#0F0F0F] font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Comenzar Ahora
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F0F]/95 border-t border-[#FF007F]/30 px-4 sm:px-6 lg:px-12 py-8 sm:py-12 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  width={128}
                  height={64}
                  alt="Logo Skyma IT"
                  className="w-32 h-auto"
                  priority={false}
                  sizes="(max-width: 768px) 128px, 128px"
                  decoding="async"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Transformamos ideas en experiencias digitales extraordinarias con tecnología de vanguardia.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contacto</h3>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">clientes@skymait.com</p>
                <p className="text-gray-400 text-sm">+54 9 11 2463-8281</p>
                <a href="https://www.instagram.com/skymait/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm cursor-pointer">
                  @skymait
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Enlaces</h3>
              <div className="space-y-2">
                <a href="#servicios" className="block text-gray-400 transition-colors text-sm">Servicios</a>
                <a href="#agendar" className="block text-gray-400 transition-colors text-sm">Agendar Consulta</a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#FF007F]/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 SKYMA IT. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
