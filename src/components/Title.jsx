import React, { useState, useEffect, useRef } from 'react'

export const Title = ({ text, speed = 200, delay = 500 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500) 

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          if (displayedText.length > 0) {
            setDisplayedText(text.slice(0, displayedText.length - 1))
          } else {
            setIsDeleting(false)
          }
        } else {
          if (displayedText.length < text.length) {
            setDisplayedText(text.slice(0, displayedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), delay)
          }
        }
      },
      isDeleting ? speed / 2 : speed
    )
    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, text, speed, delay])

  return (
    <div className='flex justify-center'>
      <h1 className='text-[#df3d33] will-change-auto text-5xl sm:text-6xl mb-5 font-bold tracking-tight h-[1em] whitespace-pre'>
        {displayedText}
      </h1>
      <span className='text-zinc-800 will-change-auto'>{showCursor ? '|' : ' '}</span>
    </div>
  )
}
