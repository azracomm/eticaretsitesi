import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectFilteredProducts, selectSearchTerm } from '../redux/slices/productsSlice'
import ProductCard from './ProductCard'
import '../css/products.css'

const ProductList = React.memo(() => {
  const products = useSelector(selectFilteredProducts)
  const searchTerm = useSelector(selectSearchTerm)

  // Memoized product list
  const productList = useMemo(() => {
    return products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))
  }, [products])

  return (
    <div className="product-list-container">
      <h2 className="section-title">
        {searchTerm ? `"${searchTerm}" için arama sonuçları` : 'Ürünlerimiz'}
      </h2>
      {searchTerm && (
        <p className="search-info">
          {products.length} ürün bulundu
        </p>
      )}
      <div className="product-grid">
        {products.length > 0 ? (
          productList
        ) : (
          <div className="no-results">
            <p>Aradığınız kriterlere uygun ürün bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  )
})

ProductList.displayName = 'ProductList'

export default ProductList
