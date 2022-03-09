import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../API/authService";
import { AuthActionTypes } from "../../types/auth";



export const registration = createAsyncThunk(AuthActionTypes.REGISTRATION,
    async (payload: { email: string, password: string }, thunkApi) => {
        try {
            const data = await AuthService.register(payload.email, payload.password)
            return data

        } catch (err) {
            thunkApi.rejectWithValue("Ошибка при регистрации")
        }
    })


export const login = createAsyncThunk(AuthActionTypes.LOGIN,
    async (payload: { email: string, password: string }, thunkApi) => {
        try {
            const data = await AuthService.login(payload.email, payload.password)
            return data

        } catch (err) {
            thunkApi.rejectWithValue("Ошибка при регистрации")
        }
    })


export const checkAuth = createAsyncThunk(AuthActionTypes.CHECK,
    async (_, thunkApi) => {
        try {
            const data = await AuthService.check()
            return data

        } catch (err) {
            thunkApi.rejectWithValue("Ошибка при регистрации")
        }
    })

