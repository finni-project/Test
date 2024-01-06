import PiggyBankStart from "components/piggyBank/PiggyBankStart"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components"


const Wrapper = styled.div`
    padding-left: 1rem;
    padding-bottom: calc(${({theme})=>theme.height.navbar} + ${({theme})=>theme.height.bottomPadding});
    padding-right: 1rem;
`

export default function PiggyBank(){
    return(
        <Wrapper>
            <Routes>
                <Route path='/start' element={<PiggyBankStart/>} />
            </Routes>
        </Wrapper>
    )
}