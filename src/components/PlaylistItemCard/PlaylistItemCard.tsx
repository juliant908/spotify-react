import { type Playlist } from "@lib/data"
import CardPlayButton from "../CardPlayButton/CardPlayButton"
import { Link } from "react-router-dom"
export default function PlaylistItemCard({ playlist, href }: { playlist: Playlist, href: string }) {
  const artistsString = playlist.artists.join(", ")
  return (
    <>
      <article className="group relative">

        <div className="absolute right-4 bottom-20 translate-y-4 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10 text-black">
          <CardPlayButton id={playlist.id}></CardPlayButton>
        </div>

        <Link to={href}
          className="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden gap-2 pb-6 rounded-md hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-zinc-500/30 w-44 flex-col"
        >
          <picture className="aspect-square h-auto w-full flex-none">
            <img
              src={playlist.cover}
              alt={`Cover of ${playlist.title} by ${artistsString}`}
              className="object-cover w-full h-full rounded-md"
            />
          </picture>
          <div className="flex flex-auto flex-col">
            <h4 className="text-white text-sm">{playlist.title}</h4>
            <span className="text-xs text-gray-400">{artistsString}</span>
          </div>
        </Link>
      </article >
    </>
  )
}