import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { getCategories, getPosts, sortPostsBy, createPost } from '../actions'
import Banner from './Banner'
import Categories from './Categories'
import Category from './Category'
import Posts from './Posts'
import NewPost from './NewPost'
import '../index.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories())
    this.props.dispatch(getPosts())
  }

  sortPostsBy = (param) => {
    this.props.dispatch(sortPostsBy(param))
  }

  createPost = (values) => {
    this.props.dispatch(createPost(values))
  }

  render() {
    const { categories, posts } = this.props
    return (
      <div className="container">
        {console.log('properties', this.props)}
        <Banner />

        <div className="main">
          <Categories categories={categories}/>
          <Route exact path="/" render={() => (
            <Posts
              posts={posts}
              sortPostsBy={this.sortPostsBy}
            />
          )}/>

          <Route exact path="/:category/posts" component={Category}/>
          <Route exact path="/new-post" render={({ history }) => (
            <NewPost onCreatePost={values =>{
              this.createPost(values)
              history.push('/')
            }}/>
          )}/>
        </div>
      </div>
    );
  }
}

function  mapStateToProps({ categories, posts }) {
  return {
    categories: categories.categories,
    posts: posts
  }
}

export default withRouter(connect(
  mapStateToProps
)(App));
