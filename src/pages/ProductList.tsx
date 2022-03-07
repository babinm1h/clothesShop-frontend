import React from 'react';
import styled from "styled-components"
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import { mobile } from '../responsive';


const Container = styled.div`
padding:20px;
`
const Title = styled.h1`
    font-weight:bold;
    font-size:27px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:20px;
    ${mobile({ alignItems: `stretch`, display: `block` })}
`
const Filter = styled.div`
    display:flex;
    align-items:center;
    ${mobile({ flexDirection: `column`, alignItems: `stretch` })}
`
const FilterText = styled.div`
    font-size:18px;
    font-weight:500;
    white-space:nowrap;
`
const Select = styled.select`
    margin:0 10px;
    font-size:18px;
    padding:5px;
    border:1px solid rgba(0,0,0,0.2);
    ${mobile({ margin: `10px 0`, fontSize: `15px` })}
`
const Option = styled.option`
    ${mobile({ fontSize: `15px` })}
`


const ProductList = () => {

    return (
        <>
            <Navbar />
            <Container>
                <Title>Dresses</Title>
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter Products:</FilterText>
                        <Select>
                            <Option selected disabled>Color</Option>
                            <Option>Green</Option>
                            <Option>Yellow</Option>
                            <Option>Black</Option>
                        </Select>
                        <Select>
                            <Option selected disabled>Size</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                        </Select>
                    </Filter>


                    <Filter>
                        <FilterText>Sort Products:</FilterText>
                        <Select>
                            <Option>Newest</Option>
                            <Option>Price (ASCending)</Option>
                            <Option>Price (DESCending)</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
            </Container>
            <Products />
            <NewsLetter />
        </>
    );
};

export default ProductList;