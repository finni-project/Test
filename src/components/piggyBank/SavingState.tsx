import styled from "styled-components";
import BottomSheet from "./BottomSheet";
import SavingProgress from "./SavingProgress";

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - ${({theme})=>theme.height.topbar} - ${({theme})=>theme.height.navbar});
`

export default function SavingState(){
    return(
        <Wrapper>
            <SavingProgress/>
            <BottomSheet/>
        </Wrapper>
    )
}