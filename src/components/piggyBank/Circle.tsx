import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    gap: 0.25rem;
    margin-right: 0.25rem;
`

const Circle = styled.div`
    width: 0.375rem;
    height: 0.375rem;
    background-color: ${({theme})=>theme.colors.warning.sub};
    border-radius: 100%;
`

export default function Circles(){
    return(
        <Wrapper>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
            <Circle/>
        </Wrapper>
    )
}