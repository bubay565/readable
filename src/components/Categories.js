import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Categories = ({ categories }) => {
  console.log('comp', categories)
  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul>
        <li><Link to="/">All</Link></li>
        {categories.isLoading === true
          ? <li>Loading...</li>
          : categories.map((category, index) =>
            <li key={index}>
              <Link to={`/${category.path}/posts`}>{category.name}</Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Categories
