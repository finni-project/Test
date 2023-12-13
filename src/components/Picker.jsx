import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import styled from 'styled-components';

const Wrapper = styled.div`
    z-index: 100;
    position: fixed;
    left: 1rem;
`

export default function EmojiPicker({handleEmojiPick}){
    return(
        <Wrapper>
            <Picker data={data} previewPosition="none" onEmojiSelect={handleEmojiPick} />
        </Wrapper>
    )
}