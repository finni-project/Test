import AllowanceInfoStart from "components/allowanceInfo/AllowanceInfoStart";
import AmountReceving from "components/allowanceInfo/AmountReceiving";
import CategoryReceiving from "components/allowanceInfo/CategoryReceiving";
import ReceivingCycle from "components/allowanceInfo/ReceivingCycle";
import {useSelector} from 'react-redux';
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    padding-left: 1rem;
    padding-bottom: calc(${({theme})=>theme.height.navbar} + ${({theme})=>theme.height.bottomPadding});
    padding-right: 1rem;
`

export default function AllowanceInfo(){
    return(
        <Wrapper>
            <Routes>
                <Route path='/start' element={<AllowanceInfoStart/>} />
                <Route path='/cycle' element={<ReceivingCycle/>} />
                <Route path='/amount' element={<AmountReceving/>} />
                <Route path='/category' element={<CategoryReceiving/>} />
            </Routes>
        </Wrapper>
    )
}