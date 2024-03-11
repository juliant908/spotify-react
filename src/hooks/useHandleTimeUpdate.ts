import { useState, useEffect } from 'react'

export function useHandleTimeUpdate(audio) {
 const [currentTime, setCurrentTime] = useState(0)
 useEffect(() => {
  audio.current.addEventListener('timeupdate', handleTimeUpdate)

  return () => {
   audio.current.removeEventListener('timeupdate', handleTimeUpdate)
  }
 }, [])
 const handleTimeUpdate = () => {
  setCurrentTime(audio.current.currentTime)
 }

 return [currentTime]
}