import CheckingButton from "components/CheckingButton";
import FormTop from "components/FormTop";
import TypingInput from "components/TypingInput";
import { CheckBtns } from "model/model";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const buttonArr: CheckBtns = [{id: 1, text: "5천원", active: false},
        {id: 2, text: "1만원", active: false},
        {id: 3, text: "2만원", active: false},
        {id: 4, text: "3만원", active: false}];

export default function SavingAmount(){
    const [notTyping, setNotTyping] = useState<boolean>(true);
    return(
        <>
            <FormTop type={"saving"} step={"second"} text={"저금 금액"} title={"저금은 한번에 얼마씩 할래요?"} detail={undefined}/>
            {notTyping?
            <CheckingButton nextPage={"/savingInfo/goal"} buttonArr={buttonArr} setNotTyping={setNotTyping}/>
            :<TypingInput nextPage={"/savingInfo/goal"} unit={"원"}/>
            }
        </>
    )
}