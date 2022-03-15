import React, { FC } from 'react';
import styled from "styled-components"
import { bigMobile, mobile } from '../utils/responsive';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { ICartProduct } from '../types/models';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/reduxHooks';
import DeleteIcon from '@mui/icons-material/Delete';
import { addOne, deleteCartProduct, removeOne } from '../store/actions/cart';

interface ProductColorProps {
    color: string
}

const Product = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:50px;
padding:20px;
${bigMobile({ flexDirection: `column`, flex: "100%" })}
`
const ProductDetail = styled.div`
display:flex;
flex:2;
`
const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-size:18px;
${bigMobile({ marginBottom: `20px` })}
`
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    font-size:16px;
    ${bigMobile({ justifyContent: `flex-start`, padding: `20px 0` })}
`
const ProductName = styled.h2`
margin-bottom:10px;
`
const ProductId = styled.div`
margin-bottom:10px;
`
const ProductColor = styled.div<ProductColorProps>`
background-color:${props => props.color};
width:20px;
height:20px;
border-radius:50%;
border:1px solid black;
margin-bottom:10px;
`
const ProductSize = styled.div`

`
const Image = styled.img`
width:200px;
margin-right:10px;
height:250px;
object-fit:cover;
`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:25px;
`
const ProductAmount = styled.div`
margin:0 15px;
font-weight:bold;
font-size:22px;
`
const ProductPrice = styled.div`
font-size:22px;
`
const Remove = styled.button`
    color:red;
    margin-right:10px;
    background-color:white;
`

interface ICartProductProps {
    item: ICartProduct
}

const CartProduct: FC<ICartProductProps> = ({ item }) => {
    const dispatch = useDispatch()
    const { isAdding, isRemoving, } = useAppSelector(state => state.cart)

    const handleRemove = () => {
        if (window.confirm("Do you want to remove this product from cart?")) {
            dispatch(deleteCartProduct(item._id))
        }
    }

    const handleAddOne = () => {
        dispatch(addOne(item._id))
    }

    const handleRemoveOne = () => {
        if (item.quan > 1) {
            dispatch(removeOne(item._id))
        }
    }

    return (
        <Product>
            <ProductDetail>
                <Image src={item.product.img} />
                <Details>
                    <ProductName>
                        <b>Product:</b> {item.product.title}
                    </ProductName>
                    <ProductId>
                        <b>ID:</b> {item._id}
                    </ProductId>
                    <ProductColor color={item.selectedColor} />
                    <ProductSize>
                        <b>Size:</b> {item.product.size[0]}
                    </ProductSize>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                    <button onClick={handleAddOne} disabled={isAdding}>
                        <AddIcon cursor="pointer" />
                    </button>
                    <ProductAmount>{item.quan}</ProductAmount>
                    <button onClick={handleRemoveOne} disabled={isRemoving}>
                        <RemoveIcon cursor="pointer" />
                    </button>
                </ProductAmountContainer>
                <ProductPrice>$ {item.product.price * item.quan}</ProductPrice>
            </PriceDetail>
            <Remove onClick={handleRemove} disabled={isRemoving}>
                <DeleteIcon fontSize="medium" />
            </Remove>
        </Product>
    );
};

export default CartProduct;