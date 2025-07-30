import { Product } from '@types/product'

import styles from './ProductCard.module.scss'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  )
}
