import React, { Component } from 'react';
import '../App.css';
import * as ReadableAPI from '../utils/api'
import { connect } from 'react-redux'
import { displayCategories, displayPosts } from '../actions'

class App extends Component {
  componentDidMount() {
    getCategories()
    .then(
      data => this.props.displayCategories(data)
    )
    .then(
      getAllPosts()
    )
    .then(
      data => this.props.displayPosts(data)
    )
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
    displayPosts: (data) => dispatch(displayPosts(data)),
    displayCategories: (data) => dispatch(displayCategories(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
