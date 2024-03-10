import CurrentSong from "../CurrentSong/CurrentSong"
import { PauseIcon, PlayIcon } from "@icons/icons"
import VolumeControl from "../VolumeControl/VolumeControl"
import { usePlayerStore } from "@store/playerStore"
import { useEffect, useRef } from "react"
import SongControl from "../SongControl/SongControl"
import styles from './Player.module.css'
export default function Player() {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const { currentMusic, isPlaying, setIsPlaying, volume } = usePlayerStore((state: any) => state)
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
 return (
  <div className="flex flex-row justify-between w-full px-1 z-50">
   <div className="w-[200px]">
    <CurrentSong {...currentMusic.song} />
   </div>

   <div className="grid place-content-center gap-4 flex-1">
    <div className="flex justify-center flex-col items-center">
     <button className={`bg-white rounded-full p-2 text-zinc-800 ${noMusic ? styles.disabled : ''} `} onClick={handleClick}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
     </button>
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