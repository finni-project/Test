import LedgerModal from "./Modal";

type DipositModalProps = {
    setShownModal: any;
}

export default function DepositModal({setShownModal}:DipositModalProps){
    return(
        <LedgerModal type={"deposit"} text={"저금하는"} amount={10000} setShownModal={setShownModal}/>
    )
}