import AllowanceInfoStart from "components/allowanceInfo/AllowanceInfoStart";
import AmountReceving from "components/allowanceInfo/AmountReceiving";
import CategoryReceiving from "components/allowanceInfo/CategoryReceiving";
import ReceivingCycle from "components/allowanceInfo/ReceivingCycle";
import {useSelector} from 'react-redux';
import { Route, Routes } from "react-router-dom";

export default function AllowanceInfo(){
    return(
        <Routes>
            <Route path='/start' element={<AllowanceInfoStart/>} />
            <Route path='/cycle' element={<ReceivingCycle/>} />
            <Route path='/amount' element={<AmountReceving/>} />
            <Route path='/category' element={<CategoryReceiving/>} />
        </Routes>
    )
}