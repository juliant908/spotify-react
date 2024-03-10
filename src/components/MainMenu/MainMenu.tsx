import { playlists } from "@lib/data"
import PlaylistItemCard from "../PlaylistItemCard/PlaylistItemCard"
import Greeting from "../Greeting/Greeting"

export default function MainMenu() {
 return (
  <>
   <div
    id="playlist-container"
    className="relative transition-all duration-1000 bg-green-600"
    >
    {/* <!-- <PageHeader /> --> */}
    <div className="relative z-10 px-6 pt-10">
     <Greeting />
     <div className="flex flex-wrap mt-6 gap-4">
      {playlists.map((playlist) => <PlaylistItemCard key={playlist.id} playlist={playlist} href={`/playlist/${playlist.id}`} />)}
     </div>

     <div
      className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"
     >
     </div>
    </div>
   </div>
  </>
 )
}