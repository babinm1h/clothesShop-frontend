import { IProduct } from "../types/models";
import { $instance } from "./instance";


export class ProductsService {

    static async fetchProducts(color?: string, category?: string): Promise<IProduct[]> {
        const { data }
            = await $instance.get<IProduct[]>("/api/products", { params: { color, category } })
        return data
    }


    static async fetchOne(id: string): Promise<IProduct> {
        const { data } = await $instance.get<IProduct>(`/api/products/${id}`)
        return data
    }

}