import { Link } from "react-router-dom"
import styled from "styled-components"

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: aliceblue; */
    height: calc(100vh - ${({theme}) => theme.height.topbar} - ${({theme}) => theme.height.topPadding}
        - ${({theme}) => theme.height.navbar} - ${({theme}) => theme.height.bottomPadding} - 3.25rem);
`

const BoldText = styled.p`
    ${({theme})=>theme.fonts.headline22b}
`

const WordsWrapper = styled.div`
    display: flex;
    align-items: center;
    .can{
        ${({theme})=>theme.fonts.headline22b}
    }
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`

const GoalsWrapper = styled.div`
    p{
        ${({theme})=>theme.fonts.headline20b}
        opacity: 0.1;
    }
    .target-goal{
        font-family: SF Pro;
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75rem; /* 127.273% */
        letter-spacing: 0.022rem;
        opacity: 1;
    }
`

const Button = styled.button`
    ${({theme})=>theme.mediumBtns.primary}
    width: 100%;

`

export default function PiggyBankStart(){
    return(
        <>
            <Intro>
                <BoldText>돈을 차곡차곡 모으면</BoldText>
                <WordsWrapper>
                    <GoalsWrapper>
                        <p>🎁 가족에게 선물할</p>
                        <p>🎡 놀이공원에 갈</p>
                        <p className="target-goal">🎪 콘서트를 보러갈</p>
                        <p>⚾ 야구경기를 보러갈</p>
                        <p>📱 아이폰을 살</p>
                    </GoalsWrapper>
                    <p className="can">수 있어요</p>
                </WordsWrapper>
                <BoldText>FiNNi가 저금하도록 도와줄게요!</BoldText>
            </Intro>
            <Link to="/savingInfo/cycle"><Button>지금 시작하기</Button></Link>
        </>
    )
}