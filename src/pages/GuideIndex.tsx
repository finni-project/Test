import Modal from "components/Modal";
import { useState } from "react";
import styled from "styled-components";

const PMBtn = styled.button`
    ${({theme})=>theme.mediumBtns.primary}
`
const PLBtn = styled.button`
    ${({theme})=>theme.largeBtns.primary}
`
const SMBtn = styled.button`
    ${({theme})=>theme.mediumBtns.secondary}
`
const SLBtn = styled.button`
    ${({theme})=>theme.largeBtns.secondary}
`
const TMBtn = styled.button`
    ${({theme})=>theme.mediumBtns.tertiary}
`
const TLBtn = styled.button`
    ${({theme})=>theme.largeBtns.tertiary}
`
const DMBtn = styled.button`
    ${({theme})=>theme.mediumBtns.delete}
`
const DLBtn = styled.button`
    ${({theme})=>theme.largeBtns.delete}
`
const BtnWrapper = styled.div`
    /* background-color: lightblue; */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

export default function GuideIndex(){
    const [disabledActive, setDisabledActive] = useState(false);
    const handleInputClick = () => {
        setDisabledActive(!disabledActive)
    }

    return(
        <>
            <h2>modal</h2>
            <Modal/>
            <br/>
            <input type="checkbox" onChange={handleInputClick} />
            <span>체크시 disabled!</span>
            <h2>medium button</h2>
            <BtnWrapper>
                <PMBtn data-disabled={disabledActive}>
                    버튼
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z"
                        fill="#FFFFFF"/>
                    </svg>
                </PMBtn>
                <SMBtn data-disabled={disabledActive}>
                    버튼
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z"
                        fill="#5E4EF4"/>
                    </svg>
                </SMBtn>
                <TMBtn data-disabled={disabledActive}>
                    버튼
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z"
                        fill="#777777"/>
                    </svg>
                </TMBtn>
                <DMBtn data-disabled={disabledActive}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z"
                        fill="#FFFFFF"/>
                    </svg>
                    버튼
                </DMBtn>
            </BtnWrapper>
            <h2>large button</h2>
            <BtnWrapper>
                <PLBtn data-disabled={disabledActive}>
                    버튼
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z"
                        fill="#FFFFFF"/>
                    </svg>
                </PLBtn>
                <SLBtn data-disabled={disabledActive}>
                    버튼
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z"
                        fill="#5E4EF4"/>
                    </svg>
                </SLBtn>
                <TLBtn data-disabled={disabledActive}>
                    버튼
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z"
                        fill="#777777"/>
                    </svg>
                </TLBtn>
                <DLBtn data-disabled={disabledActive}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z"
                        fill="#FFFFFF"/>
                    </svg>
                    버튼
                </DLBtn>
            </BtnWrapper>
        </>
    )
}