import React, { Component } from 'react'
import Loading from 'react-loading'
import Modal from 'react-modal'
import EditPost from './EditPost'
import DeletePost from './DeletePost'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { votePost, setPostToEdit, editPost, cancelEditPost, confirmDeletePost, cancelDeletePost, deletePost } from '../actions'

class Posts extends Component {

  votePost = (id, option) => {
    this.props.dispatch(votePost(id, option))
  }

  setPostToEdit = (id) => {
    this.props.dispatch(setPostToEdit(id))
  }

  editPost = (values) => {
    this.props.dispatch(editPost(values))
  }

  cancelEditPost = () => {
    this.props.dispatch(cancelEditPost())
  }

  setPostToDelete = (id) => {
    this.props.dispatch(confirmDeletePost(id))
  }

  deletePost = (id) => {
    this.props.dispatch(deletePost(id))
  }

  cancelDelete = () => {
    this.props.dispatch(cancelDeletePost())
  }

  render(){
    const posts = this.props.posts
    const sortPostsBy = this.props.sortPostsBy
    let sortParam = this.props.sortParam
    console.log('posts props', this.props)
    let post, postArray

    if(this.props.editPost || this.props.confirmDeleteModalOpen){
      postArray = posts.filter(post => post.id === this.props.postToEditId)
      post = postArray[0]
    }

    if(this.props.editPost === true) {
      console.log('edit post', posts.filter(post => post.id === this.props.postToEditId))

      return (
          <EditPost
            post={post}
            onEditPost={values => {
              this.editPost(values)}}
            onCancelEditPost={this.cancelEditPost}
          />
      )
    }

    return (
      <div className="posts">

      <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={this.props.confirmDeleteModalOpen}
          onRequestClose={this.cancelDelete}
          contentLabel='Modal'
      >
          {this.props.confirmDeleteModalOpen &&
            <DeletePost
              postId={post.id}
              category={post.category}
              title={post.title}
              onConfirmDelete={(id) => {this.deletePost(id)}}
              onCancelDelete={() => this.cancelDelete()}
              />
          }
      </Modal>

        <h2>Posts</h2>
        <div className="post-headers">
          <Link to="/new-post" className='new-post'>
              New Post
          </Link>
          <select onChange={(event) => {sortPostsBy(event.target.value)}}>
            <option value="timestamp">Most Recent</option>
            <option value="voteScore">Highest Votes</option>
          </select>
          <ul>
            <li><strong>Title</strong></li>
            <li><strong>Author</strong></li>
            <li><strong>Vote Score</strong></li>
            <li><strong>Comments</strong></li>
          </ul>
        </div>
        <div className="posts-list">
          <ul>
            {posts.isLoading === true
              ? <Loading delay={200} type='spin' color='#222' className='loading' />
              : posts.filter(post => !post.deleted)
              .sort((post1, post2) =>
                 post2[sortParam] - post1[sortParam]
              )
              .map((post) =>
                <li key={post.id}>
                  <div>
                    <ul>
                      <li className="posts-summary"><Link to={`/${post.category}/${post.id}/${post.title}`}>{post.title}</Link></li>
                      <li className="posts-summary">{post.author}</li>
                      <li className="posts-summary">{post.voteScore}</li>
                      <li className="posts-summary">{post.comments.length}</li>
                      <li className="posts-summary">
                        <button onClick={() => this.votePost(post.id, 'upVote')}>Vote Up</button>
                        <button onClick={() => this.votePost(post.id, 'downVote')}>Vote Down</button>
                        <button onClick={() => this.setPostToEdit(post.id)}>Edit Post</button>
                        <button onClick={() => this.setPostToDelete(post.id)}>Delete Post</button>
                      </li>
                    </ul>
                  </div>
                </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    editPost: state.posts.editPost,
    postToEditId: state.posts.postToEditId,
    confirmDeleteModalOpen: state.posts.confirmDeleteModalOpen
  }
}

export default connect(mapStateToProps)(Posts);
