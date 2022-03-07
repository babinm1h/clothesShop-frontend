import React, { FC } from 'react';
import styled from "styled-components"
import { IPopularProduct } from '../types/dataItems';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mobile } from '../responsive';


const Circle = styled.div`
   position:absolute;
   background-color:white;
   width:200px;
   border-radius:50%;
   height:200px; 
`
const Image = styled.img`
    height:75%;
    z-index:2;
`
const Info = styled.div`
    position:absolute;
   background-color: rgba(0, 0, 0, 0.22);
   width:100%;
   height:100%; 
   z-index:3;
   top:0;
   left:0;
   display:flex;
   align-items:center;
   justify-content:center;
   transition:all 0.2s ease;
   opacity:0;
   cursor:pointer;
`
const Container = styled.div`
   flex:1;
   margin:5px;
   min-width:280px;
   height:350px; 
   display:flex;
   align-items:center;
   justify-content:center;
   background-color:#f5fbfd;
   position:relative;
   ${mobile({ flex: `100%` })}
   &:hover ${Info}{
    opacity:1;
   }
`
const Icon = styled.div`
    width:40px;
    height:40px;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 10px;
    border-radius:50%;
    cursor:pointer;
    transition:all 0.15s ease;
    &:hover{
        background-color:#f5fbfd;
        transform:scale(1.1)
    }
`

interface IProductsItemProps {
    item: IPopularProduct
}

const ProductsItem: FC<IProductsItemProps> = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Circle />
            <Info>
                <Icon><SearchIcon /></Icon>
                <Icon><FavoriteBorderIcon /></Icon>
                <Icon><ShoppingCartIcon /></Icon>
            </Info>
        </Container>
    );
};

export default ProductsItem;