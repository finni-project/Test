import styled from "styled-components"
import ReactDOM from 'react-dom/client';
import Circles from "./Circle"
import React, { useEffect, useState } from "react"

const TopWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${({theme})=>theme.colors.neutral.n0};
    overflow-x: hidden;
`

const SideBackGround = styled.div`
    width: 50%;
    /* background-color: ${({theme})=>theme.colors.neutral.n0}; */
    /* opacity: 1; */
    /* z-index: 200; */
    div:first-child{
        height: calc(10.375rem);
    }
    div:last-child{
        height: calc(100% - 10.375rem);
        background-color: ${({theme})=>theme.colors.warning.surface};
    }
`

const Wrapper = styled.div`
    width: 23rem;
`

const TopBackGround = styled.div`
    width: 100%;
    height: 10.375rem;
    background-color: ${({theme})=>theme.colors.neutral.n0};
`

const BottomBackGround = styled.div`
    width: 100%;
    /* 수정 필요 */
    height: calc(50vh - 10.375rem);
    background-color: ${({theme})=>theme.colors.warning.surface};
`

const ProgressWrapper = styled.div`
    position: relative;
    /* background-color: aliceblue; */
    padding: 0 0.3rem;
    display: flex;
`

const PlateWrapper = styled.div`
    margin-right: 0.25rem;
    position: relative;
`

const Present = styled.img`
    position: absolute;
    left: 0;
    top: -3.1rem;
    z-index: 100;
`

const Progress = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    /* transform: translateX(-9.25rem); */
    transition-duration: 2s;
    /* transition-timing-function: ease; */
    /* transition-timing-function: ease-in; */
    /* 후보 */
    /* transition-timing-function: ease-out; */
    /* 후보 */
    transition-timing-function: ease-in-out;
    /* transition-timing-function: linear; */
` 

const Number = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${({theme})=>theme.colors.primary.main};
    border-radius: 62.4375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({theme})=>theme.fonts.headline22b}
    color: ${({theme})=>theme.colors.neutral.n0};
    position: absolute;
    top: -2.9rem;
    left: 0.4rem;
    &.flowing-number{
        transition-duration: 1s;
        transition-delay: 1s;
        transform: translateY(-4rem);
        /* transition-timing-function: ease; */
        /* 후보 */
        transition-timing-function: ease-in;
        /* transition-timing-function: ease-out; */
        /* transition-timing-function: ease-in-out; */
        /* 후보 */
        /* transition-timing-function: linear; */
    }
`

const SpeechBubleWrapper = styled.div`
    position: absolute;
    left: -1.85rem;
    top: -7.5rem;
    width: 6.75rem;
    height: 3.408rem;
    background-image: url("/public_assets/speech_bubble.png");
    /* background-color: aliceblue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        ${({theme})=>theme.fonts.label11b}
        color: ${({theme})=>theme.colors.primary.main};
    }
    span{
        ${({theme})=>theme.fonts.label13b}
    }
`

function getNumberArr(lastNum: number){
    let numberArr = [];
    for(let i=1; i<=lastNum; i++){
        numberArr.push(i);
    }
    return numberArr;
}

const doneGoal = 5;

export default function SavingProgress(){
    const [numberArr, setNumberArr] = useState<number[]>();

    useEffect(()=>{
        setNumberArr(getNumberArr(7));
    },[])

    const [leftNum, setLeftNum] = useState(1);

    useEffect(()=>{
        if(leftNum <= doneGoal-1){
            setTimeout(()=>{
                setLeftNum(leftNum + 1)
            }, 2300)
        }
    },[leftNum])

    return(
        <TopWrapper>
            <SideBackGround>
                <div/><div/>
            </SideBackGround>
            <Wrapper>
                <TopBackGround/>
                <BottomBackGround>
                    <ProgressWrapper>
                        <Present src="/public_assets/present.png" alt="present"/>
                        <Progress style={{ transform: `translateX(${-9.25 * (leftNum - 1)}rem)`}}>
                            {numberArr?.map(num =>
                            <React.StrictMode key={num}>
                                <Plate num={num} leftNum={leftNum}/>
                                {num !== numberArr[numberArr.length - 1] && <Circles/>}
                            </React.StrictMode>
                            )}
                        </Progress>
                    </ProgressWrapper>
                </BottomBackGround>
            </Wrapper>
            <SideBackGround>
                <div/><div/>
            </SideBackGround>
        </TopWrapper>
    )
}

type PlateProps = {
    num: number;
    leftNum: number;
}


export function Plate({num, leftNum}: PlateProps){
    return(
        <PlateWrapper>
            {num === doneGoal + 1 
            &&<SpeechBubleWrapper>
                <p>다음 목표까지</p>
                <span>3,000원</span>
            </SpeechBubleWrapper>}
            <Number className={num === leftNum ? "flowing-number" : undefined}>{num}</Number>
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="30" viewBox="0 0 54 30" fill="none">
                <ellipse cx="27" cy="17.7273" rx="27" ry="12.2727" fill="#D9A402"/>
                <rect y="11.8181" width="54" height="6.36364" fill="#D9A402"/>
                <ellipse cx="27" cy="12.2727" rx="27" ry="12.2727" fill="#FEDB72"/>
            </svg>
        </PlateWrapper>
    )
}