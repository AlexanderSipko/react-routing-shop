import { useParams } from "react-router-dom"
import {getMealByID} from '../api'
import { useState, useEffect } from "react"
import Preloader from "../components/Preloads"
import MealRecipeDescriptions from '../components/MealRecipeDescriptions'
import { useNavigate } from "react-router-dom"


function MealRecipe() {

    const [recipe, setRecipe] = useState([])
    const {idMeal} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getMealByID(idMeal).then(data => setRecipe(data.meals))
    }, [idMeal])

    return (
        <div className="container">
        <button className="btn blue goBack" onClick={() => navigate(-1)}>go back</button>
        {recipe.length? <MealRecipeDescriptions {...recipe[0]}/>: <Preloader/>}
        </div>
    )
}

export default MealRecipe