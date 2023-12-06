import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../components/Products/ProductsSlice'

const store = configureStore({
    reducer: rootReducer
})
export default store