import React, { Component } from 'react';
import '../App.css';
//import * as ReadableAPI from '../utils/api'
import { connect } from 'react-redux'
import { getCategories } from '../actions'

class App extends Component {
  componentDidMount() {
    getCategories()
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
  console.log('categories map', categories)
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
  mapStateToProps//,
  //mapDispatchToProps
)(App);
