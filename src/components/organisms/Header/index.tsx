import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import logo from '@assets/images/logo_blanco.png'


export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <img src={logo} alt="Logo Moños Dulce" className="logo" />
        <Link to="/">
          <FontAwesomeIcon icon={faGift} /> Inicio
        </Link>
        <Link to="/products">Productos</Link>
      </nav>
    </header>
  )
}
