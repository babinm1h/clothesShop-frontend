import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../types/models"
import { IProductsState } from "../../types/products"
import { fetchProducts } from "../actions/products"


const initialState: IProductsState = {
    products: [],
    isLoading: false,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<IProduct[]>) {
            state.products = action.payload
        }
    },
    extraReducers: {
        [fetchProducts.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
        }
    }
})


export default productsSlice.reducer
export const { setProducts } = productsSlice.actions