import { usePlayerStore } from '@store/playerStore.js'
import { useRef } from 'react'
import { Volume, VolumeSilenced } from '@icons/icons'
import { Slider } from '../Slider/Slider'
export default function VolumeControl() {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const { volume, setVolume } = usePlayerStore((state: any) => state)
 const previousVolumeRef = useRef(volume)
 const isVolumeSilenced = volume === 0

 const handleClickVolume = () => {
  if (isVolumeSilenced) {
   setVolume(previousVolumeRef.current)
  } else {
   previousVolumeRef.current = volume
   setVolume(0)
  }
 }

 return (
  <div className="flex justify-center gap-x-2 text-white">
   <button className="opacity-70 hover:opacity-100 transition" onClick={handleClickVolume}>
    {isVolumeSilenced ? <VolumeSilenced /> : <Volume />}
   </button>

   <Slider
    defaultValue={[100]}
    max={100}
    min={0}
    value={[volume * 100]}
    className="w-[95px]"
    onValueChange={(value) => {
     const [newVolume] = value
     const volumeValue = newVolume / 100
     setVolume(volumeValue)
    }}
   />
  </div>
 )
}