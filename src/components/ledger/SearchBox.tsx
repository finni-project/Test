import styled from "styled-components"

const SearchBar = styled.div`
    width: 100%;
    height: 2.75rem;
    padding-left: 1rem;
    padding-right: 0.625rem;
    border-radius: 62.4375rem;
    background-color: ${({theme})=>theme.colors.neutral.n15};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    input{
        border: 0;
        /* background-color: beige; */
        background-color: ${({theme})=>theme.colors.neutral.n15};
        width: 100%;
        ${({theme})=>theme.fonts.body14b}
        &::placeholder{
            color: ${({theme})=>theme.colors.neutral.n40};
            ${({theme})=>theme.fonts.body14r}
        }
        &:focus{
        outline: none;
        }
    }
    svg{
        cursor: pointer;
    }
`

const ResultBoxWrapper = styled.div`
    h2{
        ${({theme})=>theme.fonts.label11b}
    }
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* background-color: lightgreen; */
`

const List = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    /* background-color: aqua; */
    svg{
        pointer-events: none;
    }
`

const ResultBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    p{
        ${({theme})=>theme.fonts.body14r}
        margin-right: 0.5rem;
        pointer-events: none;
    }
    span{
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.label11r}
        pointer-events: none;
    }
`

export default function SearchBox(){
    return(
        <div>
            <SearchBar>
                <input type="text" placeholder="용돈 분류나 내용을 검색해보세요"/>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.19995 10.2566C2.19995 9.14987 2.40828 8.1082 2.82495 7.13164C3.24162 6.15508 3.82104 5.29896 4.56323 4.56328C5.30542 3.82109 6.16154 3.24166 7.13159 2.825C8.10815 2.40833 9.15308 2.2 10.2664 2.2C11.3796 2.2 12.4213 2.40833 13.3914 2.825C14.3679 3.24166 15.2273 3.82109 15.9695 4.56328C16.7117 5.29896 17.2911 6.15508 17.7078 7.13164C18.1244 8.1082 18.3328 9.14987 18.3328 10.2566C18.3328 11.09 18.2091 11.8842 17.9617 12.6395C17.7208 13.3947 17.3822 14.088 16.946 14.7195L21.155 18.948C21.3113 19.1108 21.4285 19.2898 21.5066 19.4852C21.5912 19.687 21.6335 19.9018 21.6335 20.1297C21.6335 20.4422 21.5619 20.7254 21.4187 20.9793C21.2755 21.2332 21.0802 21.4318 20.8328 21.575C20.5854 21.7247 20.2989 21.7996 19.9734 21.7996C19.752 21.7996 19.5372 21.7605 19.3289 21.6824C19.1205 21.6043 18.935 21.4839 18.7722 21.3211L14.5242 17.073C13.9122 17.4637 13.2449 17.7729 12.5222 18.0008C11.8061 18.2221 11.0541 18.3328 10.2664 18.3328C9.15308 18.3328 8.10815 18.1245 7.13159 17.7078C6.16154 17.2911 5.30542 16.7117 4.56323 15.9695C3.82104 15.2273 3.24162 14.368 2.82495 13.3914C2.40828 12.4148 2.19995 11.3699 2.19995 10.2566ZM4.573 10.2566C4.573 11.0444 4.71948 11.7833 5.01245 12.4734C5.31193 13.157 5.72209 13.7592 6.24292 14.2801C6.76375 14.8009 7.36597 15.2111 8.04956 15.5105C8.73966 15.8035 9.4786 15.95 10.2664 15.95C11.0541 15.95 11.7898 15.8035 12.4734 15.5105C13.1635 15.2111 13.769 14.8009 14.2898 14.2801C14.8106 13.7592 15.2175 13.157 15.5105 12.4734C15.81 11.7833 15.9597 11.0444 15.9597 10.2566C15.9597 9.47539 15.81 8.74297 15.5105 8.05937C15.2175 7.36927 14.8106 6.7638 14.2898 6.24297C13.769 5.71562 13.1635 5.30547 12.4734 5.0125C11.7898 4.71953 11.0541 4.57304 10.2664 4.57304C9.4786 4.57304 8.73966 4.71953 8.04956 5.0125C7.36597 5.30547 6.76375 5.71562 6.24292 6.24297C5.72209 6.7638 5.31193 7.36927 5.01245 8.05937C4.71948 8.74297 4.573 9.47539 4.573 10.2566Z" fill="#5E4EF4"/>
                </svg>
            </SearchBar>
            <ResultBoxWrapper>
                <h2>관련 내용</h2>
                <List>
                    <ResultBox>
                        <p>하늘이 생일선물</p>
                        <span>2023.10.25</span>
                    </ResultBox>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z" fill="#777777"/>
                    </svg>
                </List>
                <List>
                    <ResultBox>
                        <p>예림이 생일선물</p>
                        <span>2023.02.20</span>
                    </ResultBox>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z" fill="#777777"/>
                    </svg>
                </List>
                <List>
                    <ResultBox>
                        <p>김한나네 멍멍이 한 살 기념 생일선물</p>
                        <span>2023.02.20</span>
                    </ResultBox>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z" fill="#777777"/>
                    </svg>
                </List>
            </ResultBoxWrapper>
        </div>
    )
}