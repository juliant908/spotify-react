import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { type Playlist, playlists, songs } from "@lib/data";
import CardPlayButton from "../CardPlayButton/CardPlayButton";
import MusicTable from "../MusicTable/MusicTable";

export default function AlbumDetails() {
  const [playlist, setPlaylist] = useState({} as Playlist);
  const { id } = useParams();
  const generateArtistsString = (playlist: Playlist) => playlist?.artists?.join(', ');
  const getSongs = playlist.id ? songs.filter((song) => String(song.albumId) === id) : [];
  useEffect(() => {
    const playlist = playlists.find((playlist) => playlist.id === id);
    setPlaylist(playlist as Playlist);
  }, [id]);
  return (
    <>
      <header className="flex flex-row gap-8 px-6">
        <picture className="aspect-square h-52 w-52 flex-none">
          <img src={playlist.cover} alt={`Cover of ${playlist.title} by ${generateArtistsString(playlist)}`}
            className="object-cover w-full h-full rounded-md" />
        </picture>

        <div className="flex flex-col justify-between">
          <h2 className="flex flex-1 items-end">Playlist</h2>
          <div>
            <h1 className="text-5xl font-bold block text-white">
              {playlist.title}
              <span></span>
            </h1>
          </div>

          <div className="flex-1 flex items-end">
            <div className="text-sm text-gray-300 font-normal">
              <div>
                <span>{generateArtistsString(playlist) || ''}</span>
              </div>
              <p className="mt-1">
                <span className="text-white">3 canciones</span>,
                3 h aproximadamente
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="pl-6 pt-6">
        <CardPlayButton id={playlist.id}></CardPlayButton>
    </div >
<div className="relative z-10 px-6 pt-10">
  
</div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-[1]"></div>

<section className="p-4">
  {playlist.id && <MusicTable playlist={playlist} songs={getSongs} />}
</section >
    </>
  );
}