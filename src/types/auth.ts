import { IUser } from "./models";


export interface IAuthState {
    user: IUser | null
    isLoading: boolean
    loginError: string
    isAuth: boolean
    registrError: string
}

export enum AuthActionTypes {
    REGISTRATION = "auth/registration",
    LOGIN = "auth/login",
    CHECK = "auth/check"
}