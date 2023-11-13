import AllowanceInfoStart from "components/allowanceInfo/AllowanceInfoStart";
import ReceivingCycle from "components/allowanceInfo/ReceivingCycle";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

export default function AllowanceInfo(){
    return(
        <>
            <Routes>
                <Route path='/start' element={<AllowanceInfoStart/>} />
                <Route path='/cycle' element={<ReceivingCycle/>} />
            </Routes>
        </>
    )
}