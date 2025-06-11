import { Services } from './Services'

export const ServicesSection = () => {
  return (
    <section className='bg-white py-5 md:py-8 scroll-mt-[60px] ' id='servicios'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 pt-3'>
        <div className='max-w-7xl mx-auto pt-3'>
          <div className='max-w-2xl mx-auto lg:text-center'>
            <p className=' text-lg sm:text-lg leading-7 uppercase tracking-[3px] text-blue-800 sm:scroll-show'>
              Soluciones Web Personalizadas
            </p>
            <h2 className='text-4xl font-bold tracking-tight text-gray-900 mt-5 sm:text-5xl sm:scroll-show'>
              El Futuro del Desarrollo Digital
            </h2>
            <p className='text-lg leading-8 text-black/70 mt-6 scroll-show'>
             Impulsa tu negocio con plataformas web innovadoras y escalables, creadas por un equipo experto. En nuestra agencia, diseñamos soluciones digitales personalizadas que se adaptan a tus objetivos y crecen contigo. Confía en nosotros para convertir tus ideas en proyectos sólidos y eficientes, listos para el futuro.
            </p>
          </div>
        </div>
        <div className=' mx-auto pt-10 max-w-none lg:pt-15'>
          <div className='grid grid-cols-1 gap-x-10 gap-y-5 max-w-none sm:grid-cols-3'>
            <Services
              title='Landing Page'
              text='Convierte visitantes en clientes con una landing page optimizada para aumentar las conversiones.'
            />
            <Services
              title='E-Commerce'
              text='Aumenta tus ventas con un E-Commerce eficiente, fácil de gestionar y con gran experiencia de compra.'
            />
            <Services
              title='Sistema web'
              text='Accede a tus servicios en cualquier dispositivo con una aplicación web rápida, moderna y adaptativa.'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
