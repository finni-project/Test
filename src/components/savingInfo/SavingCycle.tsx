import CheckingButton from "components/CheckingButton";
import FormTop from "components/FormTop";
import TypingInput from "components/TypingInput";
import { CheckBtns } from "model/model";
import { useState } from "react";

const buttonArr: CheckBtns = [{id: 1, text: "매일", active: false},
        {id: 2, text: "일주일에 한 번", active: false},
        {id: 3, text: "2주에 한 번", active: false},
        {id: 4, text: "한 달에 한 번", active: false}];

export default function SavingCycle(){

    const [notTyping, setNotTyping] = useState<boolean>(true)

    return(
        <>
            <FormTop type={"saving"} step="first" text="저금 주기" title="저금은 언제마다 할래요?" detail={undefined}/>
            {notTyping?
            (<>
                <CheckingButton nextPage={"/savingInfo/amount"} buttonArr={buttonArr} setNotTyping={setNotTyping}/>
            </>
            ):(
            <TypingInput nextPage={"/savingInfo/amount"} unit={"일"}/>
            )}
        </>
    )
}