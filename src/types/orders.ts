import { IOrder } from "./models";



export interface IOrdersState {
    orders: IOrder[]
    isLoading: boolean
    isRemoving: boolean
}


export enum OrderActionTypes {
    FETCH_ORDERS = "orders/fetch_orders",
    CREATE = "orders/create",
    DELETE = "orders/delete",
}

