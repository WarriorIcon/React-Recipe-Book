import React from 'react'
import Ingredient from './Ingredient'

// Note to self - this is how you can do your JS outside the JSX. A little different:
// Just store the function result in a variable and render it.
export default function IngredientList({ingredients}) {
  const ingredientElements = ingredients.map( ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient}/>
  })
  return (
    <div>
      {ingredientElements}
    </div>
  )
}
 /*
You could also just .map inside the JSX like with RecipeList which is less code
      {ingredients.map(ingredient => {
        return  (
          <Ingredient id={ingredient.id} {...ingredient} />
        )
      })}
*/ 
