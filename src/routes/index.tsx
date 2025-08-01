import { createBrowserRouter } from 'react-router-dom'
import Layout from '@templates/Layout'
import HomePage from '@pages/HomePage'
import CatalogPage from '@pages/CatalogPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'products', element: <CatalogPage /> },
    ]
  }
])
