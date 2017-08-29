import React from 'react'

export default function Categories({ categories}) {
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href={category.path}>{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
