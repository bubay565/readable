import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

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
              <a href={category.path}>{category.name}</a>
            </li>
          )
        }
      </ul>
    </div>
  )
}
