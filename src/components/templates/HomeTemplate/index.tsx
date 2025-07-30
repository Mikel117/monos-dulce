import Header from '../../organisms/Header'
import Title from '../../atoms/Title'
import { Link } from 'react-router-dom'

export default function HomeTemplate() {
  return (
    <>
      <Header />
      <main>
        <Title>¡Bienvenido a Monos Dulce!</Title>
        <Link to="/catalog">Descubre nuestros productos</Link>
      </main>
    </>
  )
}
