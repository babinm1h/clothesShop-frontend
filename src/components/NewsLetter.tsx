import React from 'react';
import styled from "styled-components"
import Send from '@mui/icons-material/Send';
import { bigMobile } from '../utils/responsive';


const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:60vh;
background-color:#fcf5f5;
${bigMobile({ textAlign: `center`, height: `50vh` })}
`
const Title = styled.h1`
    font-size:44px;
    font-weight:bold;
    ${bigMobile({ fontSize: `27px` })}
`
const Descr = styled.p`
font-size:24px;
font-weight:500;
margin:20px 0 ;
${bigMobile({ fontSize: `20px` })}
`
const InputContainer = styled.div`
display:flex;
align-items:center;
background-color:white;
width:50%;
height:40px;
justify-content:space-between;
${bigMobile({ width: `100%` })}
`
const Input = styled.input`
    padding-left:10px;
    flex:8;
    font-size:16px;
    ${bigMobile({ flex: 3 })}
`
const Button = styled.button`
    flex:1;
    background-color:teal;
    color:white;
    height:100%;
    ${bigMobile({ flex: 1 })}
`

const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Descr>Lorem ipsum dolor sit amet consectetur adipisicing.</Descr>

            <InputContainer>
                <Input placeholder="Your email..." type='email' />
                <Button><Send /></Button>
            </InputContainer>
        </Container>
    );
};

export default NewsLetter;