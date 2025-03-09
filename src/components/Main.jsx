import React from 'react'
import { Title } from './Title'
import { Button } from './Button'
import { MainSVG } from './MainSVG'
const Main = () => {
  return (
    <main className='relative overflow-hidden bg-gradient-to-b from-red-50 via-transparent to-transparent pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40'>
      <MainSVG />
      <div className='relative z-20 max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center'>
          <div className='text-3xl sm:text-5xl'>
            <Title text='SkymaIT' />
            <p className='text-zinc-800'>
              Innovamos el futuro digital con soluciones personalizadas
            </p>
          </div>
          <div className='flex items-center justify-center gap-x-6 mt-10'>
            <Button icon={true} buttonStyle='px-4 py-3' label={'Contactar'} />
          </div>
        </div>
      </div>
    </main>
  )
}
export default Main