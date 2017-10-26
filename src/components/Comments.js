import React, { Component } from 'react'
import serializeForm from 'form-serialize'
//import PropTypes from 'prop-types'

class Comments extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const values = serializeForm(event.target, {hash:true});
    values.timestamp = Date.now();
    values.id = this.generateCommentId();
    values.parentId = this.props.parentId;
    this.props.onCreateComment(values);
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
        <form onSubmit={this.handleSubmit}>
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

export default Comments