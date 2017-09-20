import React, { Component } from 'react'


class PostDetail extends Component {

  render(){
    console.log('props', this.props)
    console.log('match', this.props.match);
    return (
      <div className="posts">
        <h2>Post Detail</h2>
        <div>
          <p>Title: {this.props.match.params.title}</p>
          <p>{this.props.match.params.title}</p>
        </div>
      </div>
    )
  }

}


export default PostDetail
