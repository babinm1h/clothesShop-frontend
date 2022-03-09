import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import productPageSlice from "./slices/productPageSlice";
import productsSlice from "./slices/productsSlice";


export const rootReducer = combineReducers({
    products: productsSlice,
    productPage: productPageSlice,
    auth: authSlice
})


export const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof rootReducer>