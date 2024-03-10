import SideMenuItem from "./SideMenuItem/SideMenuItem"
import SideMenuCard from "./SideMenuCard/SideMenuCard"
import { type Playlist } from "@lib/data"

export default function AsideMenu({ playlists }: { playlists: Playlist[] }) {
  return (
    <>
      <nav className="flex flex-col flex-1 gap-2 overflow-y-auto">
        <div className="bg-zinc-900 rounded-lg p-2">
          <ul>
            <SideMenuItem href="/" icon="home" slot="Home"></SideMenuItem>
            <SideMenuItem href="/#" icon="search" slot="Search"></SideMenuItem>
          </ul>
        </div>
        <div className="bg-zinc-900 rounded-lg p-2 flex-1">
          <ul>
            <SideMenuItem href="/#" icon="library" slot="Library"></SideMenuItem>
            {playlists.map(playlist => {
              return (
                <SideMenuCard
                  key={playlist.id}
                  href={`/playlist/${playlist.id}`}
                  playlist={playlist}
                  artistsString={playlist.artists.join(", ")}
                />
              )
            })}
        </ul>
      </div>
    </nav >
    </>
  )
}