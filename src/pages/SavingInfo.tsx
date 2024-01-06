import PiggyBankStart from "components/savingInfo/PiggyBankStart"
import SavingAmount from "components/savingInfo/SavingAmount"
import SavingCycle from "components/savingInfo/SavingCycle"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components"


const Wrapper = styled.div`
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
            </Routes>
        </Wrapper>
    )
}