import React from 'react';
import styled from "styled-components"
import { popularProducts } from '../data';
import ProductsItem from './ProductsItem';

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map(p => <ProductsItem item={p} key={p.id} />)}
        </Container>
    );
};

export default Products;