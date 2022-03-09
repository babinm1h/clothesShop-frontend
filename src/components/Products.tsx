import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components"
import { useAppSelector } from '../hooks/reduxHooks';
import { fetchProducts, } from '../store/actions/products';
import { setProducts } from '../store/slices/productsSlice';
import ProductsItem from './ProductsItem';

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`
interface IProductsProps {
    sort?: string
    color?: string
    category?: string
}

const Products: FC<IProductsProps> = ({ sort, color, category }) => {
    const dispatch = useDispatch()
    const { products, } = useAppSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts({ category, color }))
    }, [color,category,dispatch])


    useEffect(() => {
        if (sort === "asc") {
            dispatch(setProducts([...products].sort((a, b) => a.price - b.price)))
        }
        if (sort === "desc") {
            dispatch(setProducts([...products].sort((a, b) => b.price - a.price)))
        }
    }, [sort])



    return (
        <Container>
            {products.map(p => <ProductsItem item={p} key={p._id} />)}
        </Container>
    );
};

export default Products;