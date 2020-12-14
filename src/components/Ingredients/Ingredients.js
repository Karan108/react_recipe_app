import React from 'react'
import './Ingredients.css'
function Ingredients({ ingredients }) {
    return (
        <div className='ingredients__wrapper'>
            {
                ingredients.map((ing, index) => <Ingredient key={index} ingredient={ing} />)
            }
        </div>
    )
}

function Ingredient({ ingredient }) {
    return (<div className='ingredient__item'>
        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt='ingredient' />
        <span style={{ color: '#4E4D4D' }}>{ingredient.name}</span>
    </div>)
}
export default Ingredients
