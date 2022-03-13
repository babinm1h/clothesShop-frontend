import { IProduct } from "./models";



export interface IProductPageState {
    isLoading: boolean
    product: IProduct
    color: string
    size: string,
    quan: number
}


export enum ProductPageActionTypes {
    FETCH_PRODUCT = "productPage/fetch_product"
}