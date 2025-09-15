import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.items.find(item => item.id === id)
      
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id)
        } else {
          item.quantity = quantity
        }
      }
    },
    
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectCartTotalQuantity = (state) => 
  state.cart.items.reduce((total, item) => total + item.quantity, 0)
export const selectCartTotalAmount = (state) => 
  state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0)

export default cartSlice.reducer
