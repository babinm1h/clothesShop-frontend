import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrdersService } from "../../API/ordersService";
import { OrderActionTypes } from "../../types/orders";



export const createOrder = createAsyncThunk(OrderActionTypes.CREATE,
    async (payload: { amount: number, products: string[], address: Object }, thunkApi) => {
        try {
            const data = await OrdersService.create(payload.amount, payload.products, payload.address)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Error when creating an order")
        }
    })



export const fetchOrders = createAsyncThunk(OrderActionTypes.FETCH_ORDERS,
    async (_, thunkApi) => {
        try {
            const data = await OrdersService.fetchOrders()
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Orders error")
        }
    })

export const deleteOrder = createAsyncThunk(OrderActionTypes.DELETE,
    async (id: string, thunkApi) => {
        try {
            const data = await OrdersService.delete(id)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Orders error")
        }
    })