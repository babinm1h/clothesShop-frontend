import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartService } from "../../API/cartService";
import { CartActionTypes } from "../../types/cart";


export const getCart = createAsyncThunk(CartActionTypes.GET_CART, async (_, thunkApi) => {
    try {
        const data = await CartService.getAll()
        return data
    } catch (err) {
        return thunkApi.rejectWithValue("Ошибка при получении корзины")
    }
})

export const addToCart = createAsyncThunk(CartActionTypes.ADD_TO_CART,
    async (payload: { selectedColor: string, id: string, quan: number }, thunkApi) => {
        try {
            const data = await CartService.addToCart(payload.id, payload.quan, payload.selectedColor)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Ошибка при получении корзины")
        }
    })


export const addOne = createAsyncThunk(CartActionTypes.ADD_ONE, async (id: string, thunkApi) => {
    try {
        const data = await CartService.addOne(id)
        return data
    } catch (err) {
        return thunkApi.rejectWithValue("Ошибка при получении корзины")
    }
})


export const removeOne = createAsyncThunk(CartActionTypes.REMOVE_ONE, async (id: string, thunkApi) => {
    try {
        const data = await CartService.removeOne(id)
        return data
    } catch (err) {
        return thunkApi.rejectWithValue("Ошибка при получении корзины")
    }
})


export const deleteCartProduct = createAsyncThunk(CartActionTypes.DELETE_PRODUCT,
    async (id: string, thunkApi) => {
        try {
            const data = await CartService.delete(id)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Ошибка при получении корзины")
        }
    })