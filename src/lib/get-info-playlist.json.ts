import { allPlaylists, songs as allSongs } from "@lib/data.ts";

export async function GET({ params }: { params: { id: string }} ) {
 // get the id from the url search params
 // const { url } = request
 // const urlObject = new URL(url)
 // const id = urlObject.searchParams.get('id')
 const { id } = params
 const playlist = allPlaylists.find((playlist) => playlist.id === id)
 const songs = allSongs.filter(song => song.albumId === playlist?.albumId)

 return new Response(JSON.stringify({ playlist, songs }), {
  headers: { "content-type": "application/json" },
 })
}