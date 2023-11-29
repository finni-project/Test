import styled from "styled-components"

const Wrapper = styled.div`
   h1{
        ${({theme}) => theme.fonts.title34b}
        @media ${({theme}) => theme.devices.mobile} {
            color: ${({theme}) => theme.colors.primary.main}
        }
        @media ${({theme}) => theme.devices.desktop} {
            color: ${({theme}) => theme.colors.warning.main}
        }
    }
`

const Temp = styled.div`
    width: 100%;
    height: 800px;
    background-color: lemonchiffon;
`

export default function Home(){
    return(
        <Wrapper>
            <h1>Home</h1>
            <Temp />
        </Wrapper>
    )
}