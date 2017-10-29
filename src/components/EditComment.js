import React, { Component } from 'react'
import serializeForm from 'form-serialize'

class EditComment extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const values = serializeForm(event.target, {hash:true});
    values.timestamp = Date.now();
    values.id = this.props.id;
    this.props.onEditComment(values);
  }

  render() {
    return (
      <div>
        <h4>Write a Comment</h4>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="newpost">
            <label htmlFor="comment">Comment</label>
            <input type="text" id="comment" name="body" value={this.props.comment}/>
          </fieldset>
          <input className="btn-default" type="submit" name="submit" value="Post Comment"/>
        </form>
      </div>
    )
  }
}

export default EditComment
