import React, { useEffect, useState } from "react";
import Recipes from "../../../api/api";  
import Card from "../card/card";  
import {useNavigate} from "react-router"
import "./home.css";  

const Home = () => {
    const [recipes, setRecipes] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipes = async () => {
            const recipeData = await Recipes.getRecipes();  
            setRecipes(recipeData);  
        };

        fetchRecipes();  
    }, []);  

    const handleCard = (id)=> {
        navigate(`/recipe/${id}`)
        
    }

    return (
        <div className="home-container">
            <h1 className="title">Recipes List</h1>
            <div className="recipe-list">
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <Card 
                            key={recipe.id} 
                            recipe={recipe}
                            onClick={() => handleCard(recipe.id)} 
                        />  
                    ))
                ) : (
                    <p>Loading recipes...</p>  
                )}
            </div>
        </div>
    );
};

export default Home;

