import React, { useState } from 'react'

function RecipeForm({ onSubmit, initialData = {} }) {
    const [title, setTitle] = useState(initialData.title || "")
    const [cuisine, setCuisine] = useState(initialData.cuisine || "")
    const [difficulty, setDifficulty] = useState(initialData.difficulty || "")
    const [ingredients, setIngredients] = useState(initialData.ingredients?.join(", ") || "")
    const [steps, setSteps] = useState(initialData.steps || "")

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({
            title,
            cuisine,
            difficulty,
            ingredients: ingredients.split(",").map(item => item.trim()),
            steps
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Recipe Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                required
            />
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required>
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
            <textarea
                placeholder="Ingredients (comma-separated)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
            />
            <textarea
                placeholder="Steps"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                required
            />
            <button type="submit">Save Recipe</button>
        </form>
    )
}

export default RecipeForm
