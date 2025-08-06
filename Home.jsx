import React, { useState } from 'react'
import { recipes as recipeData } from '../data'
import RecipeList from '../components/RecipeList'
import FilterBar from '../components/FilterBar'
import RecipeForm from '../components/RecipeForm'

function Home() {
    const [recipes, setRecipes] = useState(recipeData)
    const [filter, setFilter] = useState({ cuisine: "", difficulty: "" })
    const [showForm, setShowForm] = useState(false)

    const filteredRecipes = recipes.filter(r =>
        (filter.cuisine === "" || r.cuisine === filter.cuisine) &&
        (filter.difficulty === "" || r.difficulty === filter.difficulty)
    )

    const handleAddRecipe = (newRecipe) => {
        const id = Date.now() // simple unique id
        setRecipes(prev => [...prev, { id, ...newRecipe }])
        setShowForm(false)
    }

    return (
        <div>
            <h2>Recipe Organizer</h2>

            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? "Cancel" : "Add Recipe"}
            </button>

            {showForm && <RecipeForm onSubmit={handleAddRecipe} />}

            <FilterBar setFilter={setFilter} />
            <RecipeList recipes={filteredRecipes} />
        </div>
    )
}

export default Home
