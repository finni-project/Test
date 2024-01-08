import styled from "styled-components"

const StepCirclesWrapper = styled.div`
    /* background-color: aliceblue; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.25rem;
    .filled-circle{
        background-color: ${({theme}) => theme.colors.primary.main};
    }
    margin-bottom: 2rem;
`
const StepCircle = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background-color: ${({theme}) => theme.colors.neutral.n30};
`
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    /* background-color: #fff; */
    margin-bottom: 2rem;
    span{
        color: ${({theme}) => theme.colors.neutral.n60};
        ${({theme}) => theme.fonts.label13b}
    }
    h2{
        color: ${({theme}) => theme.colors.neutral.n100};
        ${({theme}) => theme.fonts.headline22b}
    }
    p{
        color: ${({theme}) => theme.colors.neutral.n60};
        ${({theme}) => theme.fonts.body14r}
    }
`

type FormTopProps = {
    type: string;
    step: string;
    text: string;
    title: string;
    detail: string | undefined;
}

export default function FormTop({type, step, text, title, detail}:FormTopProps){
    return(
        <>
            <StepCirclesWrapper>
            {type === "ledger"?
            (<>
                <StepCircle className={step==="first"? "filled-circle":undefined}/>
                <StepCircle className={step==="second"? "filled-circle":undefined}/>
                <StepCircle className={step==="third"? "filled-circle":undefined}/>
            </>)
            :(<>
                <StepCircle className={step==="first"? "filled-circle":undefined}/>
                <StepCircle className={step==="second"? "filled-circle":undefined}/>
                <StepCircle className={step==="third"? "filled-circle":undefined}/>
                <StepCircle className={step==="fourth"? "filled-circle":undefined}/>
            </>)
            }
            </StepCirclesWrapper>
            <TitleWrapper>
                <span>{text}</span>
                <h2>{title}</h2>
                <p>{detail}</p>
            </TitleWrapper>
        </>
    )
}