import { IUser } from "./models";


export interface IAuthState {
    user: IUser | null
    isLoading: boolean
    error: string
    isAuth: boolean
}

export enum AuthActionTypes {
    REGISTRATION = "auth/registration",
    LOGIN = "auth/login",
    CHECK = "auth/check"
}