import React, { Component } from 'react';
import '../App.css';
import * as ReadableAPI from '../utils/api'
import { connect } from 'react-redux'

class App extends Component {
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

function  mapStateToProps() {

}

function mapDispatchToProps(){

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
