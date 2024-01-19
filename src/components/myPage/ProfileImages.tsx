import { ProfileImagesData } from "model/model"
import { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    padding-top: calc(${({theme})=>theme.height.topbar} + ${({theme})=>theme.height.topPadding});
    padding-left: 1rem;
    padding-bottom: calc(${({theme})=>theme.height.navbar} + ${({theme})=>theme.height.bottomPadding});
    padding-right: 1rem;
`

const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    background-color: #fff;
    justify-items: center;
    row-gap: 0.5rem;
`

const ImageWrapper = styled.div`
    /* background-color: beige; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 3.25rem;
    height: 3.25rem;
    &.picked{
        border: 3px solid ${({theme})=>theme.colors.primary.main};
        border-radius: 62.4375rem;
    }
    &.not-locked{
        cursor: pointer;
    }
`

const SvgWrapper = styled.div`
    position: absolute;
    width: 3.25rem;
    height: 3.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`

const ProfileImage = styled.div`
    width: 3.25rem;
    height: 3.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    img{
        width: 3.25rem;
        height: 3.25rem;
        pointer-events: none;
    }
    &.locked{
        background-color: lightgray 50%;
        opacity: 0.16;
    }
`

const Button = styled.div`
    ${({theme})=>theme.mediumBtns.primary}
    width: calc(100% - 2rem);
    position: absolute;
    bottom: calc(${({theme})=>theme.height.navbar} + 0.5rem);
`

const profileImgData : ProfileImagesData = [
    {id: 1, img_url: "/public_assets/profile_11.png", lock: true, pick: false},
    {id: 2, img_url: "/public_assets/profile_12.png", lock: true, pick: false},
    {id: 3, img_url: "/public_assets/profile_13.png", lock: false, pick: false},
    {id: 4, img_url: "/public_assets/profile_15.png", lock: true, pick: false},
    {id: 5, img_url: "/public_assets/profile_11.png", lock: false, pick: false},
    {id: 6, img_url: "/public_assets/profile_12.png", lock: false, pick: false},
    {id: 7, img_url: "/public_assets/profile_13.png", lock: false, pick: false},
    {id: 8, img_url: "/public_assets/profile_15.png", lock: true, pick: false},
    {id: 9, img_url: "/public_assets/profile_11.png", lock: true, pick: false},
    {id: 10, img_url: "/public_assets/profile_12.png", lock: false, pick: true},
    {id: 11, img_url: "/public_assets/profile_13.png", lock: true, pick: false},
    {id: 12, img_url: "/public_assets/profile_15.png", lock: true, pick: false},
]

export default function ProfileImages(){
    const [profileImg, setProfileImg] = useState<ProfileImagesData>(profileImgData);
    function handleImgClick(id: number){
        const result = profileImg.map(itm => itm.id === id ? {...itm, pick: true}: {...itm, pick: false});
        setProfileImg(result);
    }

    return(
        <Wrapper>
            <Images>
                {profileImg.map(itm => (
                <ImageWrapper onClick={()=>handleImgClick(itm.id)} className={itm.lock?undefined:(itm.pick?"picked not-locked":"not-locked")} key={itm.id}>
                    {itm.lock && <SvgWrapper>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 8.5H17V6.5C17 3.74 14.76 1.5 12 1.5C9.24 1.5 7 3.74 7 6.5V8.5H6C4.9 8.5 4 9.4 4 10.5V20.5C4 21.6 4.9 22.5 6 22.5H18C19.1 22.5 20 21.6 20 20.5V10.5C20 9.4 19.1 8.5 18 8.5ZM12 17.5C10.9 17.5 10 16.6 10 15.5C10 14.4 10.9 13.5 12 13.5C13.1 13.5 14 14.4 14 15.5C14 16.6 13.1 17.5 12 17.5ZM15.1 8.5H8.9V6.5C8.9 4.79 10.29 3.4 12 3.4C13.71 3.4 15.1 4.79 15.1 6.5V8.5Z" fill="#777777"/>
                        </svg>
                    </SvgWrapper>}
                    <ProfileImage className={itm.lock?"locked":undefined}>
                        <img src="/public_assets/profile_11.png" alt="profile"/>
                    </ProfileImage>
                </ImageWrapper>
                ))}
            </Images>
            <Button>저장</Button>
        </Wrapper>
    )
}