import { IProduct } from "./models";


export interface IProductsState {
    products: IProduct[]
    isLoading: boolean
}


export enum ProductsActionTypes {
    FETCH_PRODUCTS = "products/fetch_products"
}