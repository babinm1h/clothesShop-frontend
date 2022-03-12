import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState } from "../../types/cart";
import { ICartProduct } from "../../types/models";
import { addOne, addToCart, deleteCartProduct, getCart, removeOne } from "../actions/cart";

const getTotalPrice = (arr: ICartProduct[]) => arr.reduce((prev, obj) => obj.product.price * obj.quan + prev, 0)


const initialState: ICartState = {
    isLoading: false,
    products: [],
    totalCount: 0,
    totalPrice: 0,
    error: "",
    isAdding: false,
    isRemoving: false
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: {
        [getCart.fulfilled.type]: (state, action: PayloadAction<ICartProduct[]>) => {
            state.products = action.payload
            state.totalCount = action.payload.reduce((prev, obj) => obj.quan + prev, 0)
            state.totalPrice = getTotalPrice(action.payload)
            state.isLoading = false
            state.error = ""
        },
        [getCart.pending.type]: (state) => {
            state.isLoading = true
        },
        [getCart.rejected.type]: (state) => {
            state.isLoading = false
            state.error = "Произошла ошибка :("
        },


        [addToCart.fulfilled.type]: (state, action: PayloadAction<ICartProduct>) => {
            state.isAdding = false
            state.totalCount += action.payload.quan
        },
        [addToCart.pending.type]: (state) => {
            state.isAdding = true
        },
        [addToCart.rejected.type]: (state) => {
            state.isAdding = false
        },


        [addOne.fulfilled.type]: (state, action: PayloadAction<ICartProduct>) => {
            const product = state.products.find(p => p._id === action.payload._id)
            product!.quan += 1

            state.isAdding = false
            state.totalCount += 1
            state.totalPrice += action.payload.product.price
        },
        [addOne.pending.type]: (state) => {
            state.isAdding = true
        },


        [removeOne.pending.type]: (state) => {
            state.isRemoving = true
        },
        [removeOne.fulfilled.type]: (state, action: PayloadAction<ICartProduct>) => {
            const product = state.products.find(p => p._id === action.payload._id)
            product!.quan -= 1

            state.totalPrice -= action.payload.product.price
            state.totalCount -= 1
            state.isRemoving = false
        },


        [deleteCartProduct.fulfilled.type]: (state, action: PayloadAction<ICartProduct>) => {
            state.products = state.products.filter(p => p._id !== action.payload._id)
            state.totalPrice -= action.payload.product.price * action.payload.quan
            state.totalCount -= action.payload.quan
            state.isRemoving = false
        },
        [deleteCartProduct.pending.type]: (state) => {
            state.isRemoving = true
        },
        [deleteCartProduct.rejected.type]: (state) => {
            state.isRemoving = false
        }

    }
})


export default cartSlice.reducer