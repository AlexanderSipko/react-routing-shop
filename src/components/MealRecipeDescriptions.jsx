
function MealRecipeDescriptions(props) {

    const recipe = props
    return (
        <div className="MealRecipeDescriptions">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h1>{recipe.strMeal}</h1>
            <h6>Category: {recipe.strCategory}</h6>
            {recipe.strArea? (<h6>Area: {recipe.strArea}</h6>) : null}
            
            <p>Instruction: {recipe.strInstructions}</p>
            <p className="recipe-article">article: {recipe.idMeal}</p>

            <table className="centered">
            <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                </tr>
            </thead>

            <tbody>
                {
                    Object.keys(recipe).map(key => 
                        {if (key.includes('Ingredient') && recipe[key]) {
                            return (
                                <tr key={key}>
                                    <td>{recipe[key]}</td>
                                    <td>{recipe[key.replace('Ingredient', 'Measure')]}</td>
                                </tr>
                            )
                        } return null}
                    )
                }
            </tbody>
            </table>

            {recipe.strYoutube? (
                <div className="row">
                    <h5>Video Recipe</h5>
                    {}
                    <iframe title={recipe.strMeal} src={`https://www.youtube.com/embed/${recipe.strYoutube.split('=')[1]}`} allowFullScreen/>
                </div>
            ): null}
        </div>
    )
}

export default MealRecipeDescriptions