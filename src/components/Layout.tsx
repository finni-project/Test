import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: lemonchiffon;
    padding: calc(${({theme})=>theme.height.topbar} + ${({theme})=>theme.height.topPadding}) 1rem
        calc(${({theme})=>theme.height.navbar} + ${({theme})=>theme.height.bottomPadding}) 1rem;
`

export default function Layout(){
    return(
        <>
            <Topbar />
            <Wrapper>
                <Outlet />
            </Wrapper>
            <Navbar />
        </>
    )
}