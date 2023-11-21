import AllowanceInfoStart from "components/allowanceInfo/AllowanceInfoStart";
import AmountReceving from "components/allowanceInfo/AmountReceiving";
import CategoryReceiving from "components/allowanceInfo/CategoryReceiving";
import ReceivingCycle from "components/allowanceInfo/ReceivingCycle";
import {useSelector} from 'react-redux';

export default function AllowanceInfo(){
    const page = useSelector((state:any) => state.page);
    switch(page){
        case "start":
            return <AllowanceInfoStart/>
        case "cycle":
            return <ReceivingCycle/>
        case "amount":
            return <AmountReceving />
        case "category":
            return <CategoryReceiving/>
        default:
            return null;
    }
}