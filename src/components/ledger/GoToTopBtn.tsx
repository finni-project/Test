import styled from "styled-components"

const Wrapper = styled.div`
    position: fixed;
    bottom: calc(${({theme})=>theme.height.navbar} + 0.75rem + 3.375rem + 0.5rem);
    right: 0.75rem;
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 62.4375rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3125rem;
    border: 2px solid ${({theme})=>theme.colors.primary.main};
    background-color: ${({theme})=>theme.colors.neutral.n0};
    cursor: pointer;
    svg{
        pointer-events: none;
    }
    span{
        color: ${({theme})=>theme.colors.primary.main};
        ${({theme})=>theme.fonts.body14b}
        pointer-events: none;
    }
`

export default function GoToTopBtn(){
    function handleGoToTopClick(){
        window.scrollTo(0, 0);
    }
    
    return(
        <Wrapper onClick={handleGoToTopClick}>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.08884 0.362023C5.59358 -0.120674 6.40643 -0.120674 6.91116 0.362023L11.6133 4.8589C12.4357 5.64546 11.8593 7 10.7021 7L1.29786 7C0.140683 7 -0.435749 5.64546 0.386707 4.8589L5.08884 0.362023Z" fill="#5E4EF4"/>
            </svg>
            <span>TOP</span>
        </Wrapper>
    )
}