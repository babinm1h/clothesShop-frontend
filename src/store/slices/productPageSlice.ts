import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/models";
import { IProductPageState } from "../../types/productPage";
import { fetchOneProduct } from "../actions/productPage";


const initialState: IProductPageState = {
    product: {} as IProduct,
    isLoading: false,
    color: "",
    size: "",
    quan: 1,
}


const productPageSlice = createSlice({
    name: "productPage",
    initialState,
    reducers: {
        setColor(state, action: PayloadAction<string>) {
            state.color = action.payload
        },
        setSize(state, action: PayloadAction<string>) {
            state.size = action.payload
        },
        incrQuan(state) {
            state.quan += 1
        },
        decrQuan(state) {
            state.quan -= 1
        },
        setQuan(state, action: PayloadAction<number>) {
            state.quan = action.payload
        }
    },
    extraReducers: {
        [fetchOneProduct.fulfilled.type]: (state, action: PayloadAction<IProduct>) => {
            state.product = action.payload
            state.isLoading = false
            state.color = action.payload.color[0]
            state.size = action.payload.size[0]
        },
        [fetchOneProduct.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchOneProduct.rejected.type]: (state) => {
            state.isLoading = false
        },
    }
})


export default productPageSlice.reducer

export const { setColor, setSize, decrQuan, incrQuan, setQuan } = productPageSlice.actions
