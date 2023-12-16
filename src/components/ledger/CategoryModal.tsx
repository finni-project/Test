import AddingCategory from "components/allowanceInfo/AddingCategory"
import { Category } from "model/model"
import { useEffect, useState } from "react"
import styled from "styled-components"
import UpdateCategory from "./UpdateCategory"

const Wrapper = styled.div`
    z-index: 200;
    background-color: ${({theme})=>theme.colors.neutral.n0};
    width: 100%;
    min-height: 17rem;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 0.5rem;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 1rem 1rem 0rem 0rem;
    box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.12);
    position: fixed;
    left: 0;
    bottom: 0;
    &.edit{
        top: 2.5rem;
    }
`

const TitleWrapper = styled.div`
    ${({theme})=>theme.fonts.body14b}
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5625rem 0.5rem;
    h2{
        color: ${({theme})=>theme.colors.neutral.n100};
    }
    span{
        color: ${({theme})=>theme.colors.neutral.n60};
        cursor: pointer;
    }
    svg{
        cursor: pointer;
    }
    margin-bottom: 1rem;
`
const ListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 1rem;
    @media screen and (max-width: 400px){
        grid-template-columns: repeat(auto-fill, minmax(4.5rem, auto));
        justify-items: initial;
    }
`

const CategoryWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    div{
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 62.4375rem;
        background-color: ${({theme})=>theme.colors.neutral.n15};
        display: flex;
        justify-content: center;
        align-items: center;
        ${({theme})=>theme.fonts.title28b}
        pointer-events: none;
    }
    span{
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.label13r}
        pointer-events: none;
    }
`

const categoryArr = [{id: 1, emogi: "🍚", name: "밥"},
        {id: 2, emogi: "☕️", name: "카페/간식"},
        {id: 3, emogi: "🕹️", name: "게임게임게임"},
        {id: 4, emogi: "🧸", name: "장난감"},
        {id: 5, emogi: "👕", name: "옷"},
        {id: 6, emogi: "💍", name: "액세서리"},
        {id: 7, emogi: "🧴", name: "미용"},
        {id: 8, emogi: "🎬", name: "영화"},
        {id: 9, emogi: "🎤", name: "노래방"},
        {id: 10, emogi: "🎁", name: "선물"},
    ];

type CategoryModalProps = {
    showModal: boolean | undefined;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setChoosedCategory: React.Dispatch<React.SetStateAction<{id: number, emogi: string, name: string} | undefined>>;
}

export default function CategoryModal({showModal, setShowModal, setChoosedCategory}:CategoryModalProps){
    const [isEdit, setIsEdit] = useState<boolean>(false)
    function handleEditClick(){
        setIsEdit(true);
    }

    const [pickedCategory, setPickedCategory] = useState<{ id: number, emogi: string, name: string }>();

    function handleCategoryEdit(e: any){
        const id = Number(e.target.id);
        const selectedCategory = (categoryArr.filter(itm => itm.id === id))[0];
        setPickedCategory(selectedCategory);
    }

    function handleCategoryChoose(e: any){
        const id = Number(e.target.id);
        const itm = (categoryArr.filter(itm => itm.id === id))[0];
        setChoosedCategory(itm);
        setShowModal(!showModal);
    }

    const [notAdding, setNotAdding] = useState<boolean>(true);
    function handleAddBtnClick(){
        setNotAdding(false);
    }

    return(
        <Wrapper className={isEdit ? "edit" : undefined}>
            <TitleWrapper>
                <h2>분류</h2>
                {isEdit ?
                <svg onClick={()=>setShowModal(!showModal)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.3407 19.6593C4.18723 19.5058 4.08594 19.3278 4.03683 19.1252C3.98772 18.9227 3.98772 18.7201 4.03683 18.5175C4.08594 18.3149 4.18416 18.14 4.33149 17.9926L9.81952 12.4954L4.33149 7.00737C4.18416 6.86618 4.08594 6.69429 4.03683 6.49171C3.99386 6.283 3.99386 6.07735 4.03683 5.87477C4.08594 5.67219 4.18723 5.49417 4.3407 5.3407C4.48803 5.18723 4.66298 5.08594 4.86556 5.03683C5.07428 4.98772 5.27993 4.98772 5.4825 5.03683C5.69122 5.08594 5.86924 5.18416 6.01657 5.33149L11.5046 10.8195L16.9926 5.33149C17.14 5.18416 17.3149 5.08594 17.5175 5.03683C17.7201 4.98772 17.9227 4.98772 18.1252 5.03683C18.3278 5.08594 18.5058 5.1903 18.6593 5.34991C18.8128 5.49724 18.9141 5.67219 18.9632 5.87477C19.0184 6.07735 19.0184 6.27993 18.9632 6.4825C18.9141 6.68508 18.8158 6.86004 18.6685 7.00737L13.1897 12.4954L18.6685 17.9926C18.8158 18.14 18.9141 18.3149 18.9632 18.5175C19.0123 18.7201 19.0123 18.9227 18.9632 19.1252C18.9141 19.3278 18.8128 19.5058 18.6593 19.6593C18.5058 19.8128 18.3278 19.9141 18.1252 19.9632C17.9227 20.0123 17.7201 20.0123 17.5175 19.9632C17.3149 19.9141 17.14 19.8158 16.9926 19.6685L11.5046 14.1805L6.01657 19.6685C5.86924 19.8158 5.69429 19.9141 5.49171 19.9632C5.28913 20.0123 5.08349 20.0123 4.87477 19.9632C4.67219 19.9141 4.49417 19.8128 4.3407 19.6593Z" fill="#B7B7B7"/>
                </svg>
                : <span onClick={handleEditClick}>편집</span>}
            </TitleWrapper>
            {pickedCategory?
            <UpdateCategory pickedCategory={pickedCategory}/>
            :notAdding?
            (<ListWrapper>
                {categoryArr.map((itm)=>{
                    return(
                        <CategoryWrapper id={itm.id+""} key={itm.id} onClick={isEdit? handleCategoryEdit: handleCategoryChoose}>
                            <div>{itm.emogi}</div>
                            <span>{itm.name}</span>
                        </CategoryWrapper>
                    )
                })}
                {isEdit &&
                <CategoryWrapper onClick={handleAddBtnClick}>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12.2617C4 11.9167 4.1237 11.6204 4.37109 11.373C4.61849 11.1257 4.91471 11.002 5.25977 11.002H11.0117V5.25977C11.0117 4.91471 11.1322 4.61849 11.373 4.37109C11.6139 4.1237 11.9102 4 12.2617 4C12.6068 4 12.903 4.1237 13.1504 4.37109C13.3978 4.61849 13.5215 4.91471 13.5215 5.25977V11.002H19.2734C19.612 11.002 19.9049 11.1257 20.1523 11.373C20.3997 11.6204 20.5234 11.9167 20.5234 12.2617C20.5234 12.6133 20.3997 12.9128 20.1523 13.1602C19.9049 13.401 19.612 13.5215 19.2734 13.5215H13.5215V19.2734C13.5215 19.612 13.3978 19.9049 13.1504 20.1523C12.903 20.3997 12.6068 20.5234 12.2617 20.5234C11.9102 20.5234 11.6139 20.3997 11.373 20.1523C11.1322 19.9049 11.0117 19.612 11.0117 19.2734V13.5215H5.25977C4.91471 13.5215 4.61849 13.401 4.37109 13.1602C4.1237 12.9128 4 12.6133 4 12.2617Z" fill="#777777"/>
                        </svg>
                    </div>
                    <span>추가</span>
                </CategoryWrapper>}
            </ListWrapper>)
            : <AddingCategory page="ledgerModal" setNotAdding={setNotAdding}/>}
        </Wrapper>
    )
}