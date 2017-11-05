import React, { Component } from 'react'
import serializeForm from 'form-serialize'

class EditPost extends Component {
  state = {
    title: '',
    post: '',
    id: ''
  }

  componentDidMount() {
    console.log('editpost props', this.props)
    this.setState(() => ({
      title: this.props.post.title,
      post: this.props.post.body,
      id: this.props.post.id
    }))
  }

  updatePost = (post) => {
    this.setState({post})
  }

  updateTitle = (title) => {
    this.setState({title})
  }

  componentWillUnmount() {
    this.cancelEditPost()
  }

  cancelEditPost = () => {
    this.props.onCancelEditPost()
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const values = serializeForm(event.target, {hash:true});
    values.id = this.state.id;
    this.props.onEditPost(values);
  }

  render() {
    return (
      <div className="posts">
        <h4>Edit Post</h4>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="newpost">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={this.state.title} onChange={(event) => this.updateTitle(event.target.value)}/>
            <label htmlFor="post">Post</label>
            <textarea id="post" name="post" value={this.state.post} onChange={(event) => this.updatePost(event.target.value)}/>
          </fieldset>
          <input className="btn-default" type="submit" name="submit" value="Submit"/>
          <input className="btn-default" type="button" name="cancel" value="Cancel" onClick={this.cancelEditPost}/>
        </form>
      </div>
    )
  }
}

export default EditPost
