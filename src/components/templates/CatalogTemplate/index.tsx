import Title from '@atoms/Title'
import { products } from '../../../data/products'
import styles from './CatalogTemplate.module.scss'
import ProductCard from '@molecules/ProductCard'

export default function CatalogTemplate() {
  return (
    <>
      <main>
        <Title>Catálogo de productos</Title>
        <div className={styles.grid}>
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </>
  )
}
