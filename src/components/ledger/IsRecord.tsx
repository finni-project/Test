import styled from "styled-components";
import React, {useState} from "react";

const TitleWrapper = styled.div`
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 0.0625rem solid ${({theme})=>theme.colors.neutral.n30};
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: lightcyan; */
    span:first-child{
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.body14r}
    }
`

const TotalWrapper = styled.div`
    span:first-child{
        color: ${({theme})=>theme.colors.success.main};
        ${({theme})=>theme.fonts.label13r}
        margin-right: 0.5rem;
    }
    span:last-child{
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
        color: ${({theme})=>theme.colors.neutral.n100};
        ${({theme})=>theme.fonts.body17m}
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

const monthlyData = [
    {date: "2023-10-28",
    list: [
        {emoji: "🍚", name: "예림이랑 떡볶이", type: "spend", amount: 3000},
        {emoji: "🕹️", name: "PC방 충전", type: "spend", amount: 6000 },
        {emoji: "🧸", name: "쿠로미 키링", type: "spend", amount: 3000},
        {emoji: "💰", name: "저금", type: "deposit", amount: 5000},
        {emoji: "💝", name: "용돈", type: "income", amount: 10000},
    ]},
    {date: "2023-10-25",
    list: [
        {emoji: "🎁", name: "하늘이 생일선물", type: "spend", amount: 5000},
    ]},
    {date: "2023-10-21",
    list: [
        {emoji: "💰", name: "저금", type: "deposit", amount: 5000},
        {emoji: "💝", name: "용돈", type: "income", amount: 100000},
    ]},
    {date: "2023-10-17",
    list: [
        {emoji: "🍚", name: "지현이랑 마라탕", type: "spend", amount: 8000},
    ]},
    {date: "2023-10-4",
    list: [
        {emoji: "💝", name: "용돈", type: "income", amount: 100000},
    ]},
]

export default function IsRecord(){
    return(
        <>
            {monthlyData.map((itm, index)=>{
                return(
                    <React.Fragment key={index}>
                        <ListTitle date={itm.date}/>
                        <ListElmt list={itm.list}/>
                    </React.Fragment>
                )
            })}
        </>
    )
}

type ListTitleProps = {
    date: string;
}

export function ListTitle({date}:ListTitleProps){
    const realDate = new Date(date);
    const dateNum = realDate.getDate();
    const weekdayArr = ['일', '월', '화', '수', '목', '금', '토'];
    let weekday = weekdayArr[realDate.getDay()];

    return(
        <TitleWrapper>
            <span>{dateNum}일 {weekday}요일</span>
            <TotalWrapper>
                <span>+10,000</span>
                <span>-12,000</span>
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
                        <span>{elm.amount}원</span>
                    </ElmtWrapper>
                )
            })}
        </>
    )
}