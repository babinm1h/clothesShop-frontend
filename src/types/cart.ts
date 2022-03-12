import { ICartProduct } from "./models";


export interface ICartState {
    isLoading: boolean
    products: ICartProduct[]
    totalPrice: number
    totalCount: number
    error: string
    isAdding: boolean
    isRemoving: boolean
}


export enum CartActionTypes {
    GET_CART = "cart/get_cart",
    ADD_TO_CART = "cart/add_to_cart",
    REMOVE_ONE = "cart/remove_one",
    ADD_ONE = "cart/add_one",
    DELETE_PRODUCT = "cart/delete_product"
}