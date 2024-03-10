import { GET } from "@lib/get-info-playlist.json";

export function getPlaylist(id: string) {
 let playlist = {};
 GET({ params: { id } })
  .then((response) => response.json())
  .then((data) => {
   console.log(data)
   playlist = data.playlist;
  })
 return playlist;
}