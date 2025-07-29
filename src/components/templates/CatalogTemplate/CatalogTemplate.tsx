import Header from '../../organisms/Header/Header'
import Title from '../../atoms/Title/Title'
import ProductCard from '../../molecules/ProductCard/ProductCard'
import { products } from '../../../data/products'
import styles from './CatalogTemplate.module.scss'

export default function CatalogTemplate() {
  return (
    <>
      <Header />
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
