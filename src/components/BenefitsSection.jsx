import React from 'react'
import { Button } from './Button'
import { MainSVG } from './MainSVG'

const BenefitsSection = () => {
  return (
    <section
      id='beneficios'
      className='scroll-mt-[40px] bg-gradient-to-t from-red-50 via-transparent to-transparent '
    >
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        <div className='relative isolate px-6 overflow-hidden py-10 md:py-24 text-center sm:px-16 scroll-show'>
          <div className='relative z-20'>
            <h2 className='max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 mx-auto sm:text-5xl'>
              Mejorá tu presencia digital ahora
            </h2>
            <p className='mt-8 text-lg text-zinc-800 max-w-xl mx-auto'>
              En todos nuestros servicios te ofrecemos:
            </p>
            <ul className='text-zinc-900 font-semibold flex flex-col text-lg gap-y-2 my-4'>
              <li>
                <span className='text-[#df3d33] mr-1'>{'>'}</span> Dominio
                Gratuito por 1 año
              </li>
              <li>
                <span className='text-[#df3d33] mr-1'>{'>'}</span> Hosting
                Gratuito por 3 meses
              </li>
              <li>
                <span className='text-[#df3d33] mr-1'>{'>'}</span> 1er mes de
                mantenimiento gratuito
              </li>
            </ul>
            <p className='text-lg text-zinc-800 max-w-xl mx-auto'>
              Todo para que tu página web esté siempre optimizada y lista para
              crecer.
            </p>
            <div className='flex items-center justify-center gap-x-6 mt-8'>
              <Button icon={true} buttonStyle='px-4 py-3' label={'Cotizar'} />
            </div>
          </div>
          <MainSVG />
        </div>
      </div>
    </section>
  )
}
export default BenefitsSection