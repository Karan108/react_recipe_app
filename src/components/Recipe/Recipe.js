import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./Recipe.css";
import { Link } from 'react-router-dom';

export default function Recipe({ image, title, id, time, serving, likes, recipePageFunction }) {

    return (
        <Card className='recipe'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <div className="recipe__details">
                        <div className="recipe__details__time">
                            <AccessTimeIcon />
                            <p>{time}mins</p>
                        </div>
                        <div className="recipe__details__serving">
                            <PeopleAltIcon />
                            <p>{serving}</p>
                        </div>
                        <div className="recipe__details__likes">
                            <FavoriteIcon />
                            <p>{likes}</p>
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions className='recipe__buttonDiv'>
                <Link to={{
                    pathname: `/recipe/${id}`
                }}>
                    <Button size="small" color="primary" onClick={() => recipePageFunction()} className='recipe__buttonDiv__viewRecipe'>
                        View Recipe
        </Button>
                </Link>
            </CardActions>
        </Card>
    );
}
