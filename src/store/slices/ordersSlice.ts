import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../types/models";
import { IOrdersState } from "../../types/orders";
import { deleteOrder, fetchOrders } from "../actions/orders";



const initialState: IOrdersState = {
    orders: [],
    isLoading: false,
    isRemoving: false
}


const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchOrders.fulfilled.type]: (state, action: PayloadAction<IOrder[]>) => {
            state.orders = action.payload
            state.isLoading = false
        },

        [fetchOrders.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchOrders.rejected.type]: (state) => {
            state.isLoading = false
        },

        [deleteOrder.fulfilled.type]: (state, action: PayloadAction<IOrder>) => {
            state.orders = state.orders.filter(o => o._id !== action.payload._id)
            state.isRemoving = false
        },
        [deleteOrder.pending.type]: (state) => {
            state.isRemoving = true
        },
        [deleteOrder.rejected.type]: (state, action: PayloadAction<IOrder>) => {
            state.isRemoving = false
        },

    }
})


export default ordersSlice.reducer