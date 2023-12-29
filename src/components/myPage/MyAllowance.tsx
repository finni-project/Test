import { useState } from "react"
import styled, { keyframes } from "styled-components"

const Wrapper = styled.div`
    padding-left: 1rem;
    padding-bottom: calc(${({theme})=>theme.height.navbar} + ${({theme})=>theme.height.bottomPadding});
    padding-right: 1rem;
`

const IntroWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Intro = styled.div`
    h2{
        ${({theme})=>theme.fonts.body17b}
    }
    p{
        ${({theme})=>theme.fonts.body14r}
        color: ${({theme})=>theme.colors.neutral.n50};
    }
`

const Toggle = styled.div`
    width: 4.5rem;
    height: 2.125rem;
    background-color: ${({theme})=>theme.colors.neutral.n40};
    border-radius: 62.4rem;
    display: flex;
    align-items: center;
    padding: 0.25rem;
    -webkit-transition: .4s;
    transition: .4s;
    cursor: pointer;
    &.checked{
        background-color: ${({theme})=>theme.colors.success.main};
    }
`

const ToggleBtn = styled.div`
    width: 1.625rem;
    height: 1.625rem;
    border-radius: 1.625rem;
    background-color: ${({theme})=>theme.colors.neutral.n0};
    pointer-events: none;
    -webkit-transition: .4s;
    transition: .4s;
    &.slider{
        -webkit-transform: translateX(calc(2.125rem + 0.25rem));
        -ms-transform: translateX(calc(2.125rem + 0.25rem));
        transform: translateX(calc(2.125rem + 0.25rem));
    }
`

const List = styled.div`
    margin-top: 2rem;
    h3{
        ${({theme})=>theme.fonts.label13r}
        color: ${({theme})=>theme.colors.neutral.n60};
    }
`

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    svg{
        position: absolute;
        right: 0;
        margin: 0.62rem;
    }
`

const Input = styled.input`
    width: 100%;
    height: 3.25rem;
    border: 0;
    border-bottom: 1px solid ${({theme})=>theme.colors.neutral.n30};
    /* background-color: lightcyan; */
    ${({theme})=>theme.fonts.body14br}
    color: ${({theme})=>theme.colors.neutral.n100};
    &:focus{
        outline: none;
        border-bottom: 1px solid ${({theme})=>theme.colors.primary.main};
    }
`

const Button = styled.button`
    position: absolute;
    width: calc(100% - 2rem);
    bottom: calc(${({theme})=>theme.height.navbar} + 0.5rem);
    ${({theme})=>theme.mediumBtns.primary}
`

const myAllowanceData = {
    automatic: true,
    cycle: 1,
    amount: 10000,
}

export default function MyAllowance(){
    const [toggle, setToggle] = useState<boolean>(myAllowanceData.automatic);
    function handleToggleClick(){
        setToggle(!toggle);
    }

    const [cycle, setCycle] = useState<string>(String(myAllowanceData.cycle) + "일");
    function handleCycleChange(e: React.ChangeEvent<HTMLInputElement>){
        const regex = /[^0-9]/g;
        let val = e.target.value;
        val = val.replace(regex, "").replace("일", "").concat("일");
        setCycle(val);
    }

    const [amount, setAmount] = useState<string>(String(myAllowanceData.amount).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원");
    function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>){
        const regex = /[^0-9]/g;
        const regex2 = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
        let val = e.target.value.replace("원", "");
        val = val.replace(regex, "").replace(regex2, ",").concat("원");
        setAmount(val);
    }

    return(
        <Wrapper>
            <IntroWrapper>
                <Intro>
                    <h2>용돈 자동 입력</h2>
                    <p>아래 정보에 맞춰 자동으로 입력해 줄게요.</p>    
                </Intro>
                <Toggle className={toggle?"checked":undefined} onClick={handleToggleClick}>
                    <ToggleBtn className={toggle?"slider":undefined} />
                </Toggle>
            </IntroWrapper>
            <List>
                <h3>용돈 주기</h3>
                <InputWrapper>
                    <Input type="text" value={cycle} onChange={handleCycleChange}/>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 15.6403V17.6667C6 17.8534 6.14665 18 6.33329 18H8.35967C8.44633 18 8.53298 17.9667 8.59297 17.9L15.872 10.6277L13.3723 8.12804L6.09999 15.4004C6.03333 15.467 6 15.547 6 15.6403Z" fill="#B7B7B7"/>
                        <path d="M17.805 7.75476L16.2452 6.19497C15.9853 5.93501 15.5653 5.93501 15.3054 6.19497L14.0855 7.4148L16.5852 9.91446L17.805 8.69463C18.065 8.43466 18.065 8.01472 17.805 7.75476Z" fill="#B7B7B7"/>
                    </svg>
                </InputWrapper>
            </List>
            <List>
                <h3>용돈 금액</h3>
                <InputWrapper>
                    <Input type="text" value={amount} onChange={handleAmountChange}/>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 15.6403V17.6667C6 17.8534 6.14665 18 6.33329 18H8.35967C8.44633 18 8.53298 17.9667 8.59297 17.9L15.872 10.6277L13.3723 8.12804L6.09999 15.4004C6.03333 15.467 6 15.547 6 15.6403Z" fill="#B7B7B7"/>
                        <path d="M17.805 7.75476L16.2452 6.19497C15.9853 5.93501 15.5653 5.93501 15.3054 6.19497L14.0855 7.4148L16.5852 9.91446L17.805 8.69463C18.065 8.43466 18.065 8.01472 17.805 7.75476Z" fill="#B7B7B7"/>
                    </svg>
                </InputWrapper>
            </List>
            <Button>저장</Button>
        </Wrapper>
    )
}