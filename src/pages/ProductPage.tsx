import React from 'react';
import styled from "styled-components"
import NewsLetter from '../components/NewsLetter';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

interface FilterColorProps {
    color: string
}

const Container = styled.div`
    margin-top:50px;
`
const Wrapper = styled.div`
    display:flex;
    ${mobile({ flexDirection: "column" })}
`
const ImageContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({ height: `40vh` })}
`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
    ${mobile({ padding: `0 10px` })}
`
const Title = styled.h1`
    font-size:27px;
    font-weight:200;
`
const Descr = styled.p`
    font-size:16px;
    line-height:1.5;
    margin:20px 0;
`
const Price = styled.div`
    font-size:27px;
    font-weight:bold;
`
const FilterContainer = styled.div`
    margin:30px 0 ;
    display:flex;
    justify-content:space-between;
    width:60%;
    ${mobile({ width: `100%` })}
`
const FilterTitle = styled.div`
    margin-right:15px;
    font-size:20px;
`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterColor = styled.div<FilterColorProps>`
    border-radius:50%;
    width:20px;
    height:20px;
    background-color:${props => props.color};
    margin-right:10px;
    cursor:pointer;
`
const FilterSize = styled.select`
    padding:5px;
    cursor:pointer;
    font-size:16px;
`
const FilterOption = styled.option`
    
`


const AddContainer = styled.div`
   width:60%; 
   display:flex;
   align-items:center;
   justify-content:space-between;
   ${mobile({ width: `100%` })}
`
const AmountContainer = styled.div`
    display:flex;
   align-items:center;
`
const Amount = styled.div`
    margin:0 15px;
    font-weight:bold;
    width:30px;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px solid teal;
    border-radius:10px;
`
const Button = styled.option`
    cursor:pointer;
    border:1px solid teal;
    padding:10px 15px;
    font-weight:500;
    &:hover{
        text-decoration:underline;
    }
`

const ProductPage = () => {
    return (
        <>
            <Navbar />
            <Container>

                <Wrapper>
                    <ImageContainer>
                        <Image src="https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Some Shirt</Title>
                        <Descr>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aspernatur eos veritatis asperiores voluptatibus, neque fugit itaque, optio saepe, esse odio quas!
                        </Descr>
                        <Price>20 $</Price>

                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                <FilterColor color="black" />
                                <FilterColor color="yellow" />
                                <FilterColor color="green" />
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                    <FilterOption selected disabled>Sizes</FilterOption>
                                    <FilterOption>S</FilterOption>
                                    <FilterOption>M</FilterOption>
                                    <FilterOption>L</FilterOption>
                                </FilterSize>
                            </Filter>
                        </FilterContainer>

                        <AddContainer>
                            <AmountContainer>
                                <RemoveIcon />
                                <Amount>1</Amount>
                                <AddIcon />
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>

                <NewsLetter />
            </Container>
        </>
    );
};

export default ProductPage;