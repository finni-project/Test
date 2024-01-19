import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: lemonchiffon;
    min-height: 100vh;
    /* padding-top: calc(${({theme})=>theme.height.topbar} + ${({theme})=>theme.height.topPadding}); */
    /* padding-left: 1rem;
    padding-bottom: calc(${({theme})=>theme.height.navbar} + ${({theme})=>theme.height.bottomPadding});
    padding-right: 1rem; */
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