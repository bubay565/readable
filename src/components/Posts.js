import React, { Component } from 'react'
import Loading from 'react-loading'
import Modal from 'react-modal'
import EditPost from './EditPost'
import DeletePost from './DeletePost'
import PostActions from './PostActions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Posts extends Component {

  render(){
    const posts = this.props.posts
    const sortPostsBy = this.props.sortPostsBy
    let sortParam = this.props.sortParam
    let post, postArray

    if(this.props.editPost || this.props.confirmDeleteModalOpen){
      postArray = posts.filter(post => post.id === this.props.postToEditId)
      post = postArray[0]
    }

    if(this.props.editPost === true) {
      return <EditPost post={post} />
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
            <DeletePost post={post} />
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
                      <PostActions postId={post.id}/>
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
