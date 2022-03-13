import React from "react";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import ProductList from "../pages/ProductList";
import ProductPage from "../pages/ProductPage";
import Registr from "../pages/Registr";
import SignIn from "../pages/SignIn";
import Success from "../pages/Success";

interface IRoute {
    path: string,
    element: React.ReactNode
}

export enum AllRoutes {
    PRODUCTS = "/products",
    HOME = "/",
    SIGNIN = "/signin",
    REGISTER = "/register",
    CART = '/cart',
    ANY = '/*',
    PRODUCT = "/product",
    SUCCESS = "/success",
    ORDERS = "/orders"
}

export const publicRoutes: IRoute[] = [
    { path: AllRoutes.PRODUCT + "/:id", element: <ProductPage /> },
    { path: AllRoutes.PRODUCTS, element: <ProductList /> },
    { path: AllRoutes.PRODUCTS + "/:category", element: <ProductList /> },
    { path: AllRoutes.HOME, element: <Home /> },
    { path: AllRoutes.SIGNIN, element: <SignIn /> },
    { path: AllRoutes.REGISTER, element: <Registr /> },
    { path: AllRoutes.ANY, element: <Home /> },
]

export const authRoutes: IRoute[] = [
    { path: AllRoutes.CART, element: <Cart /> },
    { path: AllRoutes.SUCCESS, element: <Success /> },
    { path: AllRoutes.ORDERS, element: <Orders /> }
]