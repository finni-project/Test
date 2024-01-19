import FirstComplete from "./FirstComplete";
import SecondComplete from "./SecondComplete";
import ThirdComplete from "./ThirdComplete";
import { Route, Routes } from "react-router-dom";

export default function GoalComplete(){
    return(
        <Routes>
            <Route path='/first' element={<FirstComplete/>} />
            <Route path='/second' element={<SecondComplete/>} />
            <Route path='/third' element={<ThirdComplete/>} />
        </Routes>
    )
}