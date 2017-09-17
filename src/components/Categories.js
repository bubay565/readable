import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Categories({ categories }) {
  console.log('comp', categories)
  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul>
        {categories.isLoading === true
          ? <li>Loading...</li>
          : categories.map((category, index) =>
            <li key={index}>
              <NavLink to={`${category.path}/posts`}>{category.name}</NavLink>
            </li>
          )
        }
      </ul>
    </div>
  )
}
