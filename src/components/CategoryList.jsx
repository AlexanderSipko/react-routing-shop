import CategoryItem from "./CtegoryItem"

function CategoryList({catalog=[]}) {

    return (
        <div className="list">
            
            {catalog.map((el) => 
                <CategoryItem key={el.idCategory} cat={el}/>
            )}
        </div> 
    )
}

export default CategoryList