import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    padding: 1rem;
    border-radius: 1rem 1rem 0rem 0rem;
    background: ${({theme})=>theme.colors.neutral.n0};
    box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.12);
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    span{
        ${({theme})=>theme.fonts.headline20b}
    }
    svg{
        cursor: pointer;
    }
`

const MonthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    overflow-y: auto;
    height: calc(3rem * 6);
    p{
        display: flex;
        justify-content: center;
        align-items: center;
        ${({theme})=>theme.fonts.headline20r}
        height: 3rem;
        /* background-color: beige; */
        cursor: pointer;
        padding-top: 0.75rem;
        padding-bottom: 0.69rem;
    }
    .mouse-down{
        border-radius: 0.5rem;
        background-color: ${({theme})=>theme.colors.neutral.n15};
    }
`

const Button = styled.button`
    ${({theme})=>theme.mediumBtns.primary}
    width: 100%;
`

export default function MonthPicker(){
    const today = new Date();
    const thisMonth = today.getMonth() + 1;
    const thisYear = today.getFullYear();
    
    const [standardMonth, setStandardMonth] = useState<number>(thisMonth);
    const [standardYear, setStandardYear] = useState<number>(thisYear);
    const [monthArr, setMonthArr] = useState<{id: number, month: string, active: boolean}[]>();

    const monthElm : any = useRef();

    function getMonthArr(){
        let tmpArr = [];
        let month = thisMonth;
        let year = thisYear;
        let idNum = 0;
        if(month === standardMonth && year === standardYear){
            tmpArr.push({id: idNum, month: year + "년" + month + "월", active: true});
        }else{
            tmpArr.push({id: idNum, month: year + "년" + month + "월", active: false});
        }
        while(year >= 2017){
            if(month === 1){
                month = 13;
                year = year - 1;
            }
            month = month - 1;
            idNum = idNum + 1;
            if(month === standardMonth && year === standardYear){
                tmpArr.push({id: idNum, month: year + "년" + month + "월", active: true});
            }else{
                tmpArr.push({id: idNum, month: year + "년" + month + "월", active: false});
            }
        }
        
        return tmpArr;
    }

    function handleMonth(id: number){
        setMonthArr(monthArr?.map((itm)=>itm.id===id ? {...itm, active: true} : {...itm, active: false}))
    }

    function handleSubmit(){
        const str = monthArr?.filter(itm=>itm.active===true)[0];
        const result = str?.month.replace("년","").replace("월","");
        const year = Number(result?.substring(0,4));
        const month = Number(result?.substring(4));
        setStandardMonth(month);
        setStandardYear(year);
    }

    useEffect(()=>{
        setMonthArr(getMonthArr());
    },[])

    return(
        <Wrapper>
            <TitleWrapper>
                <span>월 선택</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.3407 19.6593C4.18723 19.5058 4.08594 19.3278 4.03683 19.1252C3.98772 18.9227 3.98772 18.7201 4.03683 18.5175C4.08594 18.3149 4.18416 18.14 4.33149 17.9926L9.81952 12.4954L4.33149 7.00737C4.18416 6.86618 4.08594 6.69429 4.03683 6.49171C3.99386 6.283 3.99386 6.07735 4.03683 5.87477C4.08594 5.67219 4.18723 5.49417 4.3407 5.3407C4.48803 5.18723 4.66298 5.08594 4.86556 5.03683C5.07428 4.98772 5.27993 4.98772 5.4825 5.03683C5.69122 5.08594 5.86924 5.18416 6.01657 5.33149L11.5046 10.8195L16.9926 5.33149C17.14 5.18416 17.3149 5.08594 17.5175 5.03683C17.7201 4.98772 17.9227 4.98772 18.1252 5.03683C18.3278 5.08594 18.5058 5.1903 18.6593 5.34991C18.8128 5.49724 18.9141 5.67219 18.9632 5.87477C19.0184 6.07735 19.0184 6.27993 18.9632 6.4825C18.9141 6.68508 18.8158 6.86004 18.6685 7.00737L13.1897 12.4954L18.6685 17.9926C18.8158 18.14 18.9141 18.3149 18.9632 18.5175C19.0123 18.7201 19.0123 18.9227 18.9632 19.1252C18.9141 19.3278 18.8128 19.5058 18.6593 19.6593C18.5058 19.8128 18.3278 19.9141 18.1252 19.9632C17.9227 20.0123 17.7201 20.0123 17.5175 19.9632C17.3149 19.9141 17.14 19.8158 16.9926 19.6685L11.5046 14.1805L6.01657 19.6685C5.86924 19.8158 5.69429 19.9141 5.49171 19.9632C5.28913 20.0123 5.08349 20.0123 4.87477 19.9632C4.67219 19.9141 4.49417 19.8128 4.3407 19.6593Z" fill="#777777"/>
                </svg>
            </TitleWrapper>
            <MonthWrapper ref={monthElm}>
                {monthArr?.map((itm)=>
                    <p key={itm.id} className={itm.active?"mouse-down":undefined} onClick={()=>handleMonth(itm.id)}>{itm.month}</p>
                )}
            </MonthWrapper>
            <Button onClick={handleSubmit}>적용</Button>
        </Wrapper>
    )
}