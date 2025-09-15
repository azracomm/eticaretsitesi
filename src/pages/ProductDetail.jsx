import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import '../css/product-detail.css'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products)
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Ürün bulunamadı</h2>
        <button onClick={() => navigate('/')} className="btn-back">
          Ana Sayfaya Dön
        </button>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product))
    }
    setQuantity(1)
  }

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate('/')} className="btn-back">
        ← Geri Dön
      </button>
      
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-category">{product.category}</p>
          <p className="product-detail-description">{product.description}</p>
          
          <div className="product-detail-price">
            ₺{product.price.toLocaleString()}
          </div>
          
          <div className="product-detail-stock">
            Stok: {product.stock} adet
          </div>
          
          <div className="product-detail-actions">
            <div className="quantity-selector">
              <button 
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
                className="btn-quantity"
              >
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= product.stock}
                className="btn-quantity"
              >
                +
              </button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="btn-add-cart-large"
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
