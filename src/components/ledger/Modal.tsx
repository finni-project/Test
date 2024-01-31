import { useDispatch } from "react-redux"
import { activeDeposit } from "reducers/depositActive"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 20.5rem;
    height: 10.25rem;
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
    gap: 0.25rem;
    h1{
        ${({theme}) => theme.fonts.body17b}
        color: ${({theme}) => theme.colors.neutral.n100}
    }
    p{
        ${({theme}) => theme.fonts.body14r}
        color: ${({theme}) => theme.colors.neutral.n60}
    }
    .income{
        color: ${({theme}) => theme.colors.success.main}
    }
    .deposit{
        color: ${({theme}) => theme.colors.primary.main}
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
    padding: 1rem;
`

const RightButton = styled.button`
    width: 100%;
    ${({theme}) => theme.mediumBtns.primary}
`

type LedgerModalProps = {
    type: string;
    text: string;
    amount: number;
    setShownModal: any;
}

export default function LedgerModal({type, text, amount, setShownModal}:LedgerModalProps){
    const dispatch = useDispatch();
    
    function handleNoBtnClick(){
        setShownModal(false);
    }
    function handleYesBtnClick(){
        setShownModal(false);
    }
    function doneSaveBtnClick(){
        handleYesBtnClick();
        dispatch(activeDeposit());
    }

    return(
        <Wrapper>
            <TitleWrapper>
                <h1>오늘 {text} 날이네요!</h1>
                <p>약속대로
                    {type==="income" ? <span className="income"> +{amount}원</span> : <span className="deposit"> {amount}원</span>}
                를 받았나요?</p>
            </TitleWrapper>
            <ButtonWrapper>
                {type==="income" ?
                <>
                    <LeftButton onClick={handleNoBtnClick}>아뇨, 안 받았어요</LeftButton>
                    <RightButton onClick={handleYesBtnClick}>네, 받았어요</RightButton>
                </>
                :<>
                    <LeftButton onClick={handleNoBtnClick}>아뇨, 안 했어요</LeftButton>
                    <RightButton onClick={doneSaveBtnClick}>네, 저금했어요</RightButton>
                </>}
            </ButtonWrapper>
        </Wrapper>
    )
}