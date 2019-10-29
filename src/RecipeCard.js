import React from "react"
import style from './RecipeCard.module.css'

function RecipeCard({title, calories, image, ingredients}){
    return(
        <div className={style.recipes}>
            <img src={image} alt=""/>
            <h1>{title}</h1>
            <p>{calories}</p>
            <ol>{ingredients.map((ingredient)=>(
                <li>{ingredient.text}</li>
            ))}</ol>
        </div>
    )
}

export default RecipeCard