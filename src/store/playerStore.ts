import { create } from 'zustand'
import { CurrentMusic } from '@lib/interfaces'
export const usePlayerStore = create((set) => ({
 isPlaying: false,
 currentMusic: { playlist: null, song: null, songs: [] },
 volume: 1,
 setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
 setCurrentMusic: (currentMusic: CurrentMusic) => set({ currentMusic }),
 setVolume: (volume: number) => set({ volume }),
})) 