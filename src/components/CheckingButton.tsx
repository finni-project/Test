import styled from "styled-components"
import {useState} from "react"
import { useDispatch } from "react-redux"
import { CheckBtns } from "model/model"
import { useLocation, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const ButtonsWrapper = styled.div`
    /* background-color: beige; */
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const Button = styled.button`
    width: 100%;
    border: 0;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.875rem 1rem;
    background-color: ${({theme}) => theme.colors.neutral.n15};
    cursor: pointer;
    span{
        color: ${({theme}) => theme.colors.neutral.n100};
        ${({theme}) => theme.fonts.body14m}
        pointer-events: none;
    }
    svg{
        pointer-events: none;
    }
    .checked{
        path{
            fill: ${({theme}) => theme.colors.primary.main};
        }
    }
`
const TypingButton = styled.button`
    width: 100%;
    border: 0;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.9375rem 1.5rem;
    background-color: ${({theme}) => theme.colors.neutral.n20};
    cursor: pointer;
    &[data-disabled=true]{
        pointer-events: none;
    }
    span{
        color: ${({theme}) => theme.colors.neutral.n60};
        ${({theme}) => theme.fonts.body14b}
        /* background-color: lightpink; */
    }
`
const NextButton = styled.button`
    width: 100%;
    ${({theme}) => theme.mediumBtns.primary};
    margin-bottom: 2rem;
`


type CheckingButtonProps = {
    buttonArr: CheckBtns
    setNotTyping: React.Dispatch<React.SetStateAction<boolean>>;
    nextPage: string;
}

export default function CheckingButton({ nextPage, buttonArr, setNotTyping}:CheckingButtonProps){
    const [buttonState, setButtonState] = useState<CheckBtns>(buttonArr);
    function handleButtonClick(e: any){
        const btnId = e.target.id;
        setButtonState(
            buttonState.map(itm => itm.id+"" === btnId ? {...itm, active: true} : {...itm, active: false})
        );
        setBtnDisabled(false);
    }

    function handleTypingBtnClick(){
        setButtonState(
            buttonState.map(itm => ({...itm, active: false}))
        );
        setNotTyping(false);
        setBtnDisabled(true);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    function handleNextClick(){
        const btnType = buttonState.filter(itm => itm.active === true)[0].text;
        switch(location.pathname){
            case "/savingInfo/cycle"
            :{
                dispatch({type: "GET_SAVING_CYCLE", payload: btnType});
            }
        }
        navigate(nextPage);
    }

    const [btnDisabled, setBtnDisabled] = useState(true);

    return(
        <>
            <ButtonsWrapper>
                {buttonState.map((btn) => {
                    return(
                        <Button id={btn.id+''} data-disabled={false} onClick={handleButtonClick}>
                            <span>{btn.text}</span>
                            <svg className={btn.active? "checked" : undefined}
                                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2697 20.7588C11.0373 20.7588 9.87875 20.523 8.79404 20.0514C7.70933 19.5855 6.75239 18.9378 5.92324 18.1082C5.09409 17.2844 4.44383 16.3298 3.97246 15.2446C3.50677 14.1594 3.27393 12.9974 3.27393 11.7588C3.27393 10.5258 3.50677 9.36674 3.97246 8.28152C4.44383 7.19629 5.09125 6.2389 5.91472 5.40936C6.74387 4.57981 7.70081 3.93208 8.78552 3.46618C9.87591 2.99458 11.0373 2.75879 12.2697 2.75879C13.502 2.75879 14.6606 2.99458 15.7453 3.46618C16.8357 3.93208 17.7926 4.57981 18.6161 5.40936C19.4452 6.2389 20.0955 7.19629 20.5669 8.28152C21.0382 9.36674 21.2739 10.5258 21.2739 11.7588C21.2739 12.9974 21.0382 14.1594 20.5669 15.2446C20.0955 16.3298 19.4452 17.2844 18.6161 18.1082C17.7926 18.9378 16.8385 19.5855 15.7538 20.0514C14.6691 20.523 13.5077 20.7588 12.2697 20.7588ZM11.3326 16.0287C11.52 16.0287 11.6904 15.9861 11.8437 15.9008C12.0027 15.8099 12.139 15.6821 12.2526 15.5173L16.2138 9.46618C16.282 9.35822 16.3359 9.24743 16.3757 9.13379C16.4211 9.02015 16.4438 8.90936 16.4438 8.8014C16.4438 8.54004 16.3444 8.32413 16.1457 8.15368C15.9526 7.98322 15.7283 7.89799 15.4727 7.89799C15.1376 7.89799 14.8565 8.07981 14.6293 8.44345L11.3156 13.719L9.8248 11.8952C9.71122 11.7531 9.59196 11.6508 9.46702 11.5883C9.34775 11.5258 9.20862 11.4946 9.0496 11.4946C8.79404 11.4946 8.57255 11.5883 8.38514 11.7758C8.19773 11.9577 8.10402 12.1792 8.10402 12.4406C8.10402 12.5656 8.12674 12.6849 8.17217 12.7986C8.21761 12.9122 8.2886 13.0287 8.38514 13.148L10.3785 15.5344C10.5148 15.6991 10.6596 15.8241 10.813 15.9094C10.9663 15.9889 11.1395 16.0287 11.3326 16.0287Z"
                                fill="#B7B7B7"/>
                            </svg>
                        </Button>
                )})}
                <TypingButton onClick={handleTypingBtnClick}>
                    <span>제가 직접 입력할게요</span>
                </TypingButton>
            </ButtonsWrapper>
            <NextButton data-disabled={btnDisabled} onClick={handleNextClick}>다음으로</NextButton>
        </>
    )
}