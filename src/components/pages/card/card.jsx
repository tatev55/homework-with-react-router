import React from 'react';
import "./card.css"

const Card = ({ recipe , onClick}) => {
    return (
        <div className="card-container" onClick={onClick}>
            <img src={recipe.image} alt={recipe.name} className = "imageRecipe" /> 
            <h2 title='title' >{recipe.name}</h2>
            <p className='description'>{recipe.description}</p>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p><strong>{recipe.cuisine} {recipe.difficulty} </strong></p>
           
        </div>
    );
};
export default Card;



 