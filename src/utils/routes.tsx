import React from "react";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import ProductPage from "../pages/ProductPage";
import Registr from "../pages/Registr";
import SignIn from "../pages/SignIn";

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
    PRODUCT = "/product"
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
    { path: AllRoutes.CART, element: <Cart /> }
]