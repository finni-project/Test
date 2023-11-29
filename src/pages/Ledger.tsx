import AllowanceModal from "components/ledger/AllowanceModal";
import Monthly from "components/ledger/Monthly";
import SearchBox from "components/ledger/SearchBox";
import { Route, Routes } from "react-router-dom";

export default function Ledger(){
    return(
        <Routes>
            <Route path='/aModal' element={<AllowanceModal/>} />
            <Route path='/monthly' element={<Monthly/>} />
            <Route path='/search' element={<SearchBox/>} />
        </Routes>
    )
}