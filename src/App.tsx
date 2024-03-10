// import { useState } from 'react'
import './App.css'
import AsideMenu from './components/asideMenu/AsideMenu'
import Player from './components/Player/Player'
import { playlists } from './lib/data'
import CustomRoutes from './routes'
function App() {

  return (
    <>
      <div id="app" className="relative h-screen p-2 gap-2">
        <aside className="[grid-area:aside] flex-col flex overflow-y-auto">
          <AsideMenu playlists={playlists}/>
        </aside>

        <main
          className="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto w-full"
        >
          <CustomRoutes />
        </main>

        <footer className="[grid-area:player] h-[80px]">
          <Player />
        </footer>
      </div>
    </>
  )
}

export default App
