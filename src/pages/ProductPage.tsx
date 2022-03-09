import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import NewsLetter from '../components/NewsLetter';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from '../components/Navbar';
import { mobile } from '../utils/responsive';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/reduxHooks';
import { fetchOneProduct } from '../store/actions/productPage';
import { useParams } from 'react-router-dom';
import { setColor, setSize } from '../store/slices/productPageSlice';

interface FilterColorProps {
    color: string
    active?: boolean
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
    border:${props => props.active ? `1px solid rgba(0,0,0,1)` : `1px solid rgba(0,0,0,0.3)`}
`
const FilterSize = styled.select`
    padding:5px;
    cursor:pointer;
    font-size:16px;
`
const FilterOption = styled.option``


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
    const dispatch = useDispatch()
    const { product, isLoading, color, size } = useAppSelector(state => state.productPage)
    const [quan, setQuan] = useState<number>(1)

    const { id } = useParams() as { id: string }

    useEffect(() => {
        if (id) dispatch(fetchOneProduct(id))
    }, [id, dispatch])

    const handleDecr = () => {
        if (quan !== 1) {
            setQuan(quan - 1)
        }
    }
    const handleIncr = () => {
        setQuan(quan + 1)
    }

    const handleColor = (color: string) => {
        dispatch(setColor(color))
    }

    const handleSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSize(e.target.value))
    }

    return (
        <>
            <Navbar />
            <Container>

                <Wrapper>
                    <ImageContainer>
                        <Image src={product.img} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Descr>
                            {product.descr}
                        </Descr>
                        <Price>{product.price} $</Price>

                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                {product?.color?.map(c => <FilterColor color={c}
                                    key={c} onClick={() => handleColor(c)}
                                    active={color === c} />)}
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize defaultValue={size} onChange={handleSize}>
                                    {product?.size?.map(s => <FilterOption key={s} value={s}>
                                        {s}
                                    </FilterOption>)}
                                </FilterSize>
                            </Filter>
                        </FilterContainer>

                        <AddContainer>
                            <AmountContainer>
                                <button onClick={handleDecr}><RemoveIcon cursor="pointer" /></button>
                                <Amount>{quan}</Amount>
                                <button onClick={handleIncr}>
                                    <AddIcon cursor="pointer" />
                                </button>
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