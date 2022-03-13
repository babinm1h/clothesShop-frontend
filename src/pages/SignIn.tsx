import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import { mobile } from '../utils/responsive';
import { AllRoutes } from '../utils/routes';
import { useForm, SubmitHandler } from 'react-hook-form'
import { defaultValidation } from '../utils/valid';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/auth';
import { useAppSelector } from '../hooks/reduxHooks';

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
    width:60%;
    margin-right:10px;
`
const Button = styled.button`
    padding:10px;
    width:40%;
    background-color:teal;
    color:white;
    margin:10px 0;
    &:hover{
        background-color:teal; 
    }
    &:disabled{
        background-color:#7ca8a8;
        pointer-events:none;
    }
`
const Link = styled.span`
color:teal;
cursor:pointer;
&:hover{
    text-decoration:underline;
}
`

const Error = styled.div`
    color:red;
    font-size:12px;
`
const InputContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`


interface IFormFields {
    email: string
    password: string
}

const SignIn = () => {
    const { isAuth, loginError } = useAppSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const { register, handleSubmit, reset, formState: { errors, isValid, isDirty, isSubmitting } } = useForm<IFormFields>({ mode: "onChange" })

    const onSubmit: SubmitHandler<IFormFields> = (data) => {
        dispatch(login({ email: data.email, password: data.password }))
        reset()
    }

    useEffect(() => {
        if (isAuth) {
            navigate(AllRoutes.HOME)
        }
    }, [isAuth])


    return (
        <>
            <Container>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <InputContainer>
                            <Input placeholder="Email" type="email"
                                {...register("email", defaultValidation)} />
                            {errors.email && <Error>{errors.email.message}</Error>}
                        </InputContainer>

                        <InputContainer>
                            <Input placeholder="Password"
                                {...register("password", defaultValidation)} type="password" />
                            {errors.password && <Error>{errors.password.message}</Error>}
                        </InputContainer>

                        {loginError && <Error>{loginError}</Error>}

                        <Button disabled={!isDirty || isSubmitting || !isValid}>SIGN IN</Button>
                        <NavLink to={AllRoutes.REGISTER}>
                            <Link>Create new account?</Link>
                        </NavLink>
                    </Form>
                </Wrapper>
            </Container>
        </>
    );
};

export default SignIn;