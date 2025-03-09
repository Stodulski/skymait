import logo from '../assets/skymaitLogo.webp'

export const Logo = ({ footer }) => {
  return (
    <img
      src={logo}
      loading={`${footer ? 'lazy' : 'eager'}`}
      alt='Logo de Skyma.dev'
      className='w-12 sm:w-15 '
    />
  )
}
