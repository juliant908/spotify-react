import { PauseIcon, PlayIcon } from '@icons/icons'
import { usePlayerStore } from '@store/playerStore'
import { GET } from '@lib/get-info-playlist.json'
export default function CardPlayButton({ id }: { id: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying } = usePlayerStore((state: any) => state)
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id
  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false)
      return
    }

    if(currentMusic?.playlist !== null && !isPlaying){
      setIsPlaying(true)
      return
    } 

    GET({ params: { id } })
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data
        setIsPlaying(true)
        setCurrentMusic({ playlist, song: songs[0], songs })
      })
      .catch((error) => console.error('Error:', error))
    
  }

  return (
    <>
      <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-3 hover:scale-105 transition hover:bg-green-400 text-black">
        {isPlayingPlaylist ? <PauseIcon /> : <PlayIcon />}
      </button >
    </>
  )
}