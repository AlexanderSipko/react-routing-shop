import {Link} from 'react-router-dom'

function MealItem({idMeal, strMeal, strMealThumb}) {

    return (
        <div className="card">
            <div className="card-image">
            <img src={strMealThumb} alt={strMeal}/>
            <h5 style={{marginLeft:10}}>{strMeal}</h5>
            </div>
            
            <div className="card-action">
                <Link
                    to={`/meal/${idMeal}`}
                    className='btn blue'>
                    Watch recipe
                </Link>
            </div>
        </div>
    )
}

export default MealItem