import GoalComplete from "components/piggyBank/GoalComplete"
import SavingState from "components/piggyBank/SavingState"
import { Route, Routes } from "react-router-dom"


export default function PiggyBank(){
    return(
        <Routes>
            <Route path='/state' element={<SavingState/>} />
            <Route path='/complete/*' element={<GoalComplete/>} />
        </Routes>
    )
}