import React from 'react'
import './Ingredients.css'
function Ingredients({ ingredients }) {
    return (
        <div className='Ingredients__wrapper'>
            {
                ingredients.map(ing => <Ingredient ingredient={ing} />)
            }
        </div>
    )
}

function Ingredient({ ingredient }) {
    return (<div className='ingredient__item'>
        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt='ingredient' />
        <span>{ingredient.name}</span>
    </div>)
}
export default Ingredients
