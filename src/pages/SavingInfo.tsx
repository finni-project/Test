import PiggyBankStart from "components/savingInfo/PiggyBankStart"
import SavingAmount from "components/savingInfo/SavingAmount"
import SavingCycle from "components/savingInfo/SavingCycle"
import SavingGoal from "components/savingInfo/SavingGoal"
import SavingTotal from "components/savingInfo/SavingTotal"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components"


const Wrapper = styled.div`
    padding-top: calc(${({theme})=>theme.height.topbar} + ${({theme})=>theme.height.topPadding});
    padding-left: 1rem;
    padding-bottom: calc(${({theme})=>theme.height.navbar} + ${({theme})=>theme.height.bottomPadding});
    padding-right: 1rem;
`

export default function SavingInfo(){
    return(
        <Wrapper>
            <Routes>
                <Route path='/start' element={<PiggyBankStart/>} />
                <Route path='/cycle' element={<SavingCycle/>} />
                <Route path='/amount' element={<SavingAmount/>} />
                <Route path='/goal' element={<SavingGoal/>} />
                <Route path='/total' element={<SavingTotal/>} />
            </Routes>
        </Wrapper>
    )
}