import { useParams, useNavigate } from "react-router-dom"
import {getFilteredCategories} from '../api'
import { useState, useEffect} from "react"
import Preloads from '../components/Preloads'
import MealList from '../components/MealsList'

function Category() {

    const {strCategory} = useParams()
    const navigate = useNavigate()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        getFilteredCategories(strCategory).then(data => setMeals(data.meals))
    }, [strCategory])

    return (
        <div className="container">
            <button className="btn blue goBack" onClick={() => navigate(-1)}>go back</button>
            <h4>{strCategory}</h4>
            {!meals.length? <Preloads/>: <MealList meals={meals}/>}
        </div>
        
    )
}

export default Category