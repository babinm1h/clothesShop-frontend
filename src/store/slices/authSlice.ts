import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IAuthState } from "../../types/auth"
import { IUser } from "../../types/models"
import { checkAuth, login, registration } from "../actions/auth"


const initialState: IAuthState = {
    user: null,
    isLoading: true,
    loginError: "",
    isAuth: false,
    registrError: ""
}



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state,) {
            localStorage.removeItem("token")
            state.user = null
            state.loginError = ""
            state.isLoading = false
            state.isAuth = false
            state.registrError = ""
        }
    },
    extraReducers: {
        [registration.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.registrError = ""
            state.isLoading = false
            state.isAuth = true
        },
        [registration.pending.type]: (state,) => {
            state.isLoading = true
        },
        [registration.rejected.type]: (state) => {
            state.registrError = "User with this email already exist"
            state.isLoading = false
            state.isAuth = false
        },


        [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isLoading = false
            state.loginError = ""
            state.isAuth = true
        },
        [login.pending.type]: (state,) => {
            state.isLoading = true
        },
        [login.rejected.type]: (state) => {
            state.loginError = "Wrong email or password"
            state.isLoading = false
            state.isAuth = false
        },


        [checkAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.loginError = ""
            state.registrError = ""
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
