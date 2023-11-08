import styled from "styled-components"

const Wrapper = styled.div`
    width: 328px;
    height: 164px;
    background-color: lightblue;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
`

const TitleWrapper = styled.div`
    background-color: lightpink;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        ${({theme}) => theme.fonts.body17b}
        ${({theme}) => theme.colors.neutral.n100}
    }
    p{
        ${({theme}) => theme.fonts.body14r}
        ${({theme}) => theme.colors.neutral.n60}
    }
`

const ButtonWrapper = styled.div`
    background-color: lightgreen;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
`

const Button = styled.button`
    background-color: lightcyan;
    width: 50%;
    border: 0px;
`

export default function Modal(){
    return(
        <Wrapper>
            <TitleWrapper>
                <h1>Title</h1>
                <p>text</p>
            </TitleWrapper>
            <ButtonWrapper>
                <Button>버튼</Button>
                <Button>버튼</Button>
            </ButtonWrapper>
        </Wrapper>
    )
}