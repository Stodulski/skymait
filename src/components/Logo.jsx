import logo from '../assets/logo.png'

export const Logo = ({ footer }) => {
  return (
    <img
      src={logo}
      loading={`${footer ? 'lazy' : 'eager'}`}
      alt='Logo de Skyma IT'
      className='w-12 sm:w-15 '
    />
  )
}
