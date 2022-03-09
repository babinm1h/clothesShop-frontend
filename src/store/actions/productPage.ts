import { createAsyncThunk } from "@reduxjs/toolkit"
import { ProductsService } from "../../API/productsService"
import { ProductPageActionTypes } from "../../types/productPage"




export const fetchOneProduct = createAsyncThunk(ProductPageActionTypes.FETCH_PRODUCT,
    async (id: string, thunkApi) => {
        try {
            const data = await ProductsService.fetchOne(id)
            return data
        } catch (err) {
            thunkApi.rejectWithValue("Произошла ошибка")
        }
    })

