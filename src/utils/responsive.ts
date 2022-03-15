import { css } from "styled-components"

export const mobile = (props: any) => {
    return css`
    @media only screen and (max-width:480px){
        ${props}
    }
    `
}


export const tablet = (props: any) => {
    return css`
    @media only screen and (max-width:900px){
        ${props}
    }
    `
}


export const bigMobile = (props: any) => {
    return css`
    @media only screen and (max-width:768px){
        ${props}
    }
    `
}