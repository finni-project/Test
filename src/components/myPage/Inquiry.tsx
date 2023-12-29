import { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    padding-left: 1rem;
    padding-bottom: calc(${({theme})=>theme.height.navbar} + ${({theme})=>theme.height.bottomPadding});
    padding-right: 1rem;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        ${({theme})=>theme.fonts.body14b}
    }
    span{
        ${({theme})=>theme.fonts.body14r}
        color: ${({theme})=>theme.colors.neutral.n60};
    }
    margin-bottom: 0.5rem;
`

const Input = styled.input`
    border: 0;
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: ${({theme})=>theme.colors.neutral.n15};
    ${({theme})=>theme.fonts.body14r}
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: ${({theme})=>theme.colors.neutral.n40};
    }
    margin-bottom: 1rem;
`

const TextArea = styled.textarea`
    border: 0;
    resize: none;
    width: 100%;
    height: calc(100vh - ${({theme})=>theme.height.topbar} - 9.38rem - 1.125rem - 4.5rem - ${({theme})=>theme.height.navbar});
    /* height: 18.313rem; */
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: ${({theme})=>theme.colors.neutral.n15};
    ${({theme})=>theme.fonts.body14r}
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: ${({theme})=>theme.colors.neutral.n40};
    }
`

const Button = styled.button`
    margin-top: 1rem;
    width: 100%;
    ${({theme})=>theme.mediumBtns.primary}
`

export default function Inquiry(){
    const [title, setTitle] = useState<string>("");
    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>){
        const val = e.target.value;
        if(val.length <= 15){
            setTitle(val);
        }
    }

    const [contents, setContents] = useState<string>("");
    function handleContentsChange(e: React.ChangeEvent<HTMLTextAreaElement>){
        const val = e.target.value;
        if(val.length <= 5000){
            setContents(val);
        }
    }

    return(
        <Wrapper>
            <div>
                <TitleWrapper>
                    <h2>제목</h2>
                    <span>{title.length > 0 ? title.length : 0}/15</span>
                </TitleWrapper>
                <Input type="text" placeholder="제목을 적어주세요." value={title} onChange={handleTitleChange} />
            </div>
            <div>
                <TitleWrapper>
                    <h2>내용</h2>
                    <span>{contents.length > 0 ? contents.length : 0}/5000</span>
                </TitleWrapper>
                <TextArea placeholder="궁금한 내용을 적어주세요." value={contents} onChange={handleContentsChange} />
            </div>
            <Button>문의하기</Button>
        </Wrapper>
    )
}