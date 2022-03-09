import { IUser } from "../types/models";
import { $authInstance, $instance } from "./instance";
import jwt_decode from "jwt-decode"


export class AuthService {

    static async register(email: string, password: string, username: string): Promise<IUser> {
        const { data } = await $instance.post<string>("/api/auth/register",
            { email, password, username }
        )
        localStorage.setItem("token", data)
        return jwt_decode<IUser>(data)
    }


    static async login(email: string, password: string): Promise<IUser> {
        const { data } = await $instance.post<string>("/api/auth/login", { email, password })
        localStorage.setItem("token", data)
        return jwt_decode<IUser>(data)
    }


    static async check(): Promise<IUser> {
        const { data } = await $authInstance.get<string>("/api/auth/check")
        localStorage.setItem("token", data)
        return jwt_decode<IUser>(data)
    }

}