/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Song } from "@lib/data"
import { GET } from "@lib/get-info-playlist.json"
import { usePlayerStore } from "@store/playerStore"
export default function SongInfoTable({ song }: { song: Song }) {
  const { isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore((state: any) => state)
  let { currentMusic } = usePlayerStore((state: any) => state)
  const currentSong = currentMusic?.song?.id === song?.id && currentMusic?.playlist?.id === String(song?.albumId)

  const handleSongClick = async (songId, albumId): Promise<any> => {
    if (currentMusic?.playlist === null) {
      await GET({ params: { id: String(albumId) } })
        .then((res) => res.json())
        .then((data) => {
          const { songs, playlist } = data
          currentMusic = { playlist, song: songs[songId - 1], songs }
          setCurrentMusic({ playlist, song: songs[songId - 1], songs })
          setIsPlaying(true)
        })
        .finally(() => {
          return setCurrentMusic(currentMusic)
        })
    }
    const { songs } = currentMusic
    if (songId !== currentMusic?.song?.id && currentMusic?.playlist !== null && currentMusic?.playlist?.id === String(albumId)) {
      currentMusic = { ...currentMusic, song: songs[songId - 1] }
      await setCurrentMusic({ ...currentMusic, song: songs[songId - 1] })
      if (!isPlaying) setIsPlaying(true)
    }

    if (currentMusic?.playlist?.id !== String(albumId) && songId !== currentMusic?.song?.id) {
      await GET({ params: { id: String(albumId) } })
        .then((res) => res.json())
        .then((data) => {
          const { songs, playlist } = data
          currentMusic = { playlist, song: songs[songId - 1], songs }
          setCurrentMusic({ playlist, song: songs[songId - 1], songs })
          setIsPlaying(true)
        })
        .finally(() => {
          setCurrentMusic(currentMusic)
        })
    }
  }
  return (
    <>
      <tr className="text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300">
        <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">{song.id}</td>
        <td className="px-4 py-2 flex gap-3">
          <picture className="h-12 w-12 flex-none">
            <img src={song.image} alt={`Cover of ${song.title} by ${song.artists.join(', ')}`}
              className="object-cover w-11 h-11" />
          </picture>
          <div className="flex flex-auto flex-col truncate">
            <h3 onClick={() => handleSongClick(song.id, song.albumId)} className={`text-base font-normal text-white hover:underline transition cursor-pointer ${currentSong ? 'text-green-400' : ''}`}>{song.title}</h3>
            <span className="text-xs text-gray-400">{song.artists.join(', ')}</span>
          </div>
        </td>
        <td className="px-4 py-2">{song.album}</td>
        <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">{song.duration}</td>
      </tr>
    </>
  )
}