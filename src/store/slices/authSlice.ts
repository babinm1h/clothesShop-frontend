import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IAuthState } from "../../types/auth"
import { IUser } from "../../types/models"
import { checkAuth, login, registration } from "../actions/auth"


const initialState: IAuthState = {
    user: null,
    isLoading: true,
    error: "",
    isAuth: false
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
            state.isAuth = false
        }
    },
    extraReducers: {
        [registration.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.error = ""
            state.isLoading = false
            state.isAuth = true
        },
        [registration.pending.type]: (state,) => {
            state.isLoading = true
        },
        [registration.rejected.type]: (state) => {
            state.error = "User with this email already exist"
            state.isLoading = false
            state.isAuth = false
        },


        [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isLoading = false
            state.error = ""
            state.isAuth = true
        },
        [login.pending.type]: (state,) => {
            state.isLoading = true
        },
        [login.rejected.type]: (state) => {
            state.error = "Wrong email or password"
            state.isLoading = false
            state.isAuth = false
        },


        [checkAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.error = ""
            state.isLoading = false
            state.isAuth = true
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
