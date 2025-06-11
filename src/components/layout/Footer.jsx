import { Logo } from '../UI/Logo'
import igLogo from '../../assets/instagram.svg'
const Footer = () => {
  return (
    <footer className='pt-26 pb-5 px-1  bg-gradient-to-t flex justify-center items-center flex-col gap-y-5 from-red-50 via-transparent to-transparent'>
      <a
        href='https://www.instagram.com/skymait/'
        target='_BLANK'
        title='Ir al instagram'
        className='flex flex-col justify-center items-center gap-3 hover:text-red-500'
      >
        <img src={igLogo} alt="Logo de instagram" className='w-12'/>
      </a>
      <p>© 2025 Skyma IT.</p>
    </footer>
  )
}
export default Footer
