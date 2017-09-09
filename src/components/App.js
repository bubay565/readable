import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux'
import { getCategories, getPosts, fetchComments } from '../actions'
import Banner from './Banner'
import Categories from './Categories'
import Posts from './Posts'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories())
    this.props.dispatch(getPosts())
    .then(
      this.props.posts.map(post => this.props.dispatch(fetchComments(post.id)))
    )

  }

  render() {
    const { categories, posts, comments } = this.props
    return (
      <div className="container">
      {console.log('properties', this.props)}
      <Banner />
      <Categories categories={categories}/>
      <Posts posts={posts} />
      </div>
    );
  }
}

function  mapStateToProps({ categories, posts, comments}) {
  return {
    categories,
    posts,
    comments
  }
}

/*function mapDispatchToProps(dispatch){
  return {
    //displayPosts: (data) => dispatch(displayPosts(data)),
    displayCategories: () => dispatch(displayCategories())
  }
}*/

export default connect(
  mapStateToProps
)(App);
