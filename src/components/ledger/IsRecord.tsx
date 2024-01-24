import styled from "styled-components";
import React, {useEffect, useState} from "react";
import AddDataModal from "./AddDataModal";
import { useNavigate } from "react-router-dom";
import { DailyItemList, DailyList } from "model/model";

const TitleWrapper = styled.div`
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 0.0625rem solid ${({theme})=>theme.colors.neutral.n30};
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: lightcyan; */
    .date{
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.body14r}
    }
    
`

const TotalWrapper = styled.div`
    .icome-total{
        color: ${({theme})=>theme.colors.success.main};
        ${({theme})=>theme.fonts.label13r}
        margin-right: 0.5rem;
    }
    .spend-total{
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.label13r}
    }
`

const ElmtWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    cursor: pointer;
    /* background-color: beige; */
    span:last-child{
        ${({theme})=>theme.fonts.body17m}
    }
    .income{
        color: ${({theme})=>theme.colors.success.main};
    }
    .spend{
        color: ${({theme})=>theme.colors.neutral.n100};
    }
    .deposit{
        color: ${({theme})=>theme.colors.primary.main};
    }
`

const LeftElmts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        margin-left: 0.5rem;
        margin-right: 1rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 100%;
        background-color: ${({theme})=>theme.colors.neutral.n15};
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            ${({theme})=>theme.fonts.headline22b}
        }
    }
    span:last-child{
        color: ${({theme})=>theme.colors.neutral.n100};
        ${({theme})=>theme.fonts.body14r}
    }
`

type IsRecordProps = {
    monthlyData: DailyList[];
}

export default function IsRecord({monthlyData}:IsRecordProps){
    return(
        <>
            {monthlyData.map((itm, index)=>{
                return(
                    <React.Fragment key={index}>
                        <ListTitle dailyList = {itm} />
                        <ListElmt list={itm.list}/>
                    </React.Fragment>
                )
            })}
        </>
    )
}

type ListTitleProps = {
    dailyList: DailyList;
}

export function ListTitle({dailyList}:ListTitleProps){
    const {date, list} = dailyList;

    const [dateNum, setDateNum] = useState<number>();
    const [weekday, setWeekday] = useState<string>();

    useEffect(()=>{
        const realDate = new Date(date);
        setDateNum(realDate.getDate());
        const weekdayArr = ['일', '월', '화', '수', '목', '금', '토'];
        setWeekday(weekdayArr[realDate.getDay()]);
    },[date])

    const [dailyIncome, setDailyIncome] = useState<number>();
    const [dailySpend, setDailySpend] = useState<number>();

    function addComma(money: number | undefined){
        if(money){
            const numberWithComma = money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            return numberWithComma;
        }
    }

    useEffect(()=>{
        let incomeArr = list.filter(itm=>itm.type==="income").map(elm=>elm.amount);
        const incomeTotal = incomeArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
        setDailyIncome(incomeTotal);

        let spendArr = list.filter(itm=>itm.type==="spend").map(elm=>elm.amount);
        const spendTotal = spendArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
        setDailySpend(spendTotal);

    },[list]);

    return(
        <TitleWrapper>
            <span className="date">{dateNum}일 {weekday}요일</span>
            <TotalWrapper>
                {dailyIncome === 0 ? undefined :  <span className="icome-total">+{addComma(dailyIncome)}</span>}
                {dailySpend === 0 ? undefined : <span className="spend-total">-{addComma(dailySpend)}</span>}
            </TotalWrapper>
        </TitleWrapper>
    )
}

export function ListElmt({list}:DailyItemList){
    const navigate = useNavigate();
    function handleItemClick(itmId: number){
        navigate('/ledger/monthly/add/' + itmId);
    }

    return(
        <>
            {list.map((elm)=>{
                return(
                    <ElmtWrapper key={elm.id} onClick={()=>handleItemClick(elm.id)}>
                        <LeftElmts>
                            <div><span>{elm.emoji}</span></div>
                            <span>{elm.name}</span>
                        </LeftElmts>
                        {
                            {
                                income: <span className="income">+{elm.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</span>,
                                spend: <span className="spend">-{elm.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</span>,
                                deposit: <span className="deposit">{elm.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</span>,
                            }[elm.type]
                        }
                    </ElmtWrapper>
                )
            })}
        </>
    )
}