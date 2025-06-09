import { Logo } from '../UI/Logo'
import igLogo from '../../assets/instagram.svg'
const Footer = () => {
  return (
    <footer className='p-10 bg-gradient-to-t flex justify-center items-center flex-col gap-y-10 from-red-50 via-transparent to-transparent'>
      <a
        href='https://www.instagram.com/skymait/'
        target='_BLANK'
        title='Ir al instagram'
      >
        <img src={igLogo} alt="Logo de instagram" className='w-16'/>
      </a>
      <Logo footer={true} />
    </footer>
  )
}
export default Footer
