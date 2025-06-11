import { Logo } from '../UI/Logo'
export const Nav = () => {
  return (
    <nav className='fixed z-30 w-full max-w-screen-md sm:bg-white/50 sm:shadow backdrop-blur-xs inset-x-0 top-0 mx-auto py-2 md:top-6 md:rounded-3xl lg:max-w-screen-lg'>
      <div className='px-4'>
        <div className='flex items-center justify-between'>
          <div className='flex shrink-0'>
            <a
              href='https://www.instagram.com/skymait/'
              title='Ir al instagram'
              target='_BLANK'
              className=' flex items-center gap-1'
            >
              <Logo />
            </a>
          </div>
          <div className='flex items-center justify-end sm:gap-3'>
            <a className='cursor-pointer sm:inline-block text-sm text-white transition-all duration-200 hover:bg-black rounded-lg px-5 py-3 font-semibold  bg-red-500'>
              Contactar
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
