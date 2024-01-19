import styled from "styled-components"

const Wrapper = styled.div`
    padding-top: calc(${({theme})=>theme.height.topbar} + ${({theme})=>theme.height.topPadding});
    padding-left: 1rem;
    padding-bottom: calc(${({theme})=>theme.height.navbar} + ${({theme})=>theme.height.bottomPadding});
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: aliceblue; */
    height: calc(100vh - ${({theme})=>theme.height.topbar} - ${({theme})=>theme.height.topPadding} - ${({theme})=>theme.height.bottomPadding} - ${({theme})=>theme.height.navbar});
`

const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
        ${({theme})=>theme.fonts.headline22b}
    }
    span:last-child{
        color: ${({theme})=>theme.colors.primary.main};
    }
    margin-bottom: 2rem;
`

const KakaoWrapper = styled.div`
    width: 100%;
    height: 3rem;
    padding: 0.96875rem 7.6875rem 0.90625rem 0.875rem;
    border-radius: 0.375rem;
    background-color: #FEE500;
    display: flex;
    justify-content: flex-start;
    justify-content: center;
    align-items: center;
    gap: 5.75rem;
    cursor: pointer;
    svg{
        pointer-events: none;
    }
    span{
        ${({theme})=>theme.fonts.body14b}
        pointer-events: none;
        white-space: nowrap;
    }
    margin-bottom: 0.5rem;
`

const NaverWrapper = styled.div`
    width: 100%;
    height: 3rem;
    padding: 0.96875rem 7.6875rem 0.90625rem 0.875rem;
    border-radius: 0.375rem;
    background-color: #03C75A;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5.75rem;
    cursor: pointer;
    svg{
        pointer-events: none;
    }
    span{
        ${({theme})=>theme.fonts.body14b}
        color: ${({theme})=>theme.colors.neutral.n0};
        pointer-events: none;
        white-space: nowrap;
    }
`

export default function Login(){
    return(
        <Wrapper>
            <IntroWrapper>
                <span>어린이 용돈 관리</span>
                <span>3초 만에 시작하기</span>
            </IntroWrapper>
            <KakaoWrapper>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_840_6155)">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.00004 0.476132C4.02919 0.476132 1.8e-05 3.60553 1.8e-05 7.46512C1.8e-05 9.86547 1.55842 11.9815 3.93154 13.2401L2.93305 16.9069C2.84483 17.2309 3.21343 17.4892 3.49648 17.3014L7.87336 14.3974C8.24272 14.4333 8.61809 14.4542 9.00004 14.4542C13.9705 14.4542 17.9999 11.3249 17.9999 7.46512C17.9999 3.60553 13.9705 0.476132 9.00004 0.476132Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_840_6155">
                <rect width="18" height="18" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <span>카카오 로그인</span>
            </KakaoWrapper>
            <NaverWrapper>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8491 8.56267L4.91687 0H0V16H5.15088V7.436L11.0831 16H16V0H10.8491V8.56267Z" fill="white"/>
                </svg>
                <span>네이버 로그인</span>
            </NaverWrapper>
        </Wrapper>
    )
}