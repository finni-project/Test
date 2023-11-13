import styled from "styled-components"

const Wrapper = styled.div`
    width: 328px;
    height: 164px;
    background-color: #FFF;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
    border-radius: 16px;
    box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.10);
`

const TitleWrapper = styled.div`
    /* background-color: lightpink; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        ${({theme}) => theme.fonts.body17b}
        color: ${({theme}) => theme.colors.neutral.n100}
    }
    p{
        ${({theme}) => theme.fonts.body14r}
        color: ${({theme}) => theme.colors.neutral.n60}
    }
`

const ButtonWrapper = styled.div`
    /* background-color: lightgreen; */
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
`

const LeftButton = styled.button`
    width: 100%;
    ${({theme}) => theme.mediumBtns.tertiary}
`

const RightButton = styled.button`
    width: 100%;
    ${({theme}) => theme.mediumBtns.primary}
`

export default function Modal(){
    return(
        <Wrapper>
            <TitleWrapper>
                <h1>Title</h1>
                <p>text</p>
            </TitleWrapper>
            <ButtonWrapper>
                <LeftButton>버튼💛</LeftButton>
                <RightButton>버튼💛</RightButton>
            </ButtonWrapper>
        </Wrapper>
    )
}