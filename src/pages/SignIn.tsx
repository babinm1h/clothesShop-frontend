import React from 'react';
import styled from "styled-components"
import { mobile } from '../responsive';


const Container = styled.div`
 width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
      background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow:hidden;
`
const Wrapper = styled.div`
background-color:#fff;
padding:20px;
width:40%;
${mobile({ width: `80%` })}
`
const Title = styled.div`
font-size:24px;
margin-bottom:20px;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
`
const Input = styled.input`
    border:1px solid rgba(0,0,0,0.2);
    display:block;
    padding:7px;
    margin-bottom:20px;
    width:100%;
    margin-right:10px;
`
const Button = styled.button`
    padding:10px;
    width:40%;
    background-color:teal;
    color:white;
    margin-bottom:20px;
    &:hover{
        background-color:teal; 
    }
`
const Link = styled.p`
color:teal;
cursor:pointer;
&:hover{
    text-decoration:underline;
}
`



const SignIn = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form>
                        <Input placeholder="Email" />
                        <Input placeholder="Password" />
                        <Button>SIGN IN</Button>
                        <Link>Create new account?</Link>
                    </Form>
                </Wrapper>
            </Container>
        </>
    );
};

export default SignIn;