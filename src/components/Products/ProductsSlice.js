import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);

    return await response.json()
  });

const initialState = {
    products: [],
    status: 'idle',
    error: null,
    cart: [],
    sum: 0
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
         addCart(state, action ){
              const existingItem = state.cart.find((product) => product.id === action.payload.id);

              if(!existingItem){
               const  newItem = {...action.payload, counter: 1};
               state.cart = [...state.cart, newItem];
               
               state.sum += newItem.price;
              }else{
               // Якщо такий товар вже є в корзині то збільшуємо його count на 1 
               state.cart = state.cart.map((order) => order.id === action.payload.id ? { ...order, counter: order.counter + 1 } : order )
               state.sum = state.cart.reduce((acc, next) => acc + next.price * next.counter, 0)
              }
              
         },
         addItemCart(state, action) {
               state.cart = state.cart.map((order) => order.id === action.payload
               ? { ...order, counter: order.counter + 1 }
               : order);
               state.sum = state.cart.reduce((acc, next) => acc + next.price * next.counter, 0)
         },
         removeItemCart(state, action) {
               state.cart = state.cart.map((order) => order.id === action.payload
               ? { ...order, counter: order.counter > 1 ? order.counter - 1 : 0 }
               : order);
               state.cart = state.cart.filter((order) => order.counter > 0);
               state.sum = state.cart.reduce((acc, next) => acc + next.price * next.counter, 0)
         }
    },
    extraReducers:(builder) => {
       builder
         .addCase(fetchProducts.pending, state => {
              state.status = 'loading';
         })
         .addCase(fetchProducts.fulfilled, (state, action) => {
              state.status = 'idle';
              state.products = action.payload
         })
         .addCase(fetchProducts.rejected, (state, action) => {
              state.status = 'error'
              state.error = action.error.message;
         })
         .addDefaultCase(() => {});
    }
})
export const productsList = createSelector(
    state => state.products,
    products => products
)

const {actions, reducer} = productsSlice;

export const { addCart, removeItemCart, addItemCart } = actions;

export default reducer;
