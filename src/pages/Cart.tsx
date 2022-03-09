import React from 'react';
import styled from "styled-components"
import Navbar from '../components/Navbar';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../utils/responsive';

interface TopButtonProps {
    color: string
    bg: string
}
interface ProductColorProps {
    color: string
}

const Container = styled.div`
    padding:20px;
    ${mobile({ padding: `10px` })}
`
const Title = styled.h1`
    font-size:30px;
    text-align:center;
`
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`
const TopButton = styled.button<TopButtonProps>`
    padding:10px;
    cursor:pointer;
    font-weight:bold;
    background-color:${props => props.bg};
    color:${props => props.color};
    border:1px solid black;
    &:hover{
        text-decoration:underline;
    }
`
const TopTexts = styled.div`
display:flex;
align-items:center;
${mobile({ display: `none` })}
`
const TopText = styled.div`
font-size:16px;
margin-right:20px;
`
const Bottom = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
${mobile({ flexDirection: `column` })}
`
const Info = styled.div`
flex:3;
`
const Product = styled.div`
display:flex;
justify-content:space-between;
margin-top:20px;
${mobile({ flexDirection: `column` })}
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
`
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    font-size:16px;
`
const ProductName = styled.h2`

`
const ProductId = styled.div`

`
const ProductColor = styled.div<ProductColorProps>`
background-color:${props => props.color};
width:20px;
height:20px;
border-radius:50%;
`
const ProductSize = styled.div`

`
const Image = styled.img`
width:200px;
margin-right:10px;
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
const Summary = styled.div`
flex:1;
height:30vh;
border:1px solid rgba(0,0,0,0.2);
padding:20px;
border-radius:11px;
${mobile({ marginTop: `30px` })}
`
const SummaryTitle = styled.h1`
font-weight:bold;
font-size:30px;
`
const SummaryPrice = styled.div`
margin:20px 0;
`
const Button = styled.button`
padding:10px;
background-color:black;
color:white;
${mobile({ width: `100%` })}
&:hover{
    text-decoration:underline;
}
`
const SummaryItem = styled.div`
    display:flex;
    align-items:center;
    font-size:20px;
    justify-content:space-between;
`
const SummaryItemTitle = styled.div`
    display:flex;
    align-items:center;
`

const Cart = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Title>YOUR CART</Title>

                <Top>
                    <TopButton color="black" bg="white">CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Cart (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton bg="black" color="white">CHECKOUT NOW</TopButton>
                </Top>

                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> HAKURA T-SHIRT
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 93813718293
                                    </ProductId>
                                    <ProductColor color="gray" />
                                    <ProductSize>
                                        <b>Size:</b> M
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon cursor="pointer" />
                                    <ProductAmount>1</ProductAmount>
                                    <RemoveIcon cursor="pointer" />
                                </ProductAmountContainer>
                                <ProductPrice>$ 25</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemTitle>Total Price</SummaryItemTitle>
                            <SummaryPrice>$ 7004</SummaryPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Container>
        </>
    );
};

export default Cart;