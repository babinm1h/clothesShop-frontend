import React from 'react';
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mobile } from '../responsive';


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
   ${mobile({ fontSize: `12px`, marginLeft: `12px` })}
`


const Navbar = () => {
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
                        <Logo>QUEISSO</Logo>
                    </Center>

                    <Right>
                        <MenuItem>SIGN IN</MenuItem>
                        <MenuItem>SIGN UP</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartIcon fontSize="medium" />
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </>
    );
};

export default Navbar;