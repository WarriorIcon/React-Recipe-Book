import React from 'react'
import IngredientList from './IngredientList'

/*Here we could instead pass down the entire recipe object as a prop like recipe={recipe} in RecipeList.js. Then in this Recipe component, destruct the props to {recipe} and access them as {recipe.name} {recipe.cookTime}, etc, without this props deconstruct*/
export default function Recipe(props) {
  const {
    name,
    cookTime,
    servings,
    instructions,
    ingredients
  } = props
  
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>      
      <div>
        <span>Ingredients:</span>
        <div>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>      
    </div>
  )
}
