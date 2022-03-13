import { IOrder } from "../types/models";
import { $authInstance } from "./instance";


export class OrdersService {

    static async stripe(tokenId: string, amount: number) {
        const { data } = await $authInstance.post("/api/stripe/pay", { tokenId, amount })
        return data
    }


    static async create(amount: number, products: string[], address: Object) {
        const { data } = await $authInstance.post<IOrder>("/api/order", { amount, products, address })
        return data
    }

    static async fetchOrders(): Promise<IOrder[]> {
        const { data } = await $authInstance.get<IOrder[]>("/api/order")
        return data
    }

    static async delete(id: string): Promise<IOrder> {
        const { data } = await $authInstance.delete<IOrder>(`/api/order/${id}`)
        return data
    }

}