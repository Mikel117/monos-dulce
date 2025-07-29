import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/catalog">Catálogo</Link>
      </nav>
    </header>
  )
}
