import CheckingButton from "components/CheckingButton";
import FormTop from "components/FormTop";
import TypingInput from "components/TypingInput";
import { CheckBtns } from "model/model";
import {useState} from 'react';

const buttonArr: CheckBtns = [{id: 1, text: "5천원", active: false},
        {id: 2, text: "1만원", active: false},
        {id: 3, text: "2만원", active: false},
        {id: 4, text: "3만원", active: false}];

export default function AmountReceving(){
    const [notTyping, setNotTyping] = useState<boolean>(true);

    return(
        <>
            <FormTop type={"ledger"} step={"second"} text={"용돈 금액"} title={"용돈은 얼마씩 받아요?"} detail={undefined}/>
            {notTyping?
            <CheckingButton nextPage={"/allowanceInfo/category"} buttonArr={buttonArr} setNotTyping={setNotTyping}/>
            :<TypingInput nextPage={"/allowanceInfo/category"} unit={"원"}/>
            }
        </>
    )
}