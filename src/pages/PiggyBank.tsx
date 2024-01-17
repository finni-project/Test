import SavingState from "components/piggyBank/SavingState"
import { Route, Routes } from "react-router-dom"


export default function PiggyBank(){
    return(
        <Routes>
            <Route path='/state' element={<SavingState/>} />
        </Routes>
    )
}