import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux'
import { getCategories, getPosts } from '../actions'
import Banner from './Banner'
import Categories from './Categories'
import Posts from './Posts'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories())
    this.props.dispatch(getPosts())
  }

  sortPostsBy = (value) => {
    this.props.posts.sort((post1, post2) => post1[value] > post2[value])
  }

  render() {
    const { categories, posts, comments } = this.props
    return (
      <div className="container">
        {console.log('properties', this.props)}
        <Banner />
        <div className="main">
          <Categories categories={categories}/>
          <Posts posts={posts} />
        </div>
      </div>
    );
  }
}

function  mapStateToProps({ categories, posts}) {
  return {
    categories: categories.categories,
    posts: posts.posts
  }
}

export default connect(
  mapStateToProps
)(App);
