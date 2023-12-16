import { useState, useEffect } from "react"
import styled from "styled-components"
import CategoryModal from "./CategoryModal"
import DatePickerModal from "./DatePickerModal"
import SaveOrNot from "./SaveOrNot"
import DeleteOrNot from "./DeleteOrNot"
import { Route, useNavigate, useParams } from "react-router-dom"

const Wrapper = styled.div`
    position: fixed;
    top: 1.5rem;
    left: 0;
    border-radius: 1rem 1rem 0rem 0rem;
    box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.12);
    width: 100%;
    min-height: calc(100vh - 1.5rem);
    overflow-x: hidden;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({theme})=>theme.colors.neutral.n0};
    z-index: 100;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        ${({theme})=>theme.fonts.headline20b}
    }
    svg{
        cursor: pointer;
    }
    margin-bottom: 1rem;
`

const EditWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* background-color: aliceblue; */
    margin-bottom: 1rem;
`

const ButtonWrapper = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    /* background-color: beige; */
    span{
        color: ${({theme}) => theme.colors.neutral.n100};
        ${({theme}) => theme.fonts.body17b}
    }
    height: 3.25rem;
    padding: 0.875rem 0rem;
    cursor: pointer;
    /* background-color: cadetblue; */
`
const Form = styled.div`
    background-color: aliceblue;
    /* margin-bottom: 15.563rem; */
    border-bottom: 2px solid ${({theme})=>theme.colors.primary.main};
    background-color: ${({theme})=>theme.colors.neutral.n0};
    width: 100%;
    height: 3.25rem;
    padding: 0.25rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 15.563rem; */
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        ${({theme})=>theme.fonts.body17b};
    }
    span{
        ${({theme})=>theme.fonts.body17b};
    }
    margin-bottom: 1rem;

`

const Input = styled.input`
    width: 100%;
    border-width: 0;
    &:focus{
        outline: none;
    }
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin : 0;
    }
    /* Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }
    /* background-color: lightcyan; */
    ${({theme})=>theme.fonts.body17b}
    color: ${({theme})=>theme.colors.neutral.n100};
`

const DeleteBtnWrapper = styled.div`
    padding: 0.625rem;
    /* background-color: beige; */
    cursor: pointer;
`

const TypeWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    button{
        display: flex;
        padding: 0.625rem 0.75rem;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        border: 0;
        border-radius: 0.5rem;
        color: ${({theme})=>theme.colors.neutral.n60};
        background-color: ${({theme})=>theme.colors.neutral.n15};
        ${({theme})=>theme.fonts.label13r}
        b{
            ${({theme})=>theme.fonts.body14b}
            pointer-events: none;
        }
        cursor: pointer;
    }
    .picked-btn{
        background-color: ${({theme})=>theme.colors.primary.surface};
        color: ${({theme})=>theme.colors.primary.main};
    }

`

const InputBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.75rem;
    span{
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.label13r}
        white-space: nowrap;
    }
    p{
        color: ${({theme})=>theme.colors.neutral.n40};
        ${({theme})=>theme.fonts.body14r}
        cursor: pointer;
    }
    svg{
        cursor: pointer;
    }
    .filled-input{
        color: ${({theme})=>theme.colors.neutral.n100};
    }
    .disappear{
        display: none;
    }
    
`

const LeftElmWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    /* background-color: beige; */
    input{
        width: 100%;
        border: 0;
        /* background-color: lightcyan; */
        ${({theme})=>theme.fonts.body14r}
        color: ${({theme})=>theme.colors.neutral.n100};
        &:focus{
            outline: none;
        }
        margin-right: 1.5rem;
        &::placeholder{
            color: ${({theme})=>theme.colors.neutral.n40};
            ${({theme})=>theme.fonts.body14r}
        }
    }
`

const RightElmWrapper = styled.div`
    /* background-color: bisque; */
    display: none;
    &.appear{
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            ${({theme})=>theme.fonts.label11r}
            color: ${({theme})=>theme.colors.neutral.n60};
        }
        svg{
            margin: 0.62rem;
        }
    }
    
`

const SaveBtnWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .delete-btn{
        ${({theme})=>theme.mediumBtns.tertiary}
    }
    .save-btn{
        ${({theme})=>theme.mediumBtns.primary}
        width: 100%;
    }
`

const today = new Date();
const todayFormat = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월 " + today.getDate() + "일";


export default function AddDataModal(){
    const [notEdited, setNotEdited] = useState<boolean>(true);
    function handleEditBtnClick(){
        setNotEdited(false);
    }

    const [amount, setAmount] = useState<string>("");
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        const { value } = e.target;
        if(value){
            setAmount(value);
            setBtnDisabled(false);
        } else{
            setAmount("")
            setBtnDisabled(true);
        }
    }
    function handleIconClick(){
        setAmount("");
        setBtnDisabled(true);
    }

    const [select, setSelect] = useState<{spend: boolean, income: boolean, deposit: boolean}>({spend: true, income: false, deposit: false});
    function handleTypeClick(e:any){
        const name = e.target.name;
        switch(name){
            case "spend":
                return setSelect({spend: true, income: false, deposit: false});
            case "income":
                return setSelect({spend: false, income: true, deposit: false});
            case "deposit":
                return setSelect({spend: false, income: false, deposit: true});
        }
    }

    const [contents, setContents] = useState<string>("");
    function handleContentsChange(e:any){
        setContents(e.target.value);
    }

    const [contentsLength, setContentsLength] = useState<number>(0);

    useEffect(()=>{
        const len = contents.length;
        if(len > 20){
            // input value가 contents일 때 적용
            setContents(contents.substring(0,20));
        }
        setContentsLength(len);
    },[contents])

    const navigate = useNavigate();
    function handleSaveClick(){
        navigate('/ledger/monthly');
    }

    const [showModal, setShowModal] = useState<boolean>(false);

    const [choosedCategory, setChoosedCategory] = useState<{id: number, emogi: string, name: string} | undefined>();

    const [saveOrNot, setSaveOrNot] = useState<boolean>(false);

    const [deleteOrNot, setDeleteOrNot] = useState<boolean>(false);

    const itmId = useParams().id;

    return(
        <>
        <Wrapper>
            <div>
            <TitleWrapper>
                <span>추가</span>
                <svg onClick={()=> setSaveOrNot(!saveOrNot)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.3407 19.6593C4.18723 19.5058 4.08594 19.3278 4.03683 19.1252C3.98772 18.9227 3.98772 18.7201 4.03683 18.5175C4.08594 18.3149 4.18416 18.14 4.33149 17.9926L9.81952 12.4954L4.33149 7.00737C4.18416 6.86618 4.08594 6.69429 4.03683 6.49171C3.99386 6.283 3.99386 6.07735 4.03683 5.87477C4.08594 5.67219 4.18723 5.49417 4.3407 5.3407C4.48803 5.18723 4.66298 5.08594 4.86556 5.03683C5.07428 4.98772 5.27993 4.98772 5.4825 5.03683C5.69122 5.08594 5.86924 5.18416 6.01657 5.33149L11.5046 10.8195L16.9926 5.33149C17.14 5.18416 17.3149 5.08594 17.5175 5.03683C17.7201 4.98772 17.9227 4.98772 18.1252 5.03683C18.3278 5.08594 18.5058 5.1903 18.6593 5.34991C18.8128 5.49724 18.9141 5.67219 18.9632 5.87477C19.0184 6.07735 19.0184 6.27993 18.9632 6.4825C18.9141 6.68508 18.8158 6.86004 18.6685 7.00737L13.1897 12.4954L18.6685 17.9926C18.8158 18.14 18.9141 18.3149 18.9632 18.5175C19.0123 18.7201 19.0123 18.9227 18.9632 19.1252C18.9141 19.3278 18.8128 19.5058 18.6593 19.6593C18.5058 19.8128 18.3278 19.9141 18.1252 19.9632C17.9227 20.0123 17.7201 20.0123 17.5175 19.9632C17.3149 19.9141 17.14 19.8158 16.9926 19.6685L11.5046 14.1805L6.01657 19.6685C5.86924 19.8158 5.69429 19.9141 5.49171 19.9632C5.28913 20.0123 5.08349 20.0123 4.87477 19.9632C4.67219 19.9141 4.49417 19.8128 4.3407 19.6593Z" fill="#777777"/>
                </svg>
            </TitleWrapper>
            {notEdited?
            (<EditWrapper>
                <ButtonWrapper onClick={handleEditBtnClick}>
                    <span>{amount.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 15.6403V17.6667C6 17.8534 6.14665 18 6.33329 18H8.35967C8.44633 18 8.53298 17.9667 8.59297 17.9L15.872 10.6277L13.3723 8.12804L6.09999 15.4004C6.03333 15.467 6 15.547 6 15.6403Z" fill="#B7B7B7"/>
                        <path d="M17.805 7.75476L16.2452 6.19497C15.9853 5.93501 15.5653 5.93501 15.3054 6.19497L14.0855 7.4148L16.5852 9.91446L17.805 8.69463C18.065 8.43466 18.065 8.01472 17.805 7.75476Z" fill="#B7B7B7"/>
                    </svg>
                </ButtonWrapper>
            </EditWrapper>
            ):(
            <Form onBlur={()=>setNotEdited(true)}>
                {/* 수정가능 부분 */}
                <Input type="number" name="allowanceCycle" value={amount} onChange={handleInputChange}/>
                <span>원</span>
                <DeleteBtnWrapper onClick={handleIconClick}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C10.7689 21 9.60978 20.764 8.52253 20.2921C7.43528 19.8259 6.47747 19.1784 5.64909 18.3496C4.82071 17.5209 4.17066 16.5655 3.69895 15.4835C3.23298 14.3957 3 13.2331 3 11.9957C3 10.764 3.23298 9.60719 3.69895 8.52518C4.17066 7.43741 4.81783 6.47914 5.64046 5.65036C6.46884 4.82158 7.42665 4.1741 8.5139 3.70791C9.60115 3.23597 10.7603 3 11.9914 3C13.2224 3 14.3816 3.23597 15.4688 3.70791C16.5618 4.1741 17.5197 4.82158 18.3423 5.65036C19.1707 6.47914 19.8207 7.43741 20.2924 8.52518C20.7641 9.60719 21 10.764 21 11.9957C21 13.2331 20.7641 14.3957 20.2924 15.4835C19.8207 16.5655 19.1707 17.5209 18.3423 18.3496C17.5197 19.1784 16.5647 19.8259 15.4775 20.2921C14.3902 20.764 13.2311 21 12 21ZM9.21285 15.6734C9.47747 15.6734 9.69895 15.5871 9.87728 15.4144L12.0086 13.2734L14.1486 15.4144C14.3154 15.5871 14.5283 15.6734 14.7872 15.6734C15.0403 15.6734 15.2531 15.5871 15.4257 15.4144C15.5983 15.2417 15.6846 15.0288 15.6846 14.7755C15.6846 14.5281 15.5954 14.3209 15.4171 14.154L13.2685 12.0043L15.4257 9.85468C15.5983 9.67626 15.6846 9.46906 15.6846 9.23309C15.6846 8.97986 15.5983 8.76978 15.4257 8.60288C15.2589 8.43022 15.0518 8.34388 14.8044 8.34388C14.5513 8.34388 14.3384 8.43022 14.1659 8.60288L12.0086 10.7525L9.86002 8.61151C9.68169 8.43885 9.46596 8.35252 9.21285 8.35252C8.96548 8.35252 8.75551 8.43885 8.58293 8.61151C8.41611 8.77842 8.33269 8.98849 8.33269 9.24173C8.33269 9.4777 8.41898 9.68201 8.59156 9.85468L10.7488 12.0043L8.59156 14.1626C8.41898 14.3353 8.33269 14.5396 8.33269 14.7755C8.33269 15.0288 8.41611 15.2417 8.58293 15.4144C8.75551 15.5871 8.96548 15.6734 9.21285 15.6734Z" fill="#B7B7B7"/>
                    </svg>
                </DeleteBtnWrapper>
            </Form>)}
            <TypeWrapper>
                <button onClick={handleTypeClick} name="spend" className={select.spend ? "picked-btn" : undefined}><b>지출</b> 나간 돈</button>
                <button onClick={handleTypeClick} name="income" className={select.income ? "picked-btn" : undefined}><b>수입</b> 들어온 돈</button>
                <button onClick={handleTypeClick} name="deposit" className={select.deposit ? "picked-btn" : undefined}><b>저금</b> 모은 돈</button>
            </TypeWrapper>
            {select.spend &&
            <InputBox>
                <LeftElmWrapper>
                    <span>분류</span>
                    {choosedCategory ?
                    <p className="filled-input" onClick={()=>setShowModal(!showModal)}>{choosedCategory.name}</p>
                    :<p onClick={()=>setShowModal(!showModal)}>선택해보세요</p>}
                </LeftElmWrapper>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z" fill="#777777"/>
                </svg>
            </InputBox>}
            <InputBox>
                <LeftElmWrapper>
                    <span>내용</span>
                    <input type="text" placeholder="내용을 남겨보세요" autoFocus value={contents} onChange={handleContentsChange}/>
                </LeftElmWrapper>
                <svg className={contentsLength > 0 ? "disappear" : undefined} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z" fill="#777777"/>
                </svg>
                <RightElmWrapper className={contentsLength > 0 ? "appear" : undefined}>
                    <span>{contentsLength}/20</span>
                    <svg onClick={()=>setContents("")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C10.7689 21 9.60978 20.764 8.52253 20.2921C7.43528 19.8259 6.47747 19.1784 5.64909 18.3496C4.82071 17.5209 4.17066 16.5655 3.69895 15.4835C3.23298 14.3957 3 13.2331 3 11.9957C3 10.764 3.23298 9.60719 3.69895 8.52518C4.17066 7.43741 4.81783 6.47914 5.64046 5.65036C6.46884 4.82158 7.42665 4.1741 8.5139 3.70791C9.60115 3.23597 10.7603 3 11.9914 3C13.2224 3 14.3816 3.23597 15.4688 3.70791C16.5618 4.1741 17.5197 4.82158 18.3423 5.65036C19.1707 6.47914 19.8207 7.43741 20.2924 8.52518C20.7641 9.60719 21 10.764 21 11.9957C21 13.2331 20.7641 14.3957 20.2924 15.4835C19.8207 16.5655 19.1707 17.5209 18.3423 18.3496C17.5197 19.1784 16.5647 19.8259 15.4775 20.2921C14.3902 20.764 13.2311 21 12 21ZM9.21285 15.6734C9.47747 15.6734 9.69895 15.5871 9.87728 15.4144L12.0086 13.2734L14.1486 15.4144C14.3154 15.5871 14.5283 15.6734 14.7872 15.6734C15.0403 15.6734 15.2531 15.5871 15.4257 15.4144C15.5983 15.2417 15.6846 15.0288 15.6846 14.7755C15.6846 14.5281 15.5954 14.3209 15.4171 14.154L13.2685 12.0043L15.4257 9.85468C15.5983 9.67626 15.6846 9.46906 15.6846 9.23309C15.6846 8.97986 15.5983 8.76978 15.4257 8.60288C15.2589 8.43022 15.0518 8.34388 14.8044 8.34388C14.5513 8.34388 14.3384 8.43022 14.1659 8.60288L12.0086 10.7525L9.86002 8.61151C9.68169 8.43885 9.46596 8.35252 9.21285 8.35252C8.96548 8.35252 8.75551 8.43885 8.58293 8.61151C8.41611 8.77842 8.33269 8.98849 8.33269 9.24173C8.33269 9.4777 8.41898 9.68201 8.59156 9.85468L10.7488 12.0043L8.59156 14.1626C8.41898 14.3353 8.33269 14.5396 8.33269 14.7755C8.33269 15.0288 8.41611 15.2417 8.58293 15.4144C8.75551 15.5871 8.96548 15.6734 9.21285 15.6734Z" fill="#B7B7B7"/>
                    </svg>
                </RightElmWrapper>
            </InputBox>
            <InputBox>
                <LeftElmWrapper>
                    <span>날짜</span>
                    {/* <p className="filled-input">{todayFormat}</p> */}
                    <DatePickerModal/>
                </LeftElmWrapper>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00002 15.875L12.88 11.995L9.00002 8.11501C8.61002 7.72501 8.61002 7.09501 9.00002 6.70501C9.39002 6.31501 10.02 6.31501 10.41 6.70501L15 11.295C15.39 11.685 15.39 12.315 15 12.705L10.41 17.295C10.02 17.685 9.39002 17.685 9.00002 17.295C8.62002 16.905 8.61002 16.265 9.00002 15.875Z" fill="#777777"/>
                </svg>
            </InputBox>
            </div>
            <SaveBtnWrapper>
                {itmId && <button className="delete-btn" onClick={()=>setDeleteOrNot(true)}>삭제</button>}
                <button className="save-btn" data-disabled={(select.spend === true && Number(amount) > 0 && choosedCategory && contentsLength > 0) || (Number(amount) > 0 && contentsLength > 0) ? "false" : "true"}
                onClick={handleSaveClick}>저장</button>
            </SaveBtnWrapper>
        </Wrapper>
        {showModal && <CategoryModal showModal={showModal} setShowModal={setShowModal} setChoosedCategory={setChoosedCategory}/>}
        {saveOrNot && <SaveOrNot setSaveOrNot={setSaveOrNot}/>}
        {deleteOrNot && <DeleteOrNot setDeleteOrNot={setDeleteOrNot}/>}
        </>
    )
}