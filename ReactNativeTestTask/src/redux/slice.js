import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],
    singleProduct: {},
    cartItems: [],
    favList: [],
    totalPrice: 0,
    buyNow: {}
  },
  reducers: {
    setAllProduct(state, action) {
      state.allProducts = action.payload;
    },

    setSingleProduct(state, action) {
      state.singleProduct = action.payload;
    },

    addtoCart(state, action) {
      let all = [...state.cartItems];
      all.push({ ...action.payload, quantity: 1 });
      state.cartItems = all;
    },

    addtoFav(state, action) {
      let all = [...state.favList];
      all.push({ ...action.payload });
      state.favList = all;
    },

    removeFromFav(state, action) {
      let all = [...state.favList];
      all.splice(action.payload, 1);
      state.favList = all;
    },

    addQuantity(state, action) {
      let all = [...state.cartItems];
      all[action.payload].quantity += 1;
      state.cartItems = all;
    },

    minusQuantity(state, action) {
      let all = [...state.cartItems];
      if (all[action.payload].quantity === 1) {
        all.splice(action.payload, 1);
      } else {
        all[action.payload].quantity -= 1;
      }
      state.cartItems = all;
    },

    setTotal(state,action){
      state.totalPrice = action.payload
    },

    setBuyNow(state,action){
      state.buyNow = {...action.payload}
    },

    addQuantityBN(state,action){
      state.buyNow = {...state.buyNow, quantity: state.buyNow.quantity+1}
    },

    minusQuantityBN(state,action){
      if(state.buyNow.quantity === 1){
        state.buyNow = {}
      }else{
        state.buyNow = {...state.buyNow, quantity: state.buyNow.quantity-1}
      }
    }
  },
});

export const {
  setAllProduct,
  setSingleProduct,
  addtoCart,
  addQuantity,
  minusQuantity,
  addtoFav,
  removeFromFav,
  setTotal,
  setBuyNow,
  addQuantityBN,
  minusQuantityBN
} = productSlice.actions;

export default productSlice.reducer;
