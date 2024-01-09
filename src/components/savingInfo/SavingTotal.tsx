import FormTop from "components/FormTop";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EditWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonWrapper = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    span{
        color: ${({theme}) => theme.colors.neutral.n100};
        ${({theme}) => theme.fonts.body17b}
    }
    height: 3.25rem;
    padding: 0.875rem 0rem;
    /* margin-bottom: 15.563rem; */
    cursor: pointer;
    /* background-color: cadetblue; */
`

const Form = styled.div`
    background-color: aliceblue;
    /* margin-bottom: 15.563rem; */
    border-bottom: 2px solid ${({theme})=>theme.colors.primary.main};
    background-color: ${({theme})=>theme.colors.neutral.n0};
    height: 3.25rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 15.563rem; */
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        ${({theme})=>theme.fonts.body17b};
    }
    span{
        ${({theme})=>theme.fonts.body17b};
    }
    margin-bottom: 1.688rem;
`

const Input = styled.input`
    width: 100%;
    border-width: 0;
    &:focus{
        outline: none;
    }
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin : 0;
    }
    /* Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }
    /* background-color: lightcyan; */
    ${({theme})=>theme.fonts.body17b}
    color: ${({theme})=>theme.colors.neutral.n100};
`

const DeleteBtnWrapper = styled.div`
    padding: 0.625rem;
    /* background-color: beige; */
    cursor: pointer;
    svg{
        pointer-events: none;
    }
`

const NextButton = styled.button`
    width: calc(100% - 2rem);
    ${({theme}) => theme.mediumBtns.primary};
    position: fixed;
    bottom: calc(${({theme})=>theme.height.navbar} + 0.5rem);
`

const Caution = styled.div`
    margin-top: calc(10.69rem - 1.688rem);
    width: 100%;
    height: 2.75rem;
    border-radius: 0.5rem;
    border: 1px solid #FDA29B;
    background-color: #FEF3F2;
    box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.06), 0px 1px 2px 0px rgba(65, 65, 65, 0.04);
    backdrop-filter: blur(34px);
    display: flex;
    align-items: center;
    gap: 0.38rem;
    padding: 0.625rem 1rem 0.625rem 0.75rem;
    svg{
        margin: 0.09375rem 0.0625rem 0.21875rem 0.0625rem;
    }
    p{
        color: ${({theme})=>theme.colors.danger.main};
        ${({theme})=>theme.fonts.body14m}
    }
`

export default function SavingTotal(){
    const [notEdited, setNotEdited] = useState<boolean>(true);
    function handleEditBtnClick(){
        setNotEdited(!notEdited)
    }

    const [input, setInput] = useState<string>("")
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        const val = e.target.value;
        const numVal = Number(val);
        if(val && numVal > 0){
            setInput(val);
            if(numVal >= amountTotal){
                setBtnDisabled(false);
            }else{
                setBtnDisabled(true);
            }
        } else{
            setInput("")
            setBtnDisabled(true);
        }
    }
    function handleIconClick(){
        setInput("");
        setBtnDisabled(true);
    }

    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

    const result = useSelector((state:any)=>state.savingInfo);
    const amountTotal = result.amount * 5;
    const amountTotalStr = amountTotal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleStartBtnClick(){
        dispatch({type: "GET_SAVING_TOTAL", payload: input });
        // navigate("");
    }

    const [compareRes, setCompareRes] = useState(false);

    useEffect(()=>{
        if(Number(input) < amountTotal)
        Number(input) < amountTotal? setCompareRes(true): setCompareRes(false);
    },[input])

    return(
        <>
            {result.cycle},{result.amount},{result.goalEmogi},{result.goalText}
            <FormTop type="saving" step="fourth" text="목표 금액" title="총 얼마를 저금하고 싶어요?" detail={`최소 금액은 ${amountTotalStr}(저금금액X5)원이에요.`}/>
            {notEdited?
            (
            <EditWrapper>
                <ButtonWrapper onClick={handleEditBtnClick}>
                    <span>{input.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 15.6403V17.6667C6 17.8534 6.14665 18 6.33329 18H8.35967C8.44633 18 8.53298 17.9667 8.59297 17.9L15.872 10.6277L13.3723 8.12804L6.09999 15.4004C6.03333 15.467 6 15.547 6 15.6403Z" fill="#B7B7B7"/>
                        <path d="M17.805 7.75476L16.2452 6.19497C15.9853 5.93501 15.5653 5.93501 15.3054 6.19497L14.0855 7.4148L16.5852 9.91446L17.805 8.69463C18.065 8.43466 18.065 8.01472 17.805 7.75476Z" fill="#B7B7B7"/>
                    </svg>
                </ButtonWrapper>
            </EditWrapper>
            ):(<>
                <Form>
                    {/* 수정가능 부분 */}
                    <Input type="number" autoFocus name="allowanceCycle" value={input} onChange={handleInputChange} />
                    <span>원</span>
                    <DeleteBtnWrapper onMouseDown={handleIconClick}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21C10.7689 21 9.60978 20.764 8.52253 20.2921C7.43528 19.8259 6.47747 19.1784 5.64909 18.3496C4.82071 17.5209 4.17066 16.5655 3.69895 15.4835C3.23298 14.3957 3 13.2331 3 11.9957C3 10.764 3.23298 9.60719 3.69895 8.52518C4.17066 7.43741 4.81783 6.47914 5.64046 5.65036C6.46884 4.82158 7.42665 4.1741 8.5139 3.70791C9.60115 3.23597 10.7603 3 11.9914 3C13.2224 3 14.3816 3.23597 15.4688 3.70791C16.5618 4.1741 17.5197 4.82158 18.3423 5.65036C19.1707 6.47914 19.8207 7.43741 20.2924 8.52518C20.7641 9.60719 21 10.764 21 11.9957C21 13.2331 20.7641 14.3957 20.2924 15.4835C19.8207 16.5655 19.1707 17.5209 18.3423 18.3496C17.5197 19.1784 16.5647 19.8259 15.4775 20.2921C14.3902 20.764 13.2311 21 12 21ZM9.21285 15.6734C9.47747 15.6734 9.69895 15.5871 9.87728 15.4144L12.0086 13.2734L14.1486 15.4144C14.3154 15.5871 14.5283 15.6734 14.7872 15.6734C15.0403 15.6734 15.2531 15.5871 15.4257 15.4144C15.5983 15.2417 15.6846 15.0288 15.6846 14.7755C15.6846 14.5281 15.5954 14.3209 15.4171 14.154L13.2685 12.0043L15.4257 9.85468C15.5983 9.67626 15.6846 9.46906 15.6846 9.23309C15.6846 8.97986 15.5983 8.76978 15.4257 8.60288C15.2589 8.43022 15.0518 8.34388 14.8044 8.34388C14.5513 8.34388 14.3384 8.43022 14.1659 8.60288L12.0086 10.7525L9.86002 8.61151C9.68169 8.43885 9.46596 8.35252 9.21285 8.35252C8.96548 8.35252 8.75551 8.43885 8.58293 8.61151C8.41611 8.77842 8.33269 8.98849 8.33269 9.24173C8.33269 9.4777 8.41898 9.68201 8.59156 9.85468L10.7488 12.0043L8.59156 14.1626C8.41898 14.3353 8.33269 14.5396 8.33269 14.7755C8.33269 15.0288 8.41611 15.2417 8.58293 15.4144C8.75551 15.5871 8.96548 15.6734 9.21285 15.6734Z" fill="#B7B7B7"/>
                        </svg>
                    </DeleteBtnWrapper>
                </Form>
                {compareRes
                &&(<Caution>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.73804 17.4979C1.96611 18.8313 2.92823 20.5 4.46889 20.5H19.5311C21.0718 20.5 22.0339 18.8313 21.262 17.4979L13.7309 4.48965C12.9605 3.15908 11.0395 3.15908 10.2691 4.48965L2.73804 17.4979Z" fill="#F04438"/>
                        <rect x="11" y="9" width="2" height="5" rx="1" fill="white"/>
                        <path d="M13 16.5C13 15.9477 12.5523 15.5 12 15.5C11.4477 15.5 11 15.9477 11 16.5C11 17.0523 11.4477 17.5 12 17.5C12.5523 17.5 13 17.0523 13 16.5Z" fill="white"/>
                    </svg>
                    <p>최소 금액보다 높아야 해요.</p>
                </Caution>)}
            </>)}
            <NextButton onClick={handleStartBtnClick} data-disabled={btnDisabled}>시작하기</NextButton>
        </>
    )
}