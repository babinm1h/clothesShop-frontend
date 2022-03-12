import React, { FC } from 'react';
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mobile } from '../utils/responsive';
import { NavLink } from 'react-router-dom';
import { AllRoutes } from '../utils/routes';
import { IProduct } from '../types/models';


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
   justify-content:center;
   flex-direction:column;
   align-items:center;
   transition:all 0.2s ease;
   opacity:0;
   cursor:pointer;
`
const Container = styled.div`
   flex:1;
   margin:5px;
   min-width:300px;
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
    color:black;
    &:hover{
        background-color:#f5fbfd;
        transform:scale(1.1)
    }
`
const Price = styled.div`
    font-size:20px;
    font-weight:bold;
    width:50px;
    height:50px;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
`
const InfoActions = styled.div`
    display:flex;
    margin-bottom:20px;
`

interface IProductsItemProps {
    item: IProduct
}

const ProductsItem: FC<IProductsItemProps> = ({ item }) => {

    return (
        <Container>
            <Image src={item.img} />
            <Circle />
            <Info>
                <InfoActions>
                    <NavLink to={AllRoutes.PRODUCT + `/${item._id}`}>
                        <Icon><SearchIcon /></Icon>
                    </NavLink>
                    <Icon><FavoriteBorderIcon /></Icon>
                    <Icon><ShoppingCartIcon /></Icon>
                </InfoActions>
                <Price>{item.price} $</Price>
            </Info>
        </Container>
    );
};

export default ProductsItem;