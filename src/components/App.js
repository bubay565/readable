import React, { Component } from 'react';
import '../App.css';
import * as ReadableAPI from '../utils/api'
import { connect } from 'react-redux'
import { categories, readPosts } from '../actions'

class App extends Component {
  componentDidMount() {
        this.props.getPosts;
          this.props.getCategories;

  }

  render() {
    return (
      <div className="container">
      {console.log('props', this.props)}
      </div>
    );
  }
}

function getAllPosts(){
  return ReadableAPI.getAllPosts();
}

function getCategories(){
  return ReadableAPI.getCategories();
}

function  mapStateToProps({ categories, posts}) {
  return {
    categories,
    posts
  }
}

function mapDispatchToProps(dispatch){
  return {
    getPosts: () => dispatch(getAllPosts()),
    getCategories: () => dispatch(getCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
