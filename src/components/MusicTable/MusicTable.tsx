import { TimeIcon } from "@icons/icons"
import { type Song, type Playlist } from "@lib/data"
import SongInfoTable from "../SongInfoTable/SongInfoTable"
export default function MusicTable({ songs }: { playlist: Playlist, songs: Song[] }) {
  return (
    <>
      <table className="table-auto text-left w-full divide-y divide-gray-500/50">
        <thead>
          <tr className="text-zinc-400 text-sm font-light">
            <th className="px-4 py-2 font-light">#</th>
            <th className="px-4 py-2 font-light">Title</th>
            <th className="px-4 py-2 font-light">Album</th>
            <th className="px-4 py-2 font-light"><TimeIcon /></th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[16px]"></tr>
          {songs.map((song) => {
            return (
              <SongInfoTable
                key={song.id}
                song={song}
              />
            )
          })}
        </tbody>
      </table >
    </>
  )
}