import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://zastore.onrender.com/products";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(API_URL);
      const data = res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (productId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${API_URL}/${productId}`);
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${API_URL}`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json ; charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ item, id }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(item);
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json ; charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
const initialState = {
  products: [],
  product: {},
  loading: false,
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeSelectedProduct: (state) => {
      state.product = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductDetails.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addProduct.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProduct.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProduct.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.map((item) => {
          if (item.id === action.payload.id) {
            item.productName = action.payload.productName;
            item.description = action.payload.description;
            item.shortDesc = action.payload.shortDesc;
            item.price = action.payload.price;
            item.category = action.payload.category;
            item.imgUrl = action.payload.imgUrl;
          }
        });
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { removeSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
