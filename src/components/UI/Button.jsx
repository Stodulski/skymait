export const Button = ({ icon, label, buttonStyle }) => {
  return (
    <a
      href='https://api.whatsapp.com/send/?phone=%2B541124638281&text=Hola%21+Quiero%20cotizar%20mi%20proyecto&type=phone_number&app_absent=0'
      target='_BLANK'
      className={`
inline-flex items-center cursor-pointer justify-center gap-2 bg-blue-700 font-semibold text-white shadow-sm transition-all duration-300 rounded-xl w-46  hover:bg-[#000000] focus-visible:outline focus-visible:outline-offset-2 ${buttonStyle}`}
    >
      {label}
      {icon && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      )}
    </a>
  )
}
