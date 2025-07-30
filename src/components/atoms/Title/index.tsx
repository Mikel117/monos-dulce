import styles from './Title.module.scss'

type TitleProps = {
  children: React.ReactNode
}

export default function Title({ children }: TitleProps) {
  return <h1 className={styles.title}>{children}</h1>
}
