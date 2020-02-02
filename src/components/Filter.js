import React from 'react'

const Filter = ({value, setNewFilter}) => {
    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }

    return (
        <div>
            filter shown with <input value={value} onChange={handleFilterChange} />
        </div>
    )
}

export default Filter