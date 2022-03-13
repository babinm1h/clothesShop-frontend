import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import { fetchOrders } from '../store/actions/orders';
import styled from "styled-components"
import { useAppSelector } from '../hooks/reduxHooks';
import Loader from '../components/Loader/Loader';
import OrderItem from '../components/OrderItem';

const Container = styled.div`
    padding:20px;
    min-height:100vh;
`
const Title = styled.h1`
    font-size:27px;
    font-weight:bold;
    margin-bottom:25px;
`
const OrdersList = styled.ul`
   display:flex;
   flex-direction:column; 
`

const Empty = styled.div`
    font-size:20px;
    text-align:center;
`


const Orders = () => {
    const dispatch = useDispatch()
    const { orders, isLoading } = useAppSelector(state => state.orders)

    useEffect(() => {
        dispatch(fetchOrders())
    }, [])


    return (
        <>
            <Navbar />
            {isLoading
                ? <Loader />
                : <Container>
                    <Title>Your orders</Title>
                    <OrdersList>
                        {orders.length > 0 ? orders.map(o => <OrderItem item={o} key={o._id} />)
                            : <Empty>You dont have any orders</Empty>}
                    </OrdersList>
                </Container>}
        </>
    );
};

export default Orders;