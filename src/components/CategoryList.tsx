import styled from "styled-components"
import {useState, useEffect} from "react"
import AddingCategory from "./allowanceInfo/AddingCategory"
import { Category } from "model/model"

const CategoryListWrapper = styled.div`
    /* background-color: beige; */
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
    @media screen and (max-width: 400px){
        grid-template-columns: repeat(auto-fill, minmax(4.5rem, auto));
        justify-items: initial;
    }
`

const CategoryWrapper = styled.div`
    /* background-color: bisque; */
    grid-column: span 1;
    /* width: max-content; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.5rem;
    p{
        color: ${({theme})=>theme.colors.neutral.n60};
        ${({theme})=>theme.fonts.label13r}
        white-space: nowrap;
        /* background-color: lightskyblue; */
    }
    cursor: pointer;
    .icon-opacity{
        opacity: 1;
    }
`
const IconWrapper = styled.div`
    border-radius: 62.4375rem;
    opacity: 0.5;
    background-color: ${({theme})=>theme.colors.neutral.n15};
    width: 3.5rem;
    height: 3.5rem;
    /* padding: 0.6875rem 0.875rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    span{
        ${({theme})=>theme.fonts.title28b}
        pointer-events: none;
        /* background-color: lightseagreen; */
    }
`

const Button = styled.button`
    width: 100%;
    ${({theme})=>theme.mediumBtns.primary}
`

const categoryArr: Category = [{id: 1, emogi: "🍚", name: "밥", active:false},
        {id: 2, emogi: "☕️", name: "카페/간식", active:false},
        {id: 3, emogi: "🕹️", name: "게임게임게임", active:false},
        {id: 4, emogi: "🧸", name: "장난감", active:false},
        {id: 5, emogi: "👕", name: "옷", active:false},
        {id: 6, emogi: "💍", name: "액세서리", active:false},
        {id: 7, emogi: "🧴", name: "미용", active:false},
        {id: 8, emogi: "🎬", name: "영화", active:false},
        {id: 9, emogi: "🎤", name: "노래방", active:false},
        {id: 10, emogi: "🎁", name: "선물", active:false},
    ];

const addBtnStyle = {opacity:1};


export default function CategoryList(){
    const [categoryState, setCategoryState] = useState<Category>(categoryArr);
    function handleCategoryClick(e:any){
        const cId = e.target.id;
        setCategoryState(
            categoryState.map(itm => itm.id === Number(cId) ? {...itm, active: !(itm.active)} : itm)
        );
    }
    const [notDisabled, setNotDisabled] = useState<boolean>(true);
    function changeButtonState(){
        const result = categoryState.filter(itm => itm.active === true);
        if(result.length !== 0){
            setNotDisabled(false);
        } else{
            setNotDisabled(true);
        }
    }

    const [notAdding, setNotAdding] = useState<boolean>(true);
    function handleAddBtnClick(){
        setNotAdding(false)
    }

    useEffect(()=>{
        changeButtonState();
    },[categoryState])
    
    useEffect(()=>{
        setCategoryState(categoryArr)
    },[notAdding])

    return(
        <>
            {notAdding?
            (<>
                <CategoryListWrapper>
                    {categoryState.map(itm=>
                        <CategoryWrapper id={itm.id+''} key={itm.id}
                            onClick={handleCategoryClick}>
                            <IconWrapper className={itm.active?"icon-opacity":undefined}>
                                <span>{itm.emogi}</span>
                            </IconWrapper>
                            <p>{itm.name}</p>
                        </CategoryWrapper>
                    )}
                    <CategoryWrapper onClick={handleAddBtnClick}>
                        <IconWrapper style={addBtnStyle}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12.2617C4 11.9167 4.1237 11.6204 4.37109 11.373C4.61849 11.1257 4.91471 11.002 5.25977 11.002H11.0117V5.25977C11.0117 4.91471 11.1322 4.61849 11.373 4.37109C11.6139 4.1237 11.9102 4 12.2617 4C12.6068 4 12.903 4.1237 13.1504 4.37109C13.3978 4.61849 13.5215 4.91471 13.5215 5.25977V11.002H19.2734C19.612 11.002 19.9049 11.1257 20.1523 11.373C20.3997 11.6204 20.5234 11.9167 20.5234 12.2617C20.5234 12.6133 20.3997 12.9128 20.1523 13.1602C19.9049 13.401 19.612 13.5215 19.2734 13.5215H13.5215V19.2734C13.5215 19.612 13.3978 19.9049 13.1504 20.1523C12.903 20.3997 12.6068 20.5234 12.2617 20.5234C11.9102 20.5234 11.6139 20.3997 11.373 20.1523C11.1322 19.9049 11.0117 19.612 11.0117 19.2734V13.5215H5.25977C4.91471 13.5215 4.61849 13.401 4.37109 13.1602C4.1237 12.9128 4 12.6133 4 12.2617Z" fill="#777777"/>
                            </svg>
                        </IconWrapper>
                        <p>추가</p>
                    </CategoryWrapper>
                </CategoryListWrapper>
                <Button data-disabled={notDisabled}>저장</Button>
            </>)
            : <AddingCategory page={undefined} setNotAdding={setNotAdding}/>}
        </>
    )
}