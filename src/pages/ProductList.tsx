import React, { useState } from 'react';
import { useParams } from 'react-router';
import styled from "styled-components"
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import { allColors } from '../data';
import { mobile } from '../utils/responsive';


const Container = styled.div`
padding:20px;
`
const Title = styled.h1`
    font-weight:bold;
    font-size:27px;
    text-transform:capitalize;
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
    const { category } = useParams() as { category: string }

    const [sort, setSort] = useState<string | undefined>(undefined)
    const [color, setColor] = useState<string | undefined>(undefined)

    const onSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(e.target.value)
    }

    const onChangeColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setColor(e.target.value)
    }


    return (
        <>
            <Navbar />
            <Container>
                <Title>{category}</Title>
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter Products:</FilterText>
                        <Select defaultValue="" onChange={onChangeColor}>
                            <Option value="">Any</Option>
                            {allColors.map(c => <Option value={c} key={c}>{c}</Option>)}
                        </Select>
                    </Filter>


                    <Filter>
                        <FilterText>Sort Products:</FilterText>
                        <Select onChange={onSortChange} defaultValue="sortBy">
                            <Option value="sortBy" disabled>Sort</Option>
                            <Option value="asc">Price (ASCending)</Option>
                            <Option value="desc">Price (DESCending)</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
            </Container>
            <Products sort={sort} color={color} category={category} />
            <NewsLetter />
        </>
    );
};

export default ProductList;