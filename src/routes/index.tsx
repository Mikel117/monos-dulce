import { Routes, Route } from 'react-router-dom'
import HomePage from '../components/pages/HomePage'
import CatalogPage from '../components/pages/CatalogPage'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  )
}
