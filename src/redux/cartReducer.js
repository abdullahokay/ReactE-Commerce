import { createSlice } from '@reduxjs/toolkit'

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  products: cartItemsFromStorage,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const item = state.products.find(item => item.id === action.payload.id)
    
        if(item) {
            item.quantity += action.payload.quantity
        }
        else {
            state.products.push(action.payload);
        }

        localStorage.setItem('cartItems', JSON.stringify(state.products))
    },

    removeItem: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload)
      localStorage.setItem('cartItems', JSON.stringify(state.products))
    },

    resetCart: (state) => {
      state.products = []

      localStorage.setItem('cartItems', JSON.stringify(state.products))
    },

    decrementProduct: (state, action) => {
      const item = state.products.find(item => item.id === action.payload);
  
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        state.products = state.products.filter(item => item.id !== action.payload);
      }
  
      localStorage.setItem('cartItems', JSON.stringify(state.products));
    },
  },
})

export const { addToCart, removeItem, resetCart, decrementProduct } = cartSlice.actions

export default cartSlice.reducer
