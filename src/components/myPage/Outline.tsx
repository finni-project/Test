import Footer from "components/Footer"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
`

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
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

const Inform = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    h2{
        ${({theme})=>theme.fonts.body17b}
    }
    span{
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.body14r}
    }
`

const List = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.75rem;
    cursor: pointer;
    /* background-color: aliceblue; */
    span{
        ${({theme})=>theme.fonts.body14r}
        pointer-events: none;
    }
    svg{
        pointer-events: none;
    }
`

const LogoutBtn = styled.div`
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span{
        ${({theme})=>theme.fonts.body14b}
        color: ${({theme})=>theme.colors.neutral.n60};
        padding: 0.5625rem 0.5rem;
        /* background-color: beige; */
        pointer-events: none;
    }
`

const marginStyle = {marginBottom : "2rem"};

const profileData : {img_path: string, nick_name: string, age: number} = {
    img_path: "/public_assets/profile13.png",
    nick_name: "삐약이",
    age: 11,
}

export default function Outline(){
    return(
        <>
            <Wrapper>
                <ProfileWrapper>
                    <ProfileImg>
                        <img src={profileData.img_path} alt="profile"/>
                    </ProfileImg>
                    <Inform>
                        <h2>{profileData.nick_name}</h2>
                        <span>{profileData.age}살</span>
                    </Inform>
                </ProfileWrapper>
                <List>
                    <Link to="/myPage/profile"><span>내 정보 수정</span></Link>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z" fill="#777777"/>
                    </svg>
                </List>
                <List style={marginStyle}>
                    <Link to="/myPage/allowance"><span>용돈 정보</span></Link>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z" fill="#777777"/>
                    </svg>
                </List>
                <List>
                    <Link to="/myPage/inquiry"><span>고객센터</span></Link>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z" fill="#777777"/>
                    </svg>
                </List>
                <LogoutBtn>
                    <span>로그아웃</span>
                </LogoutBtn>
            </Wrapper>
            <Footer/>
        </>
    )
}