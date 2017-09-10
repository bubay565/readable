import React from 'react'
//import PropTypes from 'prop-types'

export default function Categories({ categories }) {
  console.log('comp', categories)
  console.log('comp.comp', categories.categories)
  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul>
        {categories.isLoading === true
          ? <li>Loading...</li>
          : categories.categories.map((category, index) =>
            <li key={index}>
              <a href={category.path}>{category.name}</a>
            </li>
          )
        }
      </ul>
    </div>
  )
}
