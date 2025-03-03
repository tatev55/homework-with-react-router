import React, { useEffect, useState } from 'react';
import Recipes from "../../../api/api";
import { useParams } from 'react-router';
import "./recipe-details.css";

const ProductDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams(); 
  
   

useEffect(() => {
    const fetchRecipeDetails = async () => {
        if(id){
            const recipeData = await Recipes.getRecipeById(id);
            
            if(recipeData){
                setRecipe(recipeData);
            }else{
              throw new Error("Recipe not found");
            }
        }else{
            throw new Error("invalid key")
            
        }
    }

    fetchRecipeDetails()
   
}, [id])

  if (!recipe) {
    return <p>Loading recipe details...</p>;
  }

return (
    <div className="recipe-details">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <ul>
        <h3>ingredients:</h3>
        {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <ol>
        <h3>Instructions:</h3>
        {recipe.instructions && recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
    </div>
  );
};



export default ProductDetails;





