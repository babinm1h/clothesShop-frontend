import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components"
import { deleteOrder } from '../store/actions/orders';
import { IOrder } from '../types/models';


const Order = styled.li`
    margin-bottom:25px;
`
const OrderInfo = styled.div`
    margin-bottom:10px;
`
const OrderInfoTitle = styled.span`
font-weight:bold; 
margin-right:10px;
`
const Button = styled.button`
    color:red;
    font-size:16px;
`


interface IOrderItemProps {
    item: IOrder
}

const OrderItem: FC<IOrderItemProps> = ({ item }) => {
    const dispatch = useDispatch()

    const handleCancel = () => {
        if (window.confirm("Do you want to cancel this order?")) {
            dispatch(deleteOrder(item._id))
        }
    }

    return (
        <Order key={item._id}>
            <OrderInfo>
                <OrderInfoTitle>Order ID:</OrderInfoTitle> {item._id}
            </OrderInfo>
            <OrderInfo>
                <OrderInfoTitle>Total Price:</OrderInfoTitle> {item.amount} $
            </OrderInfo>
            <OrderInfo>
                <OrderInfoTitle>Status:</OrderInfoTitle> {item.status}
            </OrderInfo>
            <OrderInfo>
                <OrderInfoTitle>Address:</OrderInfoTitle>
                {item.address.country}, {item.address.city}, {item.address.line1}
            </OrderInfo>
            <Button onClick={handleCancel}>Cancel the order</Button>
        </Order>
    );
};

export default OrderItem;