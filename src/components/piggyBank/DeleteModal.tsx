import styled from "styled-components"

const Wrapper = styled.div`
    /* width: 20.5rem;
    height: 10.25rem; */
    background-color: #FFF;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
    border-radius: 16px;
    box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.10);
    position: fixed;
    top: calc(50vh - 1/2 * 10.25rem - 1rem);
    left: calc(50vw - 1/2 * 20.5rem);
`

const TitleWrapper = styled.div`
    /* background-color: lightpink; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.25rem;
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
    gap: 0.5rem;
`

const LeftButton = styled.button`
    width: 100%;
    ${({theme}) => theme.mediumBtns.tertiary}
`

const RightButton = styled.button`
    width: 100%;
    ${({theme}) => theme.mediumBtns.delete}
`

type DeleteModalProps = {
    setIsDelete: any;
}

export default function DeleteModal({setIsDelete}: DeleteModalProps){
    return(
        <Wrapper>
            <TitleWrapper>
                <h1>저금통을 삭제할까요?</h1>
                <p>삭제 버튼을 누르면 복구할 수 없어요.</p>
            </TitleWrapper>
            <ButtonWrapper>
                <LeftButton>닫기</LeftButton>
                <RightButton>삭제할게요</RightButton>
            </ButtonWrapper>
        </Wrapper>
    )
}