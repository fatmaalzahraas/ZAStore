import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const exisitingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!exisitingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        exisitingItem.quantity++;
        exisitingItem.totalPrice =
          Number(exisitingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (totalSum, item) =>
          totalSum + Number(item.price) * Number(item.quantity),
        0
      );
    },
    deleteProductFromCart: (state, action) => {
      const exisitingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (exisitingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
        state.totalQuantity = state.totalQuantity - exisitingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (totalSum, item) =>
          totalSum + Number(item.price) * Number(item.quantity),
        0
      );
    },
    incrementQuantity: (state, action) => {
      const exisitingItem = state.cartItems.find(item => item.id === action.payload);
      if (exisitingItem) {
        exisitingItem.quantity++;
        state.totalQuantity += 1;
      }
      state.totalAmount = state.cartItems.reduce(
        (totalSum, item) =>
          totalSum + Number(item.price) * Number(item.quantity),
        0
      );
    },
    decrementQuantity: (state, action) => {
      const exisitingItem = state.cartItems.find(item => item.id === action.payload);
      if (exisitingItem?.quantity > 0) {
          exisitingItem.quantity--;
          state.totalQuantity -= 1;
      }
      state.totalAmount = state.cartItems.reduce(
        (totalSum, item) =>
          totalSum + Number(item.price) * Number(item.quantity),
        0
      );
    }
  },
});

export const { addToCart , deleteProductFromCart, incrementQuantity, decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;
