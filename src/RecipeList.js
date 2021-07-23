import React from 'react'
import Recipe from './Recipe'

/*Pass props.recipes from App.js to here */
export default function RecipeList( { recipes }) { /*This destructures props.receipes into just recipes? */
  return (
    <div>
      {recipes.map(recipe => {
        return (
          /* Spread operator does this: <Recipe key={recipe.id} name={recipe.name} cookTime={recipe.cookTime} serving={recipe.serving} instructions={recipe.instructions}/>/> */
          <Recipe key={recipe.id} {...recipe} />
        )
      })}
    </div>
  )
}
