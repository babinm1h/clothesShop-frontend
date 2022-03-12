import { ICartProduct } from "../types/models";
import { $authInstance } from "./instance";





export class CartService {

    static async getAll(): Promise<ICartProduct[]> {
        const { data } = await $authInstance.get<ICartProduct[]>(`/api/cart/`)
        return data
    }

    static async addToCart(id: string, quan: number, selectedColor: string): Promise<ICartProduct> {
        const { data } = await $authInstance.post<ICartProduct>(`/api/cart/${id}`,
            { quan, selectedColor })
        return data
    }

    static async addOne(id: string): Promise<ICartProduct> {
        const { data } = await $authInstance.put<ICartProduct>(`/api/cart/add/${id}`)
        return data
    }

    static async removeOne(id: string): Promise<ICartProduct> {
        const { data } = await $authInstance.put<ICartProduct>(`/api/cart/remove/${id}`)
        return data
    }


    static async delete(id: string): Promise<ICartProduct> {
        const { data } = await $authInstance.delete<ICartProduct>(`/api/cart/${id}`)
        return data
    }

}