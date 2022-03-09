import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsService } from "../../API/productsService";
import { ProductsActionTypes } from "../../types/products";



export const fetchProducts = createAsyncThunk(ProductsActionTypes.FETCH_PRODUCTS,
    async (payload: { color?: string, category?: string }, thunkApi) => {
        try {
            const data = await ProductsService.fetchProducts(payload.color, payload.category)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue("Произошла ошибка")
        }
    })

