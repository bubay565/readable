import React from 'react'

export default function Categories() {
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}
