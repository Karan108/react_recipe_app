import React, { useEffect } from 'react'
import "./Home.css";
import { fetchRecipes } from '../../redux/recipe/recipeActions';
import { useDispatch, useSelector } from 'react-redux';
import Recipe from '../Recipe/Recipe';

function Home({ search, handleRecipesPage }) {
    const recipes = useSelector(state => state.recipes)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecipes(search));
    }, [search, dispatch])

    const recipePageFunction = () => {
        handleRecipesPage()
    }
    return (
        <div className="recipe_container">
            {recipes.loading ? (
                <h2>Loading...</h2>
            ) : recipes.error ? (
                <h2>{recipes.error}</h2>
            ) : recipes.map(recipe => (<Recipe key={recipe.id} id={recipe.id} image={recipe.image} title={recipe.title} time={recipe.readyInMinutes} serving={recipe.servings} recipePageFunction={recipePageFunction} />))}
        </div>
    )
}

export default Home
