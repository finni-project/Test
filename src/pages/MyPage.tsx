import Outline from "components/myPage/Outline";
import { Route, Routes } from "react-router-dom";

export default function MyPage(){
    return(
        <Routes>
            <Route path='/outline' element={<Outline/>} />
        </Routes>    
    )
}