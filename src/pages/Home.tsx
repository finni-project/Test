import Navbar from "components/Navbar"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
   h1{
        ${({theme}) => theme.fonts.title34b}
        @media ${({theme}) => theme.devices.mobile} {
            color: ${({theme}) => theme.colors.primary.main}
        }
        @media ${({theme}) => theme.devices.desktop} {
            color: ${({theme}) => theme.colors.warning.main}
        }
    }
`

export default function Home(){
    return(
        <Wrapper>
            <h1>Home</h1>
            {/* <ul>
                <Link to='/login'><li>로그인</li></Link>
                <Link to='/ledger'><li>Ledger</li></Link>
                <Link to='/piggyBank'><li>PiggyBank</li></Link>
                <Link to='/economyClass'><li>EconomyClass</li></Link>
                <Link to='/myPage'><li>MyPage</li></Link>
            </ul> */}
            <Navbar />
        </Wrapper>
    )
}