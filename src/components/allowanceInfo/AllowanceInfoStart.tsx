import { Link } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    height: calc(100vh - 3.5rem);
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgb(173, 216, 230); */
    padding: 2rem 0rem 0.5rem 0rem;
    p{
        /* background-color: aliceblue; */
        ${({theme}) => theme.fonts.headline22b}
        color: ${({theme}) => theme.colors.neutral.n100};
        text-align: center;
        padding: 0rem 1rem;
    }
`

export default function AllowanceInfoStart(){
    return(
        <Wrapper>
            <Link to='/allowanceInfo/cycle'>
                <p>용돈을 주기적으로 입력하기 위해서 몇 가지 질문을 할게요</p>
            </Link>
        </Wrapper>
    )
}