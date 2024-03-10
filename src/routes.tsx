// import App from './App'
import MainMenu from './components/MainMenu/MainMenu'
import AlbumDetails from './components/AlbumDetails/AlbumDetails'
import { Routes, Route } from 'react-router-dom'

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/playlist/:id" element={<AlbumDetails />} />
    </Routes>
  )
}