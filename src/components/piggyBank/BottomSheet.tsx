import { useState } from "react"
import styled from "styled-components"
import DeleteModal from "./DeleteModal"
import React from "react";

const TopWrapper = styled.div`
    position: absolute;
    /* top: ${({theme})=>theme.height.topbar}; */
    /* height: calc(100vh - ${({theme})=>theme.height.topbar}); */
    height: calc(15rem);
    /* bottom: calc(${({theme})=>theme.height.navbar} + 0rem); */
    bottom: ${({theme})=>theme.height.navbar};
    width: 100%;
    background-color: ${({theme})=>theme.colors.neutral.n0};
    /* background-color: aliceblue; */
    padding-left: 1rem;
    padding-right: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 200;
`

const DraggableSection = styled.div`
    cursor: pointer;
`

const BarWrapper = styled.div`
    height: 0.75rem;
    /* background-color: beige; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Bar = styled.div`
    width: 5rem;
    height: 0.1875rem;
    border-radius: 6.1875rem;
    background-color: #D9D9D9;
`

const Information = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: bisque; */
    span{
        color: ${({theme})=>theme.colors.primary.main};
        ${({theme})=>theme.fonts.body17b}
    }
    margin-bottom: 0.5rem;
`

const Goal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    h2{
        ${({theme})=>theme.fonts.title28b}
    }
    h3{
        ${({theme})=>theme.fonts.body17b}
    }
`

const SavingAmount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0rem;
    h2{
        color: ${({theme})=>theme.colors.neutral.n70};
        ${({theme})=>theme.fonts.label13r}
    }
    span{
        ${({theme})=>theme.fonts.body17r}
    }
`

const States = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid ${({theme})=>theme.colors.primary.sub};
    margin-bottom: 0.5rem;
`

const SavingState = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    h2{
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.label13r}
    }
    span{
        ${({theme})=>theme.fonts.body14b}
    }
`

const GoToSaveBtn = styled.button`
    ${({theme})=>theme.mediumBtns.secondary}
    width: 100%;
    ${({theme})=>theme.fonts.body14b}
`

const DoneSaveBtn = styled.button`
    ${({theme})=>theme.mediumBtns.primary}
    width: 100%;
    ${({theme})=>theme.fonts.body14b}
`

const RecordList = styled.div`
    h2{
        ${({theme})=>theme.fonts.label13b}
        padding: 0.5rem 0;
        /* background-color: tomato; */
    }
    /* background-color: aliceblue; */
`

const RecordItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
`

const RecordDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({theme})=>theme.fonts.body14r}
    span:first-child{
        color: ${({theme})=>theme.colors.neutral.n60};
    }
    gap: 0.5rem;
`

const RecordAmount = styled.span`
    color: ${({theme})=>theme.colors.neutral.n60};
    ${({theme})=>theme.fonts.body17m}
`

const DeleteBtn = styled.button`
    ${({theme})=>theme.mediumBtns.tertiary}
    width: 100%;
    margin-bottom: 0.5rem;
`

export default function BottomSheet(){
    const [heightSize, setHeightSize] = useState<number>(15);
    const [yetSave, setYetSave] = useState<boolean>(true);

    const [isDelete, setIsDelete] = useState<boolean>(false);

    function dragEventHandler(e: any){
        // const { target } = e;
        // const { parentNode } = target;
        // const parentBox = parentNode.getBoundingClientRect();
        const draggableSectionY = e.clientY;
        const bodyY = document.body.scrollHeight;
        const bottomSheetSize = bodyY - draggableSectionY - 69;
        if(draggableSectionY !== 0){
            if(draggableSectionY < 56){
                return;
            }
            if(bottomSheetSize < 240){
                return;
            }
            setHeightSize(bottomSheetSize / 16);
        }
    }

    function handleDeleteBtn(){
        setIsDelete(true);
    }

    return(
        <TopWrapper style={{height: heightSize + "rem"}}>
            <DraggableSection draggable="true" onDrag={dragEventHandler}>
                <BarWrapper>
                    <Bar/>
                </BarWrapper>
                <Information>
                    <Goal>
                        <h2>🎡</h2>
                        <h3>놀이공원</h3>
                    </Goal>
                    <span>Lv. 1</span>
                </Information>
                <SavingAmount>
                    <h2>현재까지 모은 금액</h2>
                    <span>0원</span>
                </SavingAmount>
                <States>
                    <SavingState>
                        <h2>저금 주기</h2>
                        <span>7일</span>
                    </SavingState>
                    <SavingState>
                        <h2>저금 액수</h2>
                        <span>10,000원</span>
                    </SavingState>
                    <SavingState>
                        <h2>저금 목표</h2>
                        <span>63,000원</span>
                    </SavingState>
                </States>
            </DraggableSection>
            {heightSize > 15
            ?<>
                <RecordList>
                    <h2>저금 기록</h2>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                    <RecordItem>
                        <RecordDate>
                            <span>2023.09.30</span>
                            <span>저금</span>
                        </RecordDate>
                        <RecordAmount>10,000원</RecordAmount>
                    </RecordItem>
                </RecordList>
                <DeleteBtn onClick={handleDeleteBtn}>삭제할래요</DeleteBtn>
            </>
            : undefined}
            {yetSave
            ?<GoToSaveBtn>
                저금하러 가기 
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.49953 15.8751L13.3795 11.9951L9.49953 8.1151C9.10953 7.7251 9.10953 7.0951 9.49953 6.7051C9.88953 6.3151 10.5195 6.3151 10.9095 6.7051L15.4995 11.2951C15.8895 11.6851 15.8895 12.3151 15.4995 12.7051L10.9095 17.2951C10.5195 17.6851 9.88953 17.6851 9.49953 17.2951C9.11953 16.9051 9.10953 16.2651 9.49953 15.8751Z" fill="#5E4EF4"/>
                </svg>
            </GoToSaveBtn>
            :<DoneSaveBtn>저금 완료!</DoneSaveBtn>
            }
            {isDelete &&
            <DeleteModal setIsDelete={setIsDelete}/>}
        </TopWrapper>
    )
}