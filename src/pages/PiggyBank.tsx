import BottomSheet from "components/piggyBank/BottomSheet"
import SavingProgress from "components/piggyBank/SavingProgress"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components"


const Wrapper = styled.div`
    padding-left: 1rem;
    padding-bottom: calc(${({theme})=>theme.height.navbar} + ${({theme})=>theme.height.bottomPadding});
    padding-right: 1rem;
`

export default function PiggyBank(){
    return(
        <div>
            <SavingProgress/>
            {/* <BottomSheet/> */}
        </div>
    )
}