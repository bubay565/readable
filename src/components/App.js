import React, { Component } from 'react';
import '../App.css';
import * as ReadableAPI from '../utils/api'
import { connect } from 'react-redux'

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
        ReadableAPI.getAllPosts().then((posts) => {
            this.setState({posts})
        })
  }

  render() {
    return (
      <div className="container">
      {console.log('props', this.props)}
        {console.log('posts', this.state.posts)}
      </div>
    );
  }
}

export default connect()(App);
