import { useWriteEffect } from "../../Hooks/useWriteEffect"
export const Title = ({ text, speed = 200, delay = 500 }) => {
  const { displayedText, showCursor } = useWriteEffect(text, speed, delay)
  return (
    <div className='flex justify-center'>
      <h1 className='text-[#df3d33] will-change-auto text-5xl sm:text-6xl mb-5 font-bold tracking-tight h-[1em] whitespace-pre'>
        {displayedText}
      </h1>
      <span className='text-zinc-800 will-change-auto'>{showCursor ? '|' : ' '}</span>
    </div>
  )
}
