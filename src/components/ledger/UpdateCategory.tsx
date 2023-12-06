import { useEffect, useState } from "react";
import styled from "styled-components"
import EmojiPicker from "../Picker"
import AddingCategory from "components/allowanceInfo/AddingCategory";


const EditWrapper = styled.div`
    display: flex;
    /* background-color: beige; */
    align-items: center;
    gap: 1rem;
`

const EmogiWrapper = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 62.4375rem;
    padding: 0.6875rem 0.875rem;
    background-color: ${({theme})=>theme.colors.neutral.n15};
    display: flex;
    justify-content: center;
    align-items: center;
    ${({theme})=>theme.fonts.title28b}
    cursor: pointer;
`

const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
    input{
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
    }
    span{
        position: absolute;
        right: calc(0.625rem + 1.5rem + 0.625rem);
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.label11r}
    }
    svg{
        position: absolute;
        right: 0;
        margin: 0.625rem;
        cursor: pointer;
    }
`

const PickerWrapper = styled.div`
    display: none;
    background-color: beige;
    &.picker-visible{
        display: flex;
    }
`

const ButtonWrapper = styled.div`
    /* position: fixed; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100vw - 2 * (1rem) );
    /* bottom: 1rem; */
    gap: 0.5rem;
    button:first-child{
        ${({theme})=>theme.mediumBtns.tertiary}
        white-space: nowrap;
    }
    button:last-child{
        ${({theme})=>theme.mediumBtns.primary}
        width: 100%;
    }
`

type UpdateCategoryProps  = {
    pickedCategory: {
        id: number,
        emogi: string,
        name: string
    }
}

export default function UpdateCategory({ pickedCategory }: UpdateCategoryProps){
    const emogi = pickedCategory.emogi;
    const name = pickedCategory.name;

    const [input, setInput] = useState(name);
    const [inputLength, setInputLength] = useState(0);
    
    function handleInputChange(e: any){
        const val = e.target.value;
        setInput(val);
    }

    function handleDeleteClick(){
        setInput("")
    }

    const [saveDisabled, setSaveDisabled] = useState(true);

    const [isPickerVisible, setPickerVisible] = useState<boolean>(false);
    function handleIconClick(){
        setPickerVisible(!isPickerVisible)
    }

    const [currentEmoji, setCurrentEmoji] = useState<string>(emogi);
    function handleEmojiPick(e:any){
        setCurrentEmoji(e.native);
        setPickerVisible(!isPickerVisible);
    }

    useEffect(()=>{
        const len = input.length;
        if(len > 6){
            setInput(input.substring(0,6));
        }
        setInputLength(len);
    },[input])

    useEffect(()=>{
        name === input && emogi === currentEmoji? setSaveDisabled(true) : setSaveDisabled(false);
    },[input, currentEmoji])

    return(
        <>
            <EditWrapper>
                <EmogiWrapper onClick={handleIconClick}>{currentEmoji}</EmogiWrapper>
                <InputWrapper>
                    <input type="text" value={input} onChange={handleInputChange}/>
                    <span>{inputLength}/6</span>
                    <svg onClick={handleDeleteClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C10.7689 21 9.60978 20.764 8.52253 20.2921C7.43528 19.8259 6.47747 19.1784 5.64909 18.3496C4.82071 17.5209 4.17066 16.5655 3.69895 15.4835C3.23298 14.3957 3 13.2331 3 11.9957C3 10.764 3.23298 9.60719 3.69895 8.52518C4.17066 7.43741 4.81783 6.47914 5.64046 5.65036C6.46884 4.82158 7.42665 4.1741 8.5139 3.70791C9.60115 3.23597 10.7603 3 11.9914 3C13.2224 3 14.3816 3.23597 15.4688 3.70791C16.5618 4.1741 17.5197 4.82158 18.3423 5.65036C19.1707 6.47914 19.8207 7.43741 20.2924 8.52518C20.7641 9.60719 21 10.764 21 11.9957C21 13.2331 20.7641 14.3957 20.2924 15.4835C19.8207 16.5655 19.1707 17.5209 18.3423 18.3496C17.5197 19.1784 16.5647 19.8259 15.4775 20.2921C14.3902 20.764 13.2311 21 12 21ZM9.21285 15.6734C9.47747 15.6734 9.69895 15.5871 9.87728 15.4144L12.0086 13.2734L14.1486 15.4144C14.3154 15.5871 14.5283 15.6734 14.7872 15.6734C15.0403 15.6734 15.2531 15.5871 15.4257 15.4144C15.5983 15.2417 15.6846 15.0288 15.6846 14.7755C15.6846 14.5281 15.5954 14.3209 15.4171 14.154L13.2685 12.0043L15.4257 9.85468C15.5983 9.67626 15.6846 9.46906 15.6846 9.23309C15.6846 8.97986 15.5983 8.76978 15.4257 8.60288C15.2589 8.43022 15.0518 8.34388 14.8044 8.34388C14.5513 8.34388 14.3384 8.43022 14.1659 8.60288L12.0086 10.7525L9.86002 8.61151C9.68169 8.43885 9.46596 8.35252 9.21285 8.35252C8.96548 8.35252 8.75551 8.43885 8.58293 8.61151C8.41611 8.77842 8.33269 8.98849 8.33269 9.24173C8.33269 9.4777 8.41898 9.68201 8.59156 9.85468L10.7488 12.0043L8.59156 14.1626C8.41898 14.3353 8.33269 14.5396 8.33269 14.7755C8.33269 15.0288 8.41611 15.2417 8.58293 15.4144C8.75551 15.5871 8.96548 15.6734 9.21285 15.6734Z" fill="#B7B7B7"/>
                    </svg>
                </InputWrapper>
            </EditWrapper>
            <PickerWrapper className={isPickerVisible ? "picker-visible" : undefined}>
                <EmojiPicker handleEmojiPick={handleEmojiPick}/>
            </PickerWrapper>
            <ButtonWrapper>
                <button>삭제</button>
                <button data-disabled={saveDisabled}>저장</button>
            </ButtonWrapper>
        </>
    )
}