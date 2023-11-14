import { Link } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    height: calc(100vh - ${({theme}) => theme.height.topbar} - ${({theme}) => theme.height.topPadding}
        - ${({theme}) => theme.height.navbar} - ${({theme}) => theme.height.bottomPadding});
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgb(173, 216, 230); */
    p{
        /* background-color: lightgreen; */
        ${({theme}) => theme.fonts.headline22b}
        color: ${({theme}) => theme.colors.neutral.n100};
        text-align: center;
        cursor: pointer;
    }
`

export default function AllowanceInfoStart(){
    return(
        <Wrapper>
            <p>용돈을 주기적으로 입력하기 위해서 몇 가지 질문을 할게요</p>
        </Wrapper>
    )
}