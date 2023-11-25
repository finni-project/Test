import CategoryList from "components/CategoryList";
import FormTop from "components/FormTop";
import AddingCategory from "./AddingCategory";

export default function CategoryReceiving(){
    return(
        <>
            <FormTop step={"third"} text={"용돈 분류"} title={"용돈은 주로 어디에 사용해요?"} detail={"여러 개 선택할 수 있어요."}/>
            <CategoryList />
        </>
    )
}