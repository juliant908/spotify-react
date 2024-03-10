import { type Playlist } from "@lib/data"
import { Link } from "react-router-dom"
export default function SideMenuCard({href, playlist, artistsString}: {href: string, playlist: Playlist, artistsString: string}) {
 return (<Link
  to={href}
  className="playlist-item flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-zinc-800"
 >
  <picture className="h-12 w-12 flex-none">
   <img
    src={playlist.cover}
    alt="Cover of {{playlist.title}} by {{artistsString}}"
    className="object-cover w-full h-full rounded-md" />
  </picture>
  <div className="flex flex-auto flex-col truncate">
   <h4 className="text-white text-sm">{ playlist.title }</h4>
   <span className="text-xs text-gray-400">{ artistsString }</span>
  </div>
 </Link>)
}