import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { getCategories, getPosts } from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories())
    this.props.dispatch(getPosts())
  }

  render() {
    return (
      <div className="container">
      {console.log('properties', this.props)}
      </div>
    );
  }
}

function  mapStateToProps({ categories, posts}) {
  return {
    categories,
    posts
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
