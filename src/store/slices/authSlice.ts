import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { action } from "mobx"
import { IAuthState } from "../../types/auth"
import { IUser } from "../../types/models"
import { checkAuth, login, registration } from "../actions/auth"


const initialState: IAuthState = {
    user: null,
    isLoading: true,
    error: ""
}



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state,) {
            localStorage.removeItem("token")
            state.user = null
            state.error = ""
            state.isLoading = false
        }
    },
    extraReducers: {
        [registration.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.error = ""
            state.isLoading = false
        },
        [registration.pending.type]: (state,) => {
            state.isLoading = true
        },
        [registration.rejected.type]: (state) => {
            state.error = "User with this email already exist"
            state.isLoading = false
        },


        [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isLoading = false
            state.error = ""
        },
        [login.pending.type]: (state,) => {
            state.isLoading = true
        },
        [login.rejected.type]: (state) => {
            state.error = "Wrong email or password"
            state.isLoading = false
        },


        [checkAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.error = ""
            state.isLoading = false
        },
        [checkAuth.pending.type]: (state) => {
            state.isLoading = true
        },
        [checkAuth.rejected.type]: (state) => {
            state.isLoading = false
            state.user = null
        }
    }
})

export const { logout } = authSlice.actions

export default authSlice.reducer
