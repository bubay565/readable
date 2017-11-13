import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../actions'
import serializeForm from 'form-serialize'

class Comments extends Component {

  createComment = (values) => {
    this.props.dispatch(createComment(values))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const values = serializeForm(event.target, {hash:true});
    values.timestamp = Date.now();
    values.id = this.generateCommentId();
    values.parentId = this.props.parentId;
    document.getElementById("commentForm").reset();
    this.createComment(values);
  }

  generateCommentId = () => (
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  )

  render(){
    return (
      <div>
        <h4>Write a Comment</h4>
        <form id="commentForm" onSubmit={this.handleSubmit}>
          <fieldset className="newpost">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="author"/>
            <label htmlFor="comment">Comment</label>
            <input type="text" id="comment" name="body"/>
          </fieldset>
          <input className="btn-default" type="submit" name="submit" value="Post Comment"/>
        </form>
      </div>
    )
  }
}

export default connect()(Comments);
