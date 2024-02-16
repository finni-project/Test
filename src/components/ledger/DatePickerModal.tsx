import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale'; //한국어 설정
import {useState, useEffect} from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    svg{
        cursor: pointer;
    }
    .header-title{
        color: ${({theme})=>theme.colors.neutral.n100};
        ${({theme})=>theme.fonts.body17b}
    }

`

const Wrapper = styled.div`
    .popper-style{
        position: fixed !important;
        transform: translate(-50%, -50%) !important;;
        left: 50% !important;
        top: 50% !important;
    }

    .react-datepicker {
        padding: 1.5rem 0;
        /* background-color: antiquewhite; */
        background-color: ${({theme})=>theme.colors.neutral.n0};
        border: 0;
        border-radius: 1rem;
        box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.10);
    }

    .react-datepicker__input-container {
        input{
            ${({theme})=>theme.fonts.body14r}
            border: 0;
            &:focus{
                outline: none;
            }
        }
    }

    .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
        border: 0;
    }

    .react-datepicker__header {
        background-color: ${({theme})=>theme.colors.neutral.n0};
        border-bottom: 0;
        padding: 0;
    }

    .react-datepicker__day-name{
        &:first-child{
            color: ${({theme})=>theme.colors.danger.main};
        }
        &:last-child{
            color: ${({theme})=>theme.colors.danger.main};
        }
    }

    .react-datepicker__day--weekend{
        color: ${({theme})=>theme.colors.danger.main};
    }

    .react-datepicker__day--outside-month, .react-datepicker__day--disabled{
        color: ${({theme})=>theme.colors.neutral.n20};
        /* pointer-events: none; */
    }

    .react-datepicker__day--outside-month.react-datepicker__day--weekend{
        color: #FDA29B;
    }

    .react-datepicker__day--disabled.react-datepicker__day--weekend{
        color: #FDA29B;
    }

    .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
        width: 2.625rem;
        padding: 0.75rem 0;
    }

    .react-datepicker__day-name, .react-datepicker__time-name {
        ${({theme})=>theme.fonts.body14r}
    }

    .react-datepicker__day{
        ${({theme})=>theme.fonts.body14m}
        &:hover{
            border-radius: 3.75rem;
            ${({theme})=>theme.fonts.body14b}
            color: ${({theme})=>theme.colors.neutral.n100}
        }
    }

    .react-datepicker__day--disabled{
        &:hover{
            color: ${({theme})=>theme.colors.neutral.n20};
        }
    }

    .react-datepicker__day--selected{
        border-radius: 3.75rem;
        background-color: ${({theme})=>theme.colors.primary.surface};
        color: ${({theme})=>theme.colors.primary.main};
        ${({theme})=>theme.fonts.body14b}
        &:hover{
            border-radius: 3.75rem;
            background-color: ${({theme})=>theme.colors.primary.surface};
            color: ${({theme})=>theme.colors.primary.main};
            ${({theme})=>theme.fonts.body14b}
        }
    }

    .react-datepicker__day--keyboard-selected{
        border-radius: 3.75rem;
        background-color: ${({theme})=>theme.colors.primary.surface};
        &:hover{
            border-radius: 3.75rem;
            background-color: ${({theme})=>theme.colors.primary.surface};
            ${({theme})=>theme.fonts.body14b}
        }
    }
    
`

export default function DatePickerModal(){
    const [startDate, setStartDate] = useState<Date>(new Date());
    const formatDate = (d: Date): string => {
        const date = new Date(d);
        const monthIndex = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}. ${`0${monthIndex}`.slice(-2)}월`;
    };

    return(
        <Wrapper>
            <DatePicker
                popperClassName="popper-style"
                locale={ko} //한글
                dateFormat="yyyy년 MM월 d일"
                shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
                maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                renderCustomHeader={({date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled})=>(
                    <Header>
                        <svg aria-disabled={prevMonthButtonDisabled} onClick={decreaseMonth}
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 15.875L11.12 11.995L15 8.11501C15.39 7.72501 15.39 7.09501 15 6.70501C14.61 6.31501 13.98 6.31501 13.59 6.70501L8.99998 11.295C8.60998 11.685 8.60998 12.315 8.99998 12.705L13.59 17.295C13.98 17.685 14.61 17.685 15 17.295C15.38 16.905 15.39 16.265 15 15.875Z" fill="#111"/>
                        </svg>
                        <span className='header-title'>{formatDate(date)}</span>
                        <svg aria-disabled={nextMonthButtonDisabled} onClick={increaseMonth}
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z" fill="#111"/>
                        </svg>
                    </Header>
                )}
            />
        </Wrapper>
    )
}