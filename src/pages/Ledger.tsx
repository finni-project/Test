import AddDataModal from "components/ledger/AddDataModal";
import AllowanceModal from "components/ledger/AllowanceModal";
import CategoryModal from "components/ledger/CategoryModal";
import Monthly from "components/ledger/Monthly";
import SearchBox from "components/ledger/SearchBox";
import { Route, Routes } from "react-router-dom";

export default function Ledger(){
    return(
        <Routes>
            <Route path='/monthly' element={<Monthly/>} />
            <Route path='/search' element={<SearchBox/>} />
            <Route path='/monthly/add' element={<AddDataModal />}>
                <Route path=":id" element={<AddDataModal />} />
            </Route>
        </Routes>
    )
}