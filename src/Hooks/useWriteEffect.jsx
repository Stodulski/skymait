import { useEffect, useState } from "react";

export const useWriteEffect = (text, speed, delay) => {
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

  return { displayedText, showCursor }
}
