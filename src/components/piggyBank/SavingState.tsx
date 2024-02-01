import styled from "styled-components";
import BottomSheet from "./BottomSheet";
import SavingProgress from "./SavingProgress";
import { useState } from "react";

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - ${({theme})=>theme.height.topbar} - ${({theme})=>theme.height.navbar});
`

export default function SavingState(){
    const [leftNum, setLeftNum] = useState<number>(1);

    return(
        <Wrapper>
            <SavingProgress leftNum={leftNum} setLeftNum={setLeftNum}/>
            <BottomSheet leftNum={leftNum}/>
        </Wrapper>
    )
}