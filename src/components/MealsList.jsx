
import MealItem from './MealItem'

function MealList({meals}) {

    return (
        <>
            <div className="list">
                {meals.map((el) => 
                    <MealItem key={el.idMeal} {...el} />
                )}
            </div> 
        </>
    )
}

export default MealList