import Outline from "components/myPage/Outline";
import Profile from "components/myPage/Profile";
import QuitOrNot from "components/myPage/QuitOrNot";
import { Route, Routes } from "react-router-dom";

export default function MyPage(){
    return(
        <Routes>
            <Route path='/outline' element={<Outline/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>    
    )
}