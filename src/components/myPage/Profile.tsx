import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import QuitOrNot from "./QuitOrNot"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

const ImageWrapper = styled.div`
    position: relative;
    /* background-color: aliceblue; */
    width: 4.125rem;
    height: 4.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ProfileImg = styled.div`
    width: 4rem;
    height: 4rem;
    background-color: ${({theme})=>theme.colors.primary.surface};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SvgWrapper = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${({theme})=>theme.colors.primary.main};
    border-radius: 100%;
    svg{
        path{
            fill: ${({theme})=>theme.colors.neutral.n0};
        }
    }
`

const List = styled.div`
    h2{
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.label13r}
    }
    margin-top: 2rem;
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

const ElmWrapper = styled.div`
    width: 100%;
    height: 3.25rem;
    border-bottom: 1px solid ${({theme})=>theme.colors.neutral.n30};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme})=>theme.colors.neutral.n0};
    cursor: pointer;
    span{
        ${({theme})=>theme.fonts.body14r}
        pointer-events: none;
    }
    svg{
        margin: 0.62rem;
        pointer-events: none;
    }
`

const ButtonWrapper = styled.div`
    width: calc(100% - 2rem);
    position: absolute;
    left: 1rem;
    bottom: calc(${({theme})=>theme.height.navbar} + 0.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    span{
        height: 2.25rem;
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.body14b}
        padding: 0.5625rem 0.5rem;
        cursor: pointer;
    }
`

const Button = styled.button`
    ${({theme})=>theme.mediumBtns.primary}
    width: 100%;
`

export default function Profile(){
    const nickNameBeforeEdit = '삐약이'
    const [nickName, setNickName] = useState(nickNameBeforeEdit);
    const [disabled, setDisabled] = useState(true);

    function handleNickNameChange(e: React.ChangeEvent<HTMLInputElement>){
        const val = e.target.value;
        setNickName(val);
        setDisabled(true);
        if(val !== nickNameBeforeEdit){
            setDisabled(false);
        }
    }

    const [quitOrNot, setQuitOrNot] = useState(false);
    function handleQuitClick(){
        setQuitOrNot(true);
    }

    return(
        <>
            <Wrapper>
                <ImageWrapper>
                    <ProfileImg>
                        <img src="public_assets/profile13.png" alt="profile"/>
                    </ProfileImg>
                    <SvgWrapper>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 15.6403V17.6667C6 17.8534 6.14665 18 6.33329 18H8.35967C8.44633 18 8.53298 17.9667 8.59297 17.9L15.872 10.6277L13.3723 8.12804L6.09999 15.4004C6.03333 15.467 6 15.547 6 15.6403Z" fill="#B7B7B7"/>
                            <path d="M17.805 7.75476L16.2452 6.19497C15.9853 5.93501 15.5653 5.93501 15.3054 6.19497L14.0855 7.4148L16.5852 9.91446L17.805 8.69463C18.065 8.43466 18.065 8.01472 17.805 7.75476Z" fill="#B7B7B7"/>
                        </svg>
                    </SvgWrapper>
                </ImageWrapper>
            </Wrapper>
            <List>
                <h2>이름</h2>
                <InputWrapper>
                    <Input type="text" value={nickName} onChange={handleNickNameChange}/>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 15.6403V17.6667C6 17.8534 6.14665 18 6.33329 18H8.35967C8.44633 18 8.53298 17.9667 8.59297 17.9L15.872 10.6277L13.3723 8.12804L6.09999 15.4004C6.03333 15.467 6 15.547 6 15.6403Z" fill="#B7B7B7"/>
                        <path d="M17.805 7.75476L16.2452 6.19497C15.9853 5.93501 15.5653 5.93501 15.3054 6.19497L14.0855 7.4148L16.5852 9.91446L17.805 8.69463C18.065 8.43466 18.065 8.01472 17.805 7.75476Z" fill="#B7B7B7"/>
                    </svg>
                </InputWrapper>
            </List>
            <List>
                <h2>생년월일</h2>
                <ElmWrapper>
                    <span>2011.02.22</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z" fill="#B7B7B7"/>
                    </svg>
                </ElmWrapper>
            </List>
            <ButtonWrapper>
                <Button data-disabled={disabled}>저장</Button>
                <span onClick={handleQuitClick}>회원을 탈퇴할게요</span>
            </ButtonWrapper>
            {quitOrNot && <QuitOrNot setQuitOrNot={setQuitOrNot}/>}
        </>
    )
}