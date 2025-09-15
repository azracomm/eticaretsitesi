import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import { Link } from 'react-router-dom'

const ProductCard = React.memo(({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(product))
  }, [dispatch, product])

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-price">₺{product.price.toLocaleString()}</div>
        <div className="product-stock">Stok: {product.stock} adet</div>
        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="btn-detail">
            Detayları Gör
          </Link>
          <button 
            className="btn-add-cart" 
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  )
})

ProductCard.displayName = 'ProductCard'

export default ProductCard
