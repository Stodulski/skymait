import { Button } from '../UI/Button'
import { MainSVG } from '../UI/MainSVG'

const BenefitsSection = () => {
  return (
    <section id='beneficios' className='scroll-mt-[40px]  '>
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        <div className='relative isolate px-6 py-2 text-center sm:px-16 scroll-show'>
          <div className='relative z-20'>

            <h2 className='max-w-3xl text-3xl tracking-tight text-left sm:text-center text-black mx-auto sm:text-3xl'>
              Mejorá tu presencia digital ahora
            </h2>
            <div className='flex items-center justify-start sm:justify-center gap-x-6 mt-5'>
              <Button icon={true} buttonStyle='px-4 py-3' label={'Cotizar'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BenefitsSection
