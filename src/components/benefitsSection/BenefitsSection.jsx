import { Button } from '../UI/Button'
import { MainSVG } from '../UI/MainSVG'

const BenefitsSection = () => {
  return (
    <section id='beneficios' className='scroll-mt-[40px]  '>
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        <div className='relative isolate px-6 py-10 md:py-24 text-center sm:px-16 scroll-show'>
          <div className='relative z-20'>

            <h2 className='max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 mx-auto sm:text-5xl'>
              Mejorá tu presencia digital ahora
            </h2>
            <MainSVG />

            <p className='mt-8 text-lg text-zinc-800 max-w-xl mx-auto'>
              En todos nuestros servicios te ofrecemos:
            </p>

            <ul className='text-zinc-900 font-medium flex flex-col text-lg gap-y-2 my-4'>
              <li className='text-left mx-auto w-[320px]'>
                <span className='text-[#df3d33] mr-1'>{'>'}</span> Dominio
                Gratuito por 1 año
              </li>
              <li className='text-left mx-auto w-[320px]'>
                <span className='text-[#df3d33] mr-1'>{'>'}</span> Hosting
                Gratuito por 3 meses
              </li>
              <li className='text-left mx-auto w-[320px]'>
                <span className='text-[#df3d33] mr-1'>{'>'}</span> 1er mes de
                mantenimiento gratuito
              </li>
            </ul>
            <div className='flex items-center justify-center gap-x-6 mt-8'>
              <Button icon={true} buttonStyle='px-4 py-3' label={'Cotizar'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BenefitsSection
