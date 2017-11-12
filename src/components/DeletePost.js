import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { cancelDeletePost, deletePost } from '../actions'

class DeletePost extends Component {

  deletePost = (id) => {
    this.props.dispatch(deletePost(id))
  }

  cancelDelete = () => {
    this.props.dispatch(cancelDeletePost())
  }

  render() {
    return (
      <div>
        <p>Are you certain about deleting this post?</p>
        <div>
          <Link to="/" className='new-post' onClick={() => this.deletePost(this.props.post.id)}>
              Delete
          </Link>
        </div>
        <div>
          <Link to={`/${this.props.post.category}/${this.props.post.id}/${this.props.post.title}`} onClick={() => this.cancelDelete()}>Cancel</Link>
        </div>
      </div>
    )
  }
}

export default connect()(DeletePost);
