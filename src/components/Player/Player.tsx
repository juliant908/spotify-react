import CurrentSong from "../CurrentSong/CurrentSong"
import { BackwardIcon, ForwardIcon, PauseIcon, PlayIcon } from "@icons/icons"
import VolumeControl from "../VolumeControl/VolumeControl"
import { usePlayerStore } from "@store/playerStore"
import { useEffect, useRef } from "react"
import SongControl from "../SongControl/SongControl"
import styles from './Player.module.css'
export default function Player() {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const { currentMusic, isPlaying, setIsPlaying, volume, setCurrentMusic } = usePlayerStore((state: any) => state)
 const audioRef = useRef<HTMLAudioElement>({} as HTMLAudioElement)
 const noMusic = currentMusic?.playlist === null
 useEffect(() => {
  isPlaying ? audioRef.current.play() : audioRef.current.pause()
 }, [isPlaying])

 useEffect(() => {
  audioRef.current.volume = volume
 }, [volume])
 
 useEffect(() => {
  const { song, playlist } = currentMusic
  if (song){
   const src = `/music/${playlist.id}/0${song.id}.mp3`
   audioRef.current.src = src
   audioRef.current.volume = volume
   audioRef.current.play()
  }
 }, [currentMusic])

 const handleClick = () => {
  setIsPlaying(!isPlaying)
 }

 const handlePrevSong = () => {
  if(audioRef.current.currentTime > 2){
  setCurrentMusic({...currentMusic, song: currentMusic.songs[currentMusic.songs.indexOf(currentMusic.song)]})
  } else {
   setCurrentMusic({ ...currentMusic, song: currentMusic.songs[currentMusic.songs.indexOf(currentMusic.song) - 1] })
  }
  if(currentMusic.songs.indexOf(currentMusic.song) === 0){
   setCurrentMusic({ ...currentMusic })
  }
  if (!isPlaying) {
   setIsPlaying(true)
  }
 }
 const handleNextSong = () => {
  setCurrentMusic({...currentMusic, song: currentMusic.songs[currentMusic.songs.indexOf(currentMusic.song) + 1]})
  if(!isPlaying){
   setIsPlaying(true)
  }
 }
 return (
  <div className="flex flex-row justify-between w-full px-1 z-50">
   <div className="w-[200px]">
    <CurrentSong {...currentMusic.song} />
   </div>

   <div className="grid place-content-center gap-4 flex-1">
    <div className="flex justify-center flex-col items-center">
     <div className="flex items-center gap-6">
      <button className={`text-zinc-400 hover:text-white transition size-4 ${noMusic ? styles.disabled : ''}`} onClick={handlePrevSong}>
       <BackwardIcon />
      </button>
      <button className={`bg-white rounded-full p-2 text-zinc-800 ${noMusic ? styles.disabled : ''} `} onClick={handleClick}>
       {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <button className={`text-zinc-400 hover:text-white transition size-4  ${noMusic || (currentMusic?.song?.id === currentMusic?.songs?.length) ? styles.disabled : ''}`} onClick={handleNextSong}>
       <ForwardIcon />
      </button>
     </div>
     <SongControl audio={audioRef} />
     <audio ref={audioRef} />
    </div>
   </div>
   <div className="grid place-content-center">
    <VolumeControl />
   </div>
  </div>
 )
}