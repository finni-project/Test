import styled from "styled-components";
import React, {useEffect, useState} from "react";

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
    monthlyData: {
        date: string;
        list: {
            emoji: string;
            name: string;
            type: string;
            amount: number;
        }[];
    }[];
}

export default function IsRecord({monthlyData}:IsRecordProps){
    return(
        <>
            {monthlyData.map((itm, index)=>{
                return(
                    <React.Fragment key={index}>
                        <ListTitle date={itm.date} list={itm.list} />
                        <ListElmt list={itm.list}/>
                    </React.Fragment>
                )
            })}
        </>
    )
}

type ListTitleProps = {
    date: string;
    list:{
        emoji: string;
        name: string;
        type: string;
        amount: number;
    }[];
}

export function ListTitle({date, list}:ListTitleProps){
    const realDate = new Date(date);
    const dateNum = realDate.getDate();
    const weekdayArr = ['일', '월', '화', '수', '목', '금', '토'];
    let weekday = weekdayArr[realDate.getDay()];

    let incomeArr = list.filter(itm=>itm.type==="income").map(elm=>elm.amount);
    const incomeTotal = incomeArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0,
    );
    let spendArr = list.filter(itm=>itm.type==="spend").map(elm=>elm.amount);
    const spendTotal = spendArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0,
    );

    return(
        <TitleWrapper>
            <span className="date">{dateNum}일 {weekday}요일</span>
            <TotalWrapper>
                {incomeTotal === 0 ? undefined :  <span className="icome-total">+{incomeTotal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>}
                {spendTotal === 0 ? undefined : <span className="spend-total">-{spendTotal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>}
            </TotalWrapper>
        </TitleWrapper>
    )
}

type ListElmtProps = {
    list:{
        emoji: string;
        name: string;
        type: string;
        amount: number;
    }[]
}

export function ListElmt({list}:ListElmtProps){
    return(
        <>
            {list.map((elm, index)=>{
                return(
                    <ElmtWrapper key={index}>
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