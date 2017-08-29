import React, { Component } from 'react';
import '../App.css';
import * as ReadableAPI from '../utils/api'

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
        ReadableAPI.getPosts().then((posts) => {
            this.setState({posts})
        })
  }

  render() {
    return (
      <div className="container">
        {console.log('posts', this.state.posts)}
      </div>
    );
  }
}

export default App;
