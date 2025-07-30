import { useEffect } from 'react';
import HomeTemplate from '../templates/HomeTemplate'

export default function HomePage() {
  useEffect(() => {
        document.title = "Moños Dulce - Bienvenido";
      }, []);
  return <HomeTemplate />
}
