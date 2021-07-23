import React from 'react'
import Recipe from './Recipe'

/*Pass props.recipes from App.js to here */
export default function RecipeList( { recipes }) { /*This destructures props.receipes into just recipes */
  return (
    <div>
      {recipes.map(recipe => {
        return (
          /**<Recipe id={recipe.id} cookTime={recipe.cookTime} serving={recipe.serving} /> */
          <Recipe key={recipe.id} {...recipe} />
        )
      })}
    </div>
  )
}
