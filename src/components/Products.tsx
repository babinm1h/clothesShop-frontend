import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components"
import { useAppSelector } from '../hooks/reduxHooks';
import { fetchProducts, } from '../store/actions/products';
import { setProducts } from '../store/slices/productsSlice';
import Loader from './Loader/Loader';
import ProductsItem from './ProductsItem';

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
`
const Empty = styled.h2`
    font-size:20px;
    font-weight:bold;
    text-align:center;
    margin-top:50px;
`

interface IProductsProps {
    sort?: string
    color?: string
    category?: string
}

const Products: FC<IProductsProps> = ({ sort, color, category }) => {
    const dispatch = useDispatch()
    const { products, isLoading } = useAppSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts({ category, color }))
    }, [color, category, dispatch])


    useEffect(() => {
        if (sort === "asc") {
            dispatch(setProducts([...products].sort((a, b) => a.price - b.price)))
        }
        if (sort === "desc") {
            dispatch(setProducts([...products].sort((a, b) => b.price - a.price)))
        }
    }, [sort, dispatch])

    if (isLoading) {
        return <div className="loading_centered"><Loader /></div>
    }

    if (products.length === 0) {
        return <Empty>Products not found, try to remove filters :(</Empty>
    }

    return (
        <Container>
            {products.map(p => <ProductsItem item={p} key={p._id} />)}
        </Container>
    );
};

export default Products;