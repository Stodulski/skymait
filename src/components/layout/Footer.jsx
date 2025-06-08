import { Logo } from '../UI/Logo'
const Footer = () => {
  return (
    <footer className='p-10 bg-gradient-to-t  from-red-50 via-transparent to-transparent'>
      <a href='https://www.instagram.com/skymait/' target='_BLANK' title='Ir al instagram' className='flex items-center justify-center gap-1'>
        <Logo footer={true}/>
      </a>
    </footer>
  )
}
export default Footer