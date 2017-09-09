import React from 'react'
//import PropTypes from 'prop-types'

export default function Categories({ categories }) {
  console.log('comp', categories)
  console.log('comp.comp', categories.categories)
  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul>

      </ul>
    </div>
  )
}
