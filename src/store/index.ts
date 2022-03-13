import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import ordersSlice from "./slices/ordersSlice";
import productPageSlice from "./slices/productPageSlice";
import productsSlice from "./slices/productsSlice";


export const rootReducer = combineReducers({
    products: productsSlice,
    productPage: productPageSlice,
    auth: authSlice,
    cart: cartSlice,
    orders: ordersSlice
})


export const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof rootReducer>