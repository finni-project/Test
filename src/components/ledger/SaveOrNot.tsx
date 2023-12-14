import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 20.5rem;
    /* height: 10.25rem; */
    background-color: #FFF;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
    border-radius: 16px;
    box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.10);
    position: fixed;
    z-index: 300;
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
    ${({theme}) => theme.mediumBtns.primary}
`

type SaveOrNotProps = {
    setSaveOrNot: any;
}

export default function SaveOrNot({setSaveOrNot}:SaveOrNotProps){
    const navigate = useNavigate();
    
    function handleDeleteClick(){
        setSaveOrNot(!SaveOrNot);
        navigate('/ledger/monthly');
    }

    function handleSaveClick(){
        setSaveOrNot(!SaveOrNot);
        navigate('/ledger/monthly');
    }

    return(
        <Wrapper>
            <TitleWrapper>
                <h1>작성 중인 내용이 있어요</h1>
                <p>저장하지 않으면 작성한 내용이 사라질 수 있어요.</p>
            </TitleWrapper>
            <ButtonWrapper>
                <LeftButton onClick={handleDeleteClick}>삭제 후 닫기</LeftButton>
                <RightButton onClick={handleSaveClick}>저장할게요</RightButton>
            </ButtonWrapper>
        </Wrapper>
    )
}