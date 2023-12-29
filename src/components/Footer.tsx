import styled from "styled-components"

const Wrapper = styled.div`
    background-color: ${({theme})=>theme.colors.neutral.n20};
    width: 100%;
    padding: 2.5rem 1rem calc(4.375rem + ${({theme})=>theme.height.navbar}) 1rem;
    p{
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.label13r}
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
    }
`

const ListTop = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
`

const ListWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
`

const List = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    ${({theme})=>theme.fonts.label13r}
    span{
        color: ${({theme})=>theme.colors.neutral.n60};
    }
    b{
        color: ${({theme})=>theme.colors.neutral.n77};
    }
`

const Detail = styled.ul`
    display: flex;
    li{
        ${({theme})=>theme.fonts.body14r}
        color: ${({theme})=>theme.colors.neutral.n60};
        cursor: pointer;
    }
`

export default function Footer(){
    return(
        <Wrapper>
            <ListTop>
                <List>
                    <span>본사</span>
                    <b>서울시 구로구 디지털로 31길 12 태평양물산 14층</b>
                    <span>|</span>
                </List>
                <ListWrapper>
                    <List>
                        <span>대표</span>
                        <b>홍길동</b>
                        <span>|</span>
                    </List>
                    <List>
                        <span>이메일</span>
                        <b>hong@naver.com</b>
                        <span>|</span>
                    </List>
                </ListWrapper>
                <List>
                    <span>사업자등록번호</span>
                    <b>888-88-88888</b>
                </List>
            </ListTop>
            <p>© 2023 All rights reserved {}</p>
            <Detail>
                <li>서비스 이용약관</li>
                <li>&nbsp;| 개인정보 처리방침 </li>
                <li>&nbsp;| 회사 소개</li>
            </Detail>
        </Wrapper>
    )
}