import { type Playlist, type Song } from "@lib/data"

export interface PlayerStore {
 volume: number
 setVolume: (volume: number) => void
 isPlaying: boolean
 setIsPlaying: (isPlaying: boolean) => void
 currentMusic: {
  playlist: Playlist,
  song: Song,
  songs: Song[]
 }
}

export interface CurrentMusic {
 playlist: Playlist | null
 song: Song | null
 songs: Song[]
}