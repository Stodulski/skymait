import React from 'react'
import { Logo } from './Logo'
import { Button } from './Button'
export const Nav = () => {
  return (
    <nav className='fixed z-30 w-full max-w-screen-md bg-white/80 shadow backdrop-blur-lg inset-x-0 top-0 mx-auto py-2 md:top-6 md:rounded-3xl lg:max-w-screen-lg'>
      <div className='px-4'>
        <div className='flex items-center justify-between'>
          <div className='flex shrink-0'>
            <a href='https://www.instagram.com/skymait/' title='Ir al instagram' target='_BLANK' className=' flex items-center gap-1'>
              <Logo />
            </a>
          </div>
          <div className='flex items-center justify-end sm:gap-3'>
            <a
              href='#servicios'
              className='cursor-pointer sm:inline-block text-sm font-semibold text-gray-800 transition-all duration-200 rounded-lg px-2 py-1  hover:text-[#df3d33]'
            >
              Servicios
            </a>
            <a
              href='#beneficios'
              className='cursor-pointer sm:inline-block text-sm font-semibold text-gray-800 transition-all duration-200 rounded-lg px-2 py-1  hover:text-[#df3d33]'
            >
              Beneficios
            </a>

          </div>
        </div>
      </div>
    </nav>
  )
}
