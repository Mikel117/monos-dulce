import { useEffect } from 'react';
import CatalogTemplate from '../templates/CatalogTemplate'

export default function CatalogPage() {
  useEffect(() => {
      document.title = "Moños Dulce - Productos";
    }, []);
  return <CatalogTemplate />
}
