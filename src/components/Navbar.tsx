import React from 'react';
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mobile } from '../utils/responsive';
import { NavLink } from 'react-router-dom';
import { AllRoutes } from '../utils/routes';
import { useAppSelector } from '../hooks/reduxHooks';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';


const Container = styled.div`
padding:10px 0;
`

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`

const Left = styled.div`
display:flex;
align-items:center;
flex:1;
${mobile({ display: `none` })}
`
const Language = styled.div`
cursor:pointer;
${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
display:flex;
align-items:center;
margin-left:25px;
padding:2px 5px;
border:1px solid rgba(0,0,0, 0.1);
`
const Input = styled.input`
    border:none;
    ${mobile({ width: `60px` })}
`
const Logo = styled.h1`
font-weight:bold ;
font-size:24px;
text-align:center;
color:black;
`

const Center = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({ justifyContent: "center", flex: `2` })}
`
const MenuItem = styled.div`
   cursor:pointer; 
   margin-left:25px;
   white-space:nowrap;
   color:black;
   &:hover{
       text-decoration:underline;
   }
   ${mobile({ fontSize: `12px`, marginLeft: `12px` })}
`
const CartIcon = styled.span`
color:black;
`



const Navbar = () => {
    const { isAuth, user } = useAppSelector(state => state.auth)
    const totalCount = useAppSelector(state => state.cart.totalCount)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>RU</Language>
                        <SearchContainer>
                            <Input placeholder="Search..." />
                            <SearchIcon color="action" />
                        </SearchContainer>
                    </Left>

                    <Center>
                        <NavLink to={AllRoutes.HOME}><Logo>QUEISSO</Logo></NavLink>
                    </Center>

                    <Right>
                        {isAuth
                            ? <>
                                <MenuItem>{user?.email}</MenuItem>
                                <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
                            </>
                            : <>
                                <NavLink to={AllRoutes.SIGNIN}><MenuItem>SIGN IN </MenuItem></NavLink>
                                <NavLink to={AllRoutes.REGISTER}><MenuItem>SIGN UP</MenuItem></NavLink>
                            </>}
                        <MenuItem>
                            <NavLink to={AllRoutes.CART}>
                                <Badge badgeContent={totalCount} color="primary">
                                    <CartIcon><ShoppingCartIcon fontSize="medium" /></CartIcon>
                                </Badge>
                            </NavLink>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </>
    );
};

export default Navbar;