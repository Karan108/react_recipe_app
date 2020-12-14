import axios from 'axios';
import { FETCH_RECIPES_FAILURE, FETCH_RECIPES_REQUEST, FETCH_RECIPES_SUCCESS } from "./recipeTypes"

export const fetchrecipesRequest = () => {
    return {
        type: FETCH_RECIPES_REQUEST
    }
}
export const fetchrecipesSuccess = (recipes) => {
    return {
        type: FETCH_RECIPES_SUCCESS,
        payload: recipes
    }
}
export const fetchrecipesFailure = (error) => {
    return {
        type: FETCH_RECIPES_FAILURE,
        payload: error
    }
}

export const fetchRecipes = (q) => {
    return (dispatch) => {
        dispatch(fetchrecipesRequest)
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${q}&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&number=10`).then(res => {
            const recipes = res.data
            dispatch(fetchrecipesSuccess(recipes.results))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchrecipesFailure(errorMsg))
        })
    }
}
