import Lottie from "lottie-react";
import clapping from "../../src_assets/clapping.json"
import styled from "styled-components";

const LottieWrapper = styled.div`
    width: 10.813rem;
`

export default function GoalComplete(){
    return(
        <LottieWrapper>
            <Lottie animationData={clapping} />
        </LottieWrapper>
    )
}