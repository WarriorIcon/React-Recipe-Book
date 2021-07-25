import React from 'react'
import Recipe from './Recipe'

/*Pass props.recipes from App.js to here */
export default function RecipeList({ recipes }) { /*This destructures props.receipes into just recipes? */
  return (
    <div className="recipe-list">   
      <div>
        {recipes.map(recipe => {
          return (
            /* Spread operator saves time with some JSX magic by auto setting our objects' keys as prop names and assigning them the corresponding values. Long-form for the line below would be this: <Recipe key={recipe.id} name={recipe.name} cookTime={recipe.cookTime} serving={recipe.serving} instructions={recipe.instructions}/>/> */
            <Recipe key={recipe.id} {...recipe} />
          )
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary">Add Recipe</button>
      </div>
    </div>
  )
}
