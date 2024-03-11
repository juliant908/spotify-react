/* eslint-disable @typescript-eslint/no-explicit-any */
import { Slider } from '../Slider/Slider';
// import { useState, useEffect } from 'react';
import { usePlayerStore } from '../../store/playerStore';
import { useHandleTimeUpdate } from '../../hooks/useHandleTimeUpdate';
import { useHandleSongEnd } from '../../hooks/useHandleSongEnd';

export default function SongControl({ audio }: { audio: any }) {
 const { currentMusic, setCurrentMusic, setIsPlaying } = usePlayerStore((state: any) => state)
 const [currentTime] = useHandleTimeUpdate(audio)
 useHandleSongEnd(audio, currentMusic, setCurrentMusic, setIsPlaying)

 const formatTime = (time: number) => {
  if (time == null) return `0:00`

  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60)

  return `${minutes}:${seconds.toString().padStart(2, '0')}`
 }

 const duration = audio?.current?.duration ?? 0

 return (
  <div className="flex gap-x-3 text-xs pt-2">
   <span className="opacity-50 w-12 text-right">{formatTime(currentTime)}</span>

   <Slider
    value={[currentTime]}
    max={audio?.current?.duration ?? 0}
    min={0}
    className="w-[400px]"
    onValueChange={(value: number[]) => {
     const [newCurrentTime] = value
     audio.current.currentTime = newCurrentTime
    }}
   />

   <span className="opacity-50 w-12">
    {duration ? formatTime(duration) : '0:00'}
   </span>
  </div>
 )
}