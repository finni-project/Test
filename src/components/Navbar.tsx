import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useRef } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    background-color: lightblue;
    padding: 12px 0px;
    display: inline-flex;
    justify-content: center;
    gap: 16px;
    
    .home-link {
        path{
            fill: ${({theme})=>theme.colors.neutral.n100};
        }
        span{
            color: ${({theme})=>theme.colors.neutral.n100};
        }
    }
    .banknote-link, .school-link, .save-link{
        path{
            fill: ${({theme})=>theme.colors.neutral.n100};
            stroke: ${({theme})=>theme.colors.neutral.n100};
        }
        span{
            color: ${({theme})=>theme.colors.neutral.n100};
        }
    }
    .save-link{
        rect{
            fill: ${({theme})=>theme.colors.neutral.n100};
        }
        circle{
            stroke: ${({theme})=>theme.colors.neutral.n100};
        }
    }
    .my-link{
        g{
            circle:nth-child(1){
                stroke: ${({theme})=>theme.colors.neutral.n100};
            }
            circle:nth-child(2){
                fill: ${({theme})=>theme.colors.neutral.n100};
            }
            g > circle{
                fill: ${({theme})=>theme.colors.neutral.n100};
            }
        }
        span{
            color: ${({theme})=>theme.colors.neutral.n100};
        }
    }
`
const IconWrapper = styled.div`
    /* background-color: white; */
    width: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    span{
        ${({theme})=>theme.fonts.label11r};
        color: ${({theme})=>theme.colors.neutral.n60};
    }
`

export default function Navbar(){

    return(
        <Wrapper>
            <NavLink to="/" className={({isActive}) => (isActive? "home-link" : undefined)}>
                <IconWrapper>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.121 9.05305L15.536 1.4625C14.5972 0.52593 13.3257 0 12 0C10.6743 0 9.40276 0.52593 8.464 1.4625L0.879011 9.05305C0.599437 9.331 0.377782 9.66171 0.226894 10.026C0.0760072 10.3903 -0.0011104 10.781 1.20795e-05 11.1753V20.9982C1.20795e-05 21.7943 0.316082 22.5578 0.878691 23.1208C1.4413 23.6837 2.20436 24 3.00001 24H21C21.7956 24 22.5587 23.6837 23.1213 23.1208C23.6839 22.5578 24 21.7943 24 20.9982V11.1753C24.0011 10.781 23.924 10.3903 23.7731 10.026C23.6222 9.66171 23.4006 9.331 23.121 9.05305ZM15 21.9988H9V18.0624C9 17.2663 9.31607 16.5028 9.87868 15.9399C10.4413 15.3769 11.2044 15.0606 12 15.0606C12.7956 15.0606 13.5587 15.3769 14.1213 15.9399C14.6839 16.5028 15 17.2663 15 18.0624V21.9988ZM22 20.9982C22 21.2636 21.8946 21.5181 21.7071 21.7057C21.5196 21.8934 21.2652 21.9988 21 21.9988H17V18.0624C17 16.7356 16.4732 15.463 15.5355 14.5248C14.5978 13.5865 13.3261 13.0594 12 13.0594C10.6739 13.0594 9.40215 13.5865 8.46447 14.5248C7.52679 15.463 7 16.7356 7 18.0624V21.9988H3.00001C2.73479 21.9988 2.48044 21.8934 2.2929 21.7057C2.10537 21.5181 2.00001 21.2636 2.00001 20.9982V11.1753C2.00094 10.9101 2.1062 10.656 2.29301 10.4679L9.878 2.88035C10.4417 2.31894 11.2047 2.00377 12 2.00377C12.7953 2.00377 13.5583 2.31894 14.122 2.88035L21.707 10.4709C21.8931 10.6583 21.9983 10.9112 22 11.1753V20.9982Z"
                        fill="#B7B7B7"/>
                    </svg>
                    <span>홈</span>
                </IconWrapper>
            </NavLink>
            <NavLink to="/ledger" className={({isActive}) => (isActive? "banknote-link" : undefined)}>
                <IconWrapper>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2308 22.9937H3.78123C1.26442 22.9937 0 21.7533 0 19.2606V4.55716C0 2.06444 1.26442 0.824097 3.78123 0.824097H20.2308C22.7476 0.824097 24 2.07648 24 4.55716V19.2606C24 21.7413 22.7476 22.9937 20.2308 22.9937ZM19.1333 21.6H4.87707C2.69583 21.6 1.6 20.7048 1.6 18.9058V8.29419C1.6 6.49518 2.69583 5.60001 4.87707 5.60001H19.1333C21.3146 5.60001 22.4 6.50387 22.4 8.29419V18.9058C22.4 20.6961 21.3146 21.6 19.1333 21.6Z"
                        fill="#B7B7B7"/>
                        <path d="M8.95729 19.048C9.3222 19.048 9.59167 18.8228 9.6815 18.4736L11.8092 10.6525H11.8653L13.9931 18.4736C14.0773 18.8228 14.3524 19.048 14.7117 19.048C15.0878 19.048 15.3798 18.8171 15.4527 18.4511L17.2773 9.58829C17.2941 9.48694 17.311 9.39122 17.311 9.28986C17.311 8.9858 17.0696 8.79999 16.7664 8.79999C16.4913 8.79999 16.2836 8.96891 16.2331 9.24482L14.6836 17.5671H14.6387L12.4099 9.28986C12.3369 9.0027 12.1629 8.82251 11.8429 8.82251C11.5173 8.82251 11.3377 9.01959 11.259 9.31239L9.03589 17.5671H8.99097L7.4415 9.24482C7.39097 8.97454 7.18326 8.79999 6.90255 8.79999C6.5994 8.79999 6.36361 8.9858 6.36361 9.28986C6.36361 9.38559 6.37484 9.48131 6.39167 9.58267L8.22185 18.4511C8.29483 18.8171 8.58115 19.048 8.95729 19.048ZM5.9594 14.2393H17.7152C17.9229 14.2393 18.0801 14.076 18.0801 13.8677C18.0801 13.6537 17.9229 13.5017 17.7152 13.5017H5.9594C5.75729 13.5017 5.6001 13.6537 5.6001 13.8677C5.6001 14.076 5.75729 14.2393 5.9594 14.2393Z"
                        fill="#B7B7B7" stroke="#B7B7B7" stroke-width="0.5"/>
                    </svg>
                    <span>용돈노트</span>
                </IconWrapper>
            </NavLink>
            <NavLink to="/piggyBank" className={({isActive}) => (isActive? "save-link" : undefined)}>
                <IconWrapper>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_631_1244)">
                            <rect y="20" width="24" height="1.6" rx="0.8" fill="#B7B7B7"/>
                            <mask id="mask0_631_1244" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="-1" width="24" height="20">
                                <path d="M0.800049 18.8H23.2V-0.400011H0.800049V18.8Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_631_1244)">
                                <circle cx="12" cy="12" r="10.2" stroke="#B7B7B7" stroke-width="2"/>
                                <path d="M9.46004 16.9569C9.78157 16.9569 10.019 16.7585 10.0982 16.4509L11.9729 9.55954H12.0224L13.8972 16.4509C13.9714 16.7585 14.2137 16.9569 14.5303 16.9569C14.8618 16.9569 15.119 16.7535 15.1833 16.431L16.7909 8.62184C16.8058 8.53253 16.8206 8.44819 16.8206 8.35888C16.8206 8.09097 16.6079 7.92725 16.3408 7.92725C16.0984 7.92725 15.9154 8.07609 15.8709 8.31919L14.5056 15.6521H14.466L12.5022 8.35888C12.4379 8.10586 12.2846 7.94709 12.0026 7.94709C11.7157 7.94709 11.5574 8.12074 11.4882 8.37873L9.52929 15.6521H9.48971L8.12445 8.31919C8.07993 8.08105 7.8969 7.92725 7.64957 7.92725C7.38245 7.92725 7.17469 8.09097 7.17469 8.35888C7.17469 8.44323 7.18459 8.52757 7.19943 8.61688L8.81203 16.431C8.87633 16.7535 9.12861 16.9569 9.46004 16.9569ZM6.81854 12.7199H17.1768C17.3598 12.7199 17.4983 12.5761 17.4983 12.3925C17.4983 12.204 17.3598 12.07 17.1768 12.07H6.81854C6.64046 12.07 6.50195 12.204 6.50195 12.3925C6.50195 12.5761 6.64046 12.7199 6.81854 12.7199Z"
                                fill="#B7B7B7" stroke="#B7B7B7" stroke-width="0.5"/>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_631_1244">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span>저금통</span>
                </IconWrapper>
            </NavLink>
            <NavLink to="/economyClass" className={({isActive}) => (isActive? "school-link" : undefined)}>
                <IconWrapper>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2C0.895431 2 0 2.89543 0 4V18C0 19.1046 0.89543 20 2 20H22C23.1046 20 24 19.1046 24 18V4C24 2.89543 23.1046 2 22 2H2ZM2.5 3.5C1.94772 3.5 1.5 3.94772 1.5 4.5V17.5C1.5 18.0523 1.94772 18.5 2.5 18.5H21.5C22.0523 18.5 22.5 18.0523 22.5 17.5V4.5C22.5 3.94772 22.0523 3.5 21.5 3.5H2.5Z" fill="#B7B7B7"/>
                        <path d="M8 20H16V21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21V20Z" fill="#B7B7B7"/>
                        <path d="M10.6364 14.6476L14.9782 12.1143C15.7091 11.681 15.7091 10.6143 14.9782 10.181L10.6364 7.64764C9.90545 7.22541 9 7.75875 9 8.6143V13.681C9 14.5254 9.90545 15.0699 10.6364 14.6476Z" fill="#B7B7B7"/>
                    </svg>
                    <span>경제교실</span>
                </IconWrapper>
            </NavLink>
            <NavLink to="/myPage" className={({isActive}) => (isActive? "my-link" : undefined)}>
                <IconWrapper>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_678_1237)">
                            <circle cx="12" cy="12" r="11.2" stroke="#B7B7B7" stroke-width="1.6"/>
                            <circle cx="12" cy="8.79999" r="4" fill="#B7B7B7"/>
                            <mask id="mask0_678_1237" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
                                <circle cx="12" cy="12" r="9" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_678_1237)">
                                <circle cx="11.9999" cy="24" r="9.6" fill="#B7B7B7"/>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_678_1237">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span>MY</span>
                </IconWrapper>
            </NavLink>
        </Wrapper>
    )
}