import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import Navbar from '../components/Navbar';
import { bigMobile, mobile, tablet } from '../utils/responsive';
import { useDispatch } from 'react-redux';
import { getCart } from '../store/actions/cart';
import { useAppSelector } from '../hooks/reduxHooks';
import CartProduct from '../components/CartProduct';
import Loader from '../components/Loader/Loader';
import { useNavigate } from 'react-router';
import { AllRoutes } from '../utils/routes';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import { STRIPE_PUB_KEY } from '../data';
import { OrdersService } from '../API/ordersService';


interface TopButtonProps {
    color: string
    bg: string
}

const Container = styled.div`
    padding:20px;
    min-height:100vh;
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
    margin-bottom:20px;
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
${bigMobile({ display: `none` })}
`
const TopText = styled.div`
font-size:16px;
margin-right:20px;
`
const Bottom = styled.div`
display:flex;
justify-content:space-between;
${tablet({ flexDirection: `column` })}
`
const Info = styled.div`
flex:3;
`

const Summary = styled.div`
flex:1;
height:50vh;
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
padding:10px 15px;
background-color:black;
font-size:16px;
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
    const dispatch = useDispatch()
    const { isLoading, products, totalCount, totalPrice } = useAppSelector(state => state.cart)
    const navigate = useNavigate()

    const [stripeToken, setStripeToken] = useState<null | Token>(null)

    const onToken = (token: Token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        dispatch(getCart())
    }, [])

    const handleContinue = () => {
        navigate(AllRoutes.PRODUCTS)
    }


    const stripeRequest = async () => {
        if (stripeToken) {
            const data = await OrdersService.stripe(stripeToken.id, totalPrice)
            navigate(AllRoutes.SUCCESS, {
                state: { stripeData: data, products: products.map(p => p._id) }
            })
            console.log(data);
        }
    }

    useEffect(() => {
        stripeToken && stripeRequest()
    }, [stripeToken])

    return (
        <>
            <Navbar />
            <Container>
                <Title>YOUR CART</Title>

                <Top>
                    <TopButton color="black" bg="white" onClick={handleContinue}>
                        CONTINUE SHOPPING
                    </TopButton>
                    <TopTexts>
                        <TopText>Shopping Cart ({totalCount})</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton bg="black" color="white">CHECKOUT NOW</TopButton>
                </Top>

                {products.length === 0 ? <Title>Your cart is empty!</Title>
                    : <Bottom>
                        <Info>
                            {isLoading ? <Loader />
                                : products.map((p, index) => <CartProduct item={p} key={p._id} />)}
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemTitle>Total Price</SummaryItemTitle>
                                <SummaryPrice>$ {totalPrice}</SummaryPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemTitle>Total Count</SummaryItemTitle>
                                <SummaryPrice>{totalCount}</SummaryPrice>
                            </SummaryItem>

                            <StripeCheckout stripeKey={STRIPE_PUB_KEY} name="QUEISSO"
                                amount={totalPrice * 100} token={onToken}
                                image="https://yt3.ggpht.com/ytc/AKedOLR17i2DSAEb0c58ZPZkBAoXu-Ie-3lAjPn4bDKr=s900-c-k-c0x00ffffff-no-rj"
                                description='Order Payment'
                                shippingAddress
                                billingAddress>
                                <Button>CHECKOUT NOW</Button>
                            </StripeCheckout>

                        </Summary>
                    </Bottom>}
            </Container>
        </>
    );
};

export default Cart;