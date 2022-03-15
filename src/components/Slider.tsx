import React from 'react';
import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from '../data';
import { NavLink } from 'react-router-dom';
import { bigMobile, mobile } from '../utils/responsive';
import { AllRoutes } from '../utils/routes';

interface ArrowProps {
    direction: string
}

interface WrapperProps {
    slideIndex: number
}

const Container = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    position:relative;
    overflow:hidden;
    ${bigMobile({ display: `none` })}
`

const Arrow = styled.div<ArrowProps>`
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    width:50px;
    height:50px;
    border-radius:50%;
    background-color:#ccc;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:${p => p.direction === "left" && `10px`};
    right:${p => p.direction === "right" && `10px`};
    opacity:0.5;
    transition:all 0.15s linear;
    z-index:2;
    &:hover{
        opacity:0.8;
    }
`

const Wrapper = styled.div<WrapperProps>`
    height:100%;
    transition:all 1s ease;
    display:flex;
    transform:translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding:0 20px;
`

const ImgContainer = styled.div`
flex:1;
height:100%;
display:flex;
align-items:center;
`

const Image = styled.img`
    height:80%;
`

const InfoContainer = styled.div`
flex:1;
padding-right:50px;
`

const Title = styled.h1`
    font-size:50px;
    font-weight:500;
`
const Descr = styled.p`
    margin:40px 0;
    font-size:20px;
    line-height:1.5;
`
const Button = styled.button`
    padding:5px 15px;
    border:1px solid black;
    font-size:18px;
    &:hover{
        text-decoration:underline;
    }
`



const Slider = () => {
    const [slideIndex, setSlideIndex] = React.useState<number>(0)

    const handleChangeSlide = (dir: "left" | "right") => {
        if (dir === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <>
            <Container>
                <Arrow direction="left" onClick={() => handleChangeSlide("left")}>
                    <ArrowLeftIcon />
                </Arrow>

                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map(s => <Slide key={s.id}>
                        <ImgContainer>
                            <Image src={s.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{s.title}</Title>
                            <Descr>
                                {s.desc}
                            </Descr>
                            <NavLink to={AllRoutes.PRODUCTS}>
                                <Button>
                                    SHOW NOW
                                </Button>
                            </NavLink>
                        </InfoContainer>
                    </Slide>)}
                </Wrapper>

                <Arrow direction="right" onClick={() => handleChangeSlide("right")}>
                    <ArrowRightIcon />
                </Arrow>
            </Container>
        </>
    );
};

export default Slider;