import React from 'react';
import styled from "styled-components"
import { mobile } from '../utils/responsive';
import { useForm, SubmitHandler } from 'react-hook-form'
import { NavLink } from 'react-router-dom';
import { AllRoutes } from '../utils/routes';


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
width:50%;
${mobile({ width: `80%` })}
`
const Title = styled.div`
font-size:24px;
margin-bottom:20px;
`
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Input = styled.input`
    border:1px solid rgba(0,0,0,0.2);
    display:block;
    padding:7px;
    margin-bottom:20px;
    width:40%;
    margin-right:10px;
    ${mobile({ width: `100%` })}
`
const Button = styled.button`
    padding:10px;
    width:40%;
    background-color:teal;
    color:white;
    margin-bottom:20px;
`
const Agreement = styled.div`
font-size:12px;
margin-bottom:20px;
line-height:1.5;
`
const Link = styled.p`
color:teal;
cursor:pointer;
&:hover{
    text-decoration:underline;
}
`

const FormActions = styled.div`

`


interface IFormFields {
    username: string
    email: string
    password: string
}

const Registr = () => {

    const { register, handleSubmit } = useForm<IFormFields>()

    const onSubmit: SubmitHandler<IFormFields> = (data) => {
        console.log(data);
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Username" {...register("username")} />
                        <Input placeholder="Email" {...register("username")} />
                        <Input placeholder="Password" {...register("username")} />
                        <FormActions>
                            <Agreement>
                                By creating an account, I consent to the processing of my personal
                                data in accordance with the PRIVACY POLICY.
                            </Agreement>
                            <Button type="submit">CREATE</Button>
                            <NavLink to={AllRoutes.SIGNIN}>
                                <Link>Already have an accout?</Link>
                            </NavLink>
                        </FormActions>
                    </Form>
                </Wrapper>
            </Container>

        </>
    );
};

export default Registr;