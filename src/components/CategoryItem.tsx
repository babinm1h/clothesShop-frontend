import React, { FC } from 'react';
import styled from 'styled-components'
import { mobile } from '../responsive';
import { ICategory } from '../types/dataItems';

const Container = styled.div`
    flex:1;
    margin:5px;
    height:70vh;
    position:relative;
    ${mobile({ flex: `100%` })}
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`
const Title = styled.h2`
    margin-bottom:10px;
    font-size:32px;
    font-weight:bold;
    color:white;
`
const Info = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`
const Button = styled.button`
    padding:10px;
    border:none;
    background-color:white;
    color:#333;
    font-weight:600;
`


interface ICategoryItemProps {
    item: ICategory
}

const CategoryItem: FC<ICategoryItemProps> = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;