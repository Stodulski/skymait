import { Logo } from '../UI/Logo'
const Footer = () => {
  return (
    <footer className='p-5'>
      <a href='https://www.instagram.com/skymait/' target='_BLANK' title='Ir al instagram' className='flex items-center justify-center gap-1'>
        <Logo footer={true}/>
      </a>
    </footer>
  )
}
export default Footer