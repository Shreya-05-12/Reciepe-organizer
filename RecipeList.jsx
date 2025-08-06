import React from 'react'

function RecipeList({ recipes }) {
    return (
        <div>
            {recipes.map(r => (
                <div key={r.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                    <h3>{r.title}</h3>
                    <p><b>Cuisine:</b> {r.cuisine}</p>
                    <p><b>Difficulty:</b> {r.difficulty}</p>
                    <p><b>Ingredients:</b> {r.ingredients.join(', ')}</p>
                    <p><b>Steps:</b> {r.steps}</p>
                </div>
            ))}
        </div>
    )
}

export default RecipeList
