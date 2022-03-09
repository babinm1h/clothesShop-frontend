import { IProduct } from "./models";



export interface IProductPageState {
    isLoading: boolean
    product: IProduct
    color: string
    size: string
}


export enum ProductPageActionTypes {
    FETCH_PRODUCT = "productPage/fetch_product"
}