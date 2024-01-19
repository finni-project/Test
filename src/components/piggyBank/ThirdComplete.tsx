import { Link } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    /* background-color: aliceblue; */
    height: calc(100vh - ${({theme})=>theme.height.topbar} - ${({theme})=>theme.height.navbar});
    position: relative;
`

const TopWrapper = styled.div`
    /* background-color: aliceblue; */
    height: calc(100vh - 7.5rem - ${({theme})=>theme.height.topPadding} - ${({theme})=>theme.height.topbar} - ${({theme})=>theme.height.navbar});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`

const ProfileImg = styled.img`
    width: 3rem;
    height: 3rem;
    &.center_img{
        width: 7rem;
        height: 7rem;
    }
`

const TopText = styled.p`
    ${({theme})=>theme.fonts.title28b}
    margin-bottom: 0.5rem;
`

const BottomText = styled.p`
    ${({theme})=>theme.fonts.body14r}
`

const BtnsWrapper = styled.div`
    position: absolute;
    bottom: 0.75rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const TopBtn = styled.div`
    ${({theme})=>theme.mediumBtns.tertiary}
    width: 100%;
`

const BottomBtn = styled.div`
    ${({theme})=>theme.mediumBtns.primary}
    width: 100%;
`

export default function ThirdComplete(){
    return(
        <Wrapper>
            <TopWrapper>
                <ImageWrapper>
                    <ProfileImg src="/public_assets/profile_15.png" alt="emogi"/>
                    <ProfileImg src="/public_assets/profile_14.png" alt="emogi"/>
                    <ProfileImg className={"center_img"} src="/public_assets/big_profile_13.png" alt="emogi"/>
                    <ProfileImg src="/public_assets/profile_11.png" alt="emogi"/>
                    <ProfileImg src="/public_assets/profile_8.png" alt="emogi"/>
                </ImageWrapper>
                <TopText>이모티콘을 획득했어요!</TopText>
                <BottomText>획득한 이모티콘으로 프로필을 바꿀 수 있어요</BottomText>
            </TopWrapper>
            <BtnsWrapper>
                <Link to="/savingInfo/start"><TopBtn>저금통으로 이동</TopBtn></Link>
                <Link to="/myPage/profile/images">
                    <BottomBtn>
                        프로필 설정하러 가기 
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z" fill="#FFF"/>
                        </svg>
                    </BottomBtn>
                </Link>
            </BtnsWrapper>
        </Wrapper>
    )
}