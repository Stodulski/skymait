import React from 'react'
import { ServicesSectionSVG } from './ServicesSectionSVG'
export const Services = ({ title, text }) => {
  return (
    <div className='flex flex-col services px-5 py-10 rounded-3xl scroll-show'>
      <h3 className='flex items-center justify-center gap-x-3 text-xl font-semibold leading-7 text-gray-900'>
        <ServicesSectionSVG />
        {title}
      </h3>
      <div className='flex flex-auto text-center flex-col text-base leading-7 text-gray-600 mt-4'>
        <p>{text}</p>
      </div>
    </div>
  )
}
