import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import { createOrder } from '../store/actions/orders';
import { AllRoutes } from '../utils/routes';




const Text = styled.h1`
font-size:20px;
font-weight:bold;
margin-top:50px;
`
const Button = styled.button`
margin-top:20px;
color:teal;
font-size:20px;
&:hover{
    text-decoration:underline;
}
`
const Container = styled.div`
    padding:20px;
    min-height:100vh;
    text-align:center;
    display:flex;
    flex-direction:column;
`

interface ILocationState {
    products: string[]
    stripeData: any
}

const Success = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const location = useLocation()
    const state = location.state as ILocationState


    const handleCreate = () => {
        if (state.stripeData) {
            dispatch(createOrder({
                amount: state.stripeData.amount,
                products: state.products,
                address: state.stripeData.billing_details.address
            }))
            navigate(AllRoutes.ORDERS)
        }
    }


    return (
        <>
            <Navbar />
            <Container>
                <Text>
                    Do You want to create order?
                    Total price is ${state.stripeData.amount}
                </Text>
                <Button onClick={handleCreate}>Create Order!</Button>
            </Container>
        </>
    );
};

export default Success;