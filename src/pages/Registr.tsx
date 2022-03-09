import React, { useEffect } from 'react';
import styled from "styled-components"
import { mobile } from '../utils/responsive';
import { useForm, SubmitHandler } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom';
import { AllRoutes } from '../utils/routes';
import { defaultValidation } from '../utils/valid';
import { useDispatch } from 'react-redux';
import { registration } from '../store/actions/auth';
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
width:50%;
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
    width:40%;
    margin-right:10px;
    ${mobile({ width: `100%` })}
`
const Button = styled.button`
    padding:10px;
    width:40%;
    background-color:teal;
    color:white;
    margin-bottom:10px;
    &:disabled{
        background-color:#7ca8a8;
        pointer-events:none;
    }
`
const Agreement = styled.div`
font-size:12px;
margin-bottom:20px;
line-height:1.5;
`
const Link = styled.span`
color:teal;
cursor:pointer;
&:hover{
    text-decoration:underline;
}
`

const FormActions = styled.div`

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
    username: string
    email: string
    password: string
}

const Registr = () => {
    const { isAuth } = useAppSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors, isValid, isDirty, isSubmitting } } = useForm<IFormFields>({ mode: "onChange" })

    const onSubmit: SubmitHandler<IFormFields> = (data) => {
        dispatch(registration({ email: data.email, password: data.password, username: data.username }))
        if (localStorage.getItem("token")) {
            reset()
        }
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
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <InputContainer>
                            <Input placeholder="Username"
                                {...register("username", defaultValidation)} />
                            {errors.username && <Error>{errors.username.message}</Error>}
                        </InputContainer>

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

                        <FormActions>
                            <Agreement>
                                By creating an account, I consent to the processing of my personal
                                data in accordance with the PRIVACY POLICY.
                            </Agreement>
                            <Button type="submit"
                                disabled={!isValid || !isDirty || isSubmitting}>
                                CREATE
                            </Button>
                        </FormActions>
                        <NavLink to={AllRoutes.SIGNIN}>
                            <Link>Already have an accout?</Link>
                        </NavLink>
                    </Form>
                </Wrapper>
            </Container>

        </>
    );
};

export default Registr;