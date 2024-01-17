import Lottie from "lottie-react";
import clapping from "../../src_assets/simple_clapping.json"
import styled from "styled-components";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
    /* background-color: aliceblue; */
    height: calc(100vh - ${({theme})=>theme.height.topPadding} - ${({theme})=>theme.height.topbar} - ${({theme})=>theme.height.navbar});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Compliment = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    p{
        ${({theme})=>theme.fonts.title28b}
    }
`

const BottomText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        ${({theme})=>theme.fonts.title28b}
    }
    span{
        color:  ${({theme})=>theme.colors.primary.main};
    }
`

export default function FirstComplete(){
    const [count, setCount] = useState(0);
    const goalAmout = 63000;

    function addComma(money: number){
        let returnString = money?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return returnString;
    };
    
    useEffect(()=>{
        setTimeout(()=>{
            if(count < goalAmout){
                setCount(count + 1000);
            } else{
                return;
            }
        },10)
    },[count])

    return(
        <Wrapper>
            <Compliment>
                {/* <Lottie animationData={clapping} /> */}
                <p>👏🏻👏🏻 잘했어요!</p>
                <BottomText>
                    <p>놀이공원을 위해</p>
                    <p><span>{addComma(count)}원</span> 저금했어요!</p>
                </BottomText>
            </Compliment>
        </Wrapper>
    )
}