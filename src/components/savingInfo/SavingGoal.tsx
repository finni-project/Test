import EmojiPicker from "../Picker";
import FormTop from "components/FormTop";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    /* background-color: #fff; */
    gap: 1rem;
    /* margin-bottom: 2rem; */
`

const IconWrapper = styled.div`
    border-radius: 62.4375rem;
    background-color: ${({theme})=>theme.colors.neutral.n15};
    width: 3.5rem;
    height: 3.5rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${({theme})=>theme.fonts.title28b};
`

const Form = styled.form`
    background-color: beige;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
`

const Input = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${({theme})=>theme.colors.neutral.n30};
    padding: 0.875rem 0rem;
    /* background-color: lightcyan; */
    ${({theme})=>theme.fonts.body14b}
    color: ${({theme})=>theme.colors.neutral.n100};
    &::placeholder{
        ${({theme})=>theme.fonts.body14r}
        color: ${({theme})=>theme.colors.neutral.n40};
    }
    &:focus{
        outline: none;
        border-bottom: 2px solid ${({theme})=>theme.colors.primary.main};
    }
`

const ElementWrapper = styled.div`
    /* background-color: bisque; */
    position: absolute;
    right: 0px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        ${({theme})=>theme.fonts.label11r};
        color: ${({theme})=>theme.colors.neutral.n60};
    }
`

const SvgWrapper = styled.div`
    svg{
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
    }
`

const PickerWrapper = styled.div`
    display: none;
    &.picker-visible{
        display: flex;
    }
`

const Button = styled.button`
    ${({theme})=>theme.mediumBtns.primary}
    width: calc(100% - 2rem);
    position: fixed;
    bottom: calc(${({theme})=>theme.height.navbar} + 0.5rem);
`

export default function SavingGoal(){
    const [input, setInput] = useState<string>("");
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        const val = e.target.value;
        setInput(val);
    }

    const [notTyped, setNotTyped] = useState<boolean>(true);

    const [inputLength, setInputLength] = useState<number>(0);
    function handleDeleteClick(){
        setInput("");
    }

    const [isPickerVisible, setPickerVisible] = useState<boolean>(false)
    function handleIconClick(){
        setPickerVisible(!isPickerVisible)
    }

    const [currentEmoji, setCurrentEmoji] = useState<string>("")
    function handleEmojiPick(e:any){
        setCurrentEmoji(e.native);
        setPickerVisible(!isPickerVisible);
    }

    const [disabled, SetDisabled] = useState<boolean>(true);

    useEffect(()=>{
        const len = input.length;
        if(len > 0){
            setInputLength(len);
            setNotTyped(false);
            if(len > 6){
                setInput(input.substring(0,6));
            }
            if(currentEmoji){
                SetDisabled(false);
            }
        }else{
            setNotTyped(true);
            setInputLength(0)
        }
    },[input, currentEmoji])

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleNextBtnClick(){
        dispatch({type: "GET_SAVING_GOAL", payload: {emogi: currentEmoji, text: input} });
        navigate("/savingInfo/total");
    }

    return(
        <>
            <FormTop type="saving" step="third" text="저금 목표" title="저금한 돈으로 뭘 하고 싶어요?" detail={undefined}/>
            <InputWrapper>
                <IconWrapper onClick={handleIconClick}>
                    {currentEmoji === ""
                    ?<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12.2617C4 11.9167 4.1237 11.6204 4.37109 11.373C4.61849 11.1257 4.91471 11.002 5.25977 11.002H11.0117V5.25977C11.0117 4.91471 11.1322 4.61849 11.373 4.37109C11.6139 4.1237 11.9102 4 12.2617 4C12.6068 4 12.903 4.1237 13.1504 4.37109C13.3978 4.61849 13.5215 4.91471 13.5215 5.25977V11.002H19.2734C19.612 11.002 19.9049 11.1257 20.1523 11.373C20.3997 11.6204 20.5234 11.9167 20.5234 12.2617C20.5234 12.6133 20.3997 12.9128 20.1523 13.1602C19.9049 13.401 19.612 13.5215 19.2734 13.5215H13.5215V19.2734C13.5215 19.612 13.3978 19.9049 13.1504 20.1523C12.903 20.3997 12.6068 20.5234 12.2617 20.5234C11.9102 20.5234 11.6139 20.3997 11.373 20.1523C11.1322 19.9049 11.0117 19.612 11.0117 19.2734V13.5215H5.25977C4.91471 13.5215 4.61849 13.401 4.37109 13.1602C4.1237 12.9128 4 12.6133 4 12.2617Z" fill="#777777"/>
                    </svg>
                    :currentEmoji}
                </IconWrapper>
                <Form>
                    <Input type="text" placeholder="이름을 입력해주세요" value={input} maxLength={6} onChange={handleInputChange}/>
                    <ElementWrapper>
                        <span>{inputLength}/6</span>
                        {!notTyped?
                        <SvgWrapper onClick={handleDeleteClick}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21C10.7689 21 9.60978 20.764 8.52253 20.2921C7.43528 19.8259 6.47747 19.1784 5.64909 18.3496C4.82071 17.5209 4.17066 16.5655 3.69895 15.4835C3.23298 14.3957 3 13.2331 3 11.9957C3 10.764 3.23298 9.60719 3.69895 8.52518C4.17066 7.43741 4.81783 6.47914 5.64046 5.65036C6.46884 4.82158 7.42665 4.1741 8.5139 3.70791C9.60115 3.23597 10.7603 3 11.9914 3C13.2224 3 14.3816 3.23597 15.4688 3.70791C16.5618 4.1741 17.5197 4.82158 18.3423 5.65036C19.1707 6.47914 19.8207 7.43741 20.2924 8.52518C20.7641 9.60719 21 10.764 21 11.9957C21 13.2331 20.7641 14.3957 20.2924 15.4835C19.8207 16.5655 19.1707 17.5209 18.3423 18.3496C17.5197 19.1784 16.5647 19.8259 15.4775 20.2921C14.3902 20.764 13.2311 21 12 21ZM9.21285 15.6734C9.47747 15.6734 9.69895 15.5871 9.87728 15.4144L12.0086 13.2734L14.1486 15.4144C14.3154 15.5871 14.5283 15.6734 14.7872 15.6734C15.0403 15.6734 15.2531 15.5871 15.4257 15.4144C15.5983 15.2417 15.6846 15.0288 15.6846 14.7755C15.6846 14.5281 15.5954 14.3209 15.4171 14.154L13.2685 12.0043L15.4257 9.85468C15.5983 9.67626 15.6846 9.46906 15.6846 9.23309C15.6846 8.97986 15.5983 8.76978 15.4257 8.60288C15.2589 8.43022 15.0518 8.34388 14.8044 8.34388C14.5513 8.34388 14.3384 8.43022 14.1659 8.60288L12.0086 10.7525L9.86002 8.61151C9.68169 8.43885 9.46596 8.35252 9.21285 8.35252C8.96548 8.35252 8.75551 8.43885 8.58293 8.61151C8.41611 8.77842 8.33269 8.98849 8.33269 9.24173C8.33269 9.4777 8.41898 9.68201 8.59156 9.85468L10.7488 12.0043L8.59156 14.1626C8.41898 14.3353 8.33269 14.5396 8.33269 14.7755C8.33269 15.0288 8.41611 15.2417 8.58293 15.4144C8.75551 15.5871 8.96548 15.6734 9.21285 15.6734Z" fill="#B7B7B7"/>
                            </svg>
                        </SvgWrapper>
                        :undefined
                        }
                    </ElementWrapper>
                </Form>
            </InputWrapper>
            <PickerWrapper className={isPickerVisible ? "picker-visible" : undefined}>
                <EmojiPicker handleEmojiPick={handleEmojiPick}/>
            </PickerWrapper>
            <Button onClick={handleNextBtnClick} data-disabled={disabled}>다음으로</Button>
        </>
    )
}