import medusaLogo from '../../assets/medusa.svg'
import nodejsLogo from '../../assets/nodejs.svg'
import nextLogo from '../../assets/next.svg'
export const TechSection = () => {
  return (
    <section className='max-w-7xl mt-26 mx-auto px-6  sm:px-6 lg:px-8 flex flex-col justify-center items-center'>
      <h3 className='text-4xl sm:text-5xl font-bold scroll-show'>
        Tecnología profesional para resultados reales
      </h3>

      <div className=''>
        <p className='mt-6 mb-10 text-lg leading-8 mx-auto sm:text-center max-w-2xl text-black/70 scroll-show'>
          Utilizamos tecnologías modernas y seguras: Node.js, Medusa.js y Next.js, garantizan velocidad, estabilidad y flexibilidad. Te entregamos una solución confiable, escalable y lista para integrarse con múltiples servicios, ofreciendo desde el primer día una experiencia de usuario excepcional.
        </p>

        <ul className='flex gap-x-10 my-5 justify-between items-center '>
          <li className='flex flex-col justify-center items-center gap-y-3 w-[100%] scroll-show'>
            <img src={nodejsLogo} alt='' className='w-20 h-20' />
          </li>
          <li className='flex flex-col justify-center items-center gap-y-3 w-[100%] scroll-show'>
            <img src={nextLogo} alt='' className='w-20 h-20' />
          </li>
          <li className='flex flex-col justify-center items-center gap-y-3 w-[100%] scroll-show'>
            <img src={medusaLogo} alt='' className='w-20 h-20' />
          </li>
        </ul>
      </div>
    </section>
  )
}
