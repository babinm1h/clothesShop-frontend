

export interface IProduct {
    categories: string[]
    color: string[]
    createdAt: string
    descr: string
    img: string
    price: number
    size: string[]
    title: string
    updatedAt: number
    _id: string
}


export interface IUser {
    isAdmin: boolean
    email: string
    id: string
}


export interface ICartProduct {
    _id: string
    product: IProduct
    quan: number
    selectedColor: string
}