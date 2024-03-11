import { useState, useEffect } from 'react'

export function useHandleSongEnd(audio, currentMusic, setCurrentMusic, setIsPlaying) {
 const [currentSongIndex, setCurrentSongIndex] = useState(currentMusic?.song?.id)

 useEffect(() => {
  setCurrentMusic({ ...currentMusic, song: currentMusic.songs[currentSongIndex] })
 }, [currentSongIndex])

 useEffect(() => {
  const handleSongEnd = () => {
   setCurrentSongIndex(currentMusic?.song?.id)
   if (currentMusic?.song?.id === currentMusic?.songs?.length) {
    setIsPlaying(false)
    setCurrentMusic({playlist: null, songs: [], song: null})
   }
  }

  if (audio.current) {
   audio.current.addEventListener('ended', handleSongEnd)
  }

  return () => {
   if (audio.current) {
    audio.current.removeEventListener('ended', handleSongEnd);
   }
  }
 }, [audio.current, currentMusic])
}