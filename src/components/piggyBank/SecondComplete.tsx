import Lottie from "lottie-react";
import present from "../../src_assets/present.json"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Wrapper = styled.div`
    padding-top: calc(${({theme})=>theme.height.topbar} + ${({theme})=>theme.height.topPadding});
    height: calc(100vh - ${({theme})=>theme.height.navbar});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: aliceblue; */
`

const PresentWrapper = styled.div`
    width: 15.5rem;
    height: 15.5rem;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
        ${({theme})=>theme.fonts.title28b}
    }
    transform: translateY(-3rem);
`

export default function SecondComplete(){
    const navigate = useNavigate();
    
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/piggyBank/complete/third")
        },5000)
    },[])
    
    return(
        <Wrapper>
            <PresentWrapper>
                <Lottie animationData={present} />
            </PresentWrapper>
            <Text>
                <span>두근두근</span>
                <span>뭐가 들어 있을까요?</span>
            </Text>
        </Wrapper>
    )
}