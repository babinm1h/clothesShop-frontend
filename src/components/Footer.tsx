import React from 'react';
import styled from "styled-components"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import { usefulLinks } from '../data';
import { bigMobile, mobile } from '../utils/responsive';


interface SocialIconProps {
    color: string
}

const Container = styled.div`
   display:flex;
    padding:20px 0;  
    ${bigMobile({ flexDirection: `column` })}       
`
const Left = styled.div`
  flex:1; 
  display:flex;
  flex-direction:column;
  padding:20px;
`
const Logo = styled.h1`
    font-weight:bold;
    font-size:24px;
`
const Descr = styled.p`
    margin:20px 0;
    line-height:1.5;
`
const SocialsRow = styled.div`
    display:flex;
`
const SocialIcon = styled.div<SocialIconProps>`
    width:40px;
    height:40px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${props => props.color};
    color:white;
    margin-right:15px;
    cursor:pointer;
`
const Center = styled.div`
   flex:1;
   padding:20px;
   ${bigMobile({ display: `none` })}
`
const Title = styled.h3`
    font-size:20px;
    font-weight:bold;
    margin-bottom:20px;
`
const List = styled.ul`
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
    font-size:18px;
`

const Right = styled.div`
   flex:1;
   padding:20px;
`
const ContactItem = styled.div`
   margin-bottom:20px;
   font-size:16px;
   display:flex;
   align-items:center;
`
const ContactIcon = styled.span`
    margin-right:10px;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>QUEISSO</Logo>
                <Descr>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui delectus molestias sed, consectetur quisquam? Tenetur, rem repudiandae. Fugit, perferendis.
                </Descr>
                <SocialsRow>
                    <SocialIcon color="#e4405f"><InstagramIcon /></SocialIcon>
                    <SocialIcon color="#55acee"><TwitterIcon /></SocialIcon>
                    <SocialIcon color="red"><YouTubeIcon /></SocialIcon>
                </SocialsRow>
            </Left>


            <Center>
                <Title>Useful Links</Title>
                <List>
                    {usefulLinks.map(l => <ListItem key={l.id}>{l.title}</ListItem>)}
                </List>
            </Center>


            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <ContactIcon><EmailIcon fontSize="medium" /></ContactIcon>
                    m1hbbn@yandex.ru
                </ContactItem>
                <ContactItem>
                    <ContactIcon><RoomIcon fontSize="medium" /></ContactIcon>
                    Some Street 777
                </ContactItem>
                <ContactItem>
                    <ContactIcon><PhoneIcon fontSize="medium" /></ContactIcon>
                    +7 902 043 88 04
                </ContactItem>
            </Right>

        </Container>
    );
};

export default Footer;