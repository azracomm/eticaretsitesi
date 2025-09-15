import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity, clearCart, selectCartItems, selectCartTotalQuantity, selectCartTotalAmount } from '../redux/slices/cartSlice'
import { BsBasket, BsTrash, BsPlus, BsDash } from 'react-icons/bs'
import '../css/cart.css'

function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  const items = useSelector(selectCartItems)
  const totalQuantity = useSelector(selectCartTotalQuantity)
  const totalAmount = useSelector(selectCartTotalAmount)
  const dispatch = useDispatch()

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }))
  }

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="cart-container">
      <button 
        className="cart-toggle" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsBasket className="cart-icon" />
        <span className="cart-count">{totalQuantity}</span>
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>Sepetim ({totalQuantity} ürün)</h3>
            <button 
              className="btn-clear" 
              onClick={handleClearCart}
              disabled={items.length === 0}
            >
              Sepeti Temizle
            </button>
          </div>

          {items.length === 0 ? (
            <div className="cart-empty">
              <p>Sepetiniz boş</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p>₺{item.price.toLocaleString()}</p>
                    </div>
                    <div className="cart-item-controls">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="btn-quantity"
                      >
                        <BsDash />
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="btn-quantity"
                      >
                        <BsPlus />
                      </button>
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="btn-remove"
                      >
                        <BsTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Toplam: ₺{totalAmount.toLocaleString()}</strong>
                </div>
                <button className="btn-checkout">
                  Satın Al
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Cart
