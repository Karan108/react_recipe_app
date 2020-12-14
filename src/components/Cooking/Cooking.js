import { Container } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Ingredients from '../Ingredients/Ingredients';
import "./Cooking.css";
function Cooking() {
    const [data, setData] = useState({})
    const API_KEY = "62d5f4eaadff4cb6929f54e769c7e3f2"
    let { recipeID } = useParams();
    console.log(recipeID);
    useEffect(() => {
        Axios.get(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${API_KEY}`).then(res => {
            const recipes = res.data
            setData(recipes);
        })
    }, [recipeID])

    return (
        <Container maxWidth="md" className="cooking_container">
            <div className="image">
                {/* recipe title */}
                <h2>{data.title}</h2>
                <div className="details">
                    {/* recipe image */}
                    <img src={data.image} alt="banner" className='banner_image' />
                    {/* recipe summary */}
                    <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
                </div>
            </div>
            {/* Ingredients */}
            <div className="ingTitle">
                <h2>Ingredients</h2>
            </div>
            <Ingredients ingredients={data.extendedIngredients || []} />
            {/* Instructions */}
            <div className="ingTitle">
                <h2>Instructions</h2>
            </div>
            <p style={{ marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: data.instructions }}></p>
        </Container>
    )
}

export default Cooking
