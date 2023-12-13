import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

export default function EmojiPicker({handleEmojiPick}){
    return(
        <>
            <Picker data={data} previewPosition="none" onEmojiSelect={handleEmojiPick} />
        </>
    )
}