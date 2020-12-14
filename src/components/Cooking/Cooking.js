import { Container } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Ingredients from '../Ingredients/Ingredients';
import "./Cooking.css";
function Cooking() {
    const [data, setData] = useState({})
    let { recipeID } = useParams();
    useEffect(() => {
        Axios.get(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${process.env.REACT_APP_API_KEY}`).then(res => {
            const recipes = res.data
            setData(recipes);
        })
    }, [recipeID])
    return (
        <Container maxWidth="md" className="cooking__container">
            <div className="cooking__image">
                {/* recipe title */}
                <h2>{data.title}</h2>
                <div className="cooking__details">
                    {/* recipe image */}
                    <img src={data.image} alt="banner" className='cooking__banner_image' />
                    {/* recipe summary */}
                    <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
                </div>
            </div>
            {/* Ingredients */}
            <div className="cooking__ingTitle">
                <h2>Ingredients</h2>
            </div>
            <Ingredients ingredients={data.extendedIngredients || []} />
            {/* Instructions */}
            <div className="cooking__ingTitle">
                <h2>Instructions</h2>
            </div>
            <p style={{ marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: data.instructions }}></p>
        </Container>
    )
}

export default Cooking
