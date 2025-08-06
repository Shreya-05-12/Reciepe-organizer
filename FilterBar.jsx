import React from 'react'

function FilterBar({ setFilter }) {
    const handleChange = (e) => {
        const { name, value } = e.target
        setFilter(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div>
            <select name="cuisine" onChange={handleChange}>
                <option value="">All Cuisines</option>
                <option value="Indian">Indian</option>
                <option value="Italian">Italian</option>
            </select>
            <select name="difficulty" onChange={handleChange}>
                <option value="">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
            </select>
        </div>
    )
}

export default FilterBar
