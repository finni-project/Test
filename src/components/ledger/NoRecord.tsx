import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: beige; */
    margin-top: calc(11.5rem - 2rem);
    p{
        text-align: center;
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.body14r}
    }
`

export default function NoRecord(){
    return(
        <Wrapper>
            <p>
                아직 기록이 없어요.
                <br/> +를 눌러 기록을 추가해보세요.
            </p>
        </Wrapper>
    )
}