import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],
    singleProduct: {},
    cartItems: [],
    favList: [],
    totalPrice: 0
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
  setTotal
} = productSlice.actions;

export default productSlice.reducer;
