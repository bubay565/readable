import React, { Component } from 'react'
import serializeForm from 'form-serialize'

class EditComment extends Component {
  state = {
    comment: '',
    id: ''
  }

  componentDidMount() {
    this.setState(() => ({
      comment: this.props.comment[0].body,
      id: this.props.comment[0].id
    }))
  }

  componentWillUnmount() {
    this.cancelEditComment()
  }

  cancelEditComment = () => {
    this.props.onCancelEditComment()
  }

  updateComment = (comment) => {
    this.setState({comment})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const values = serializeForm(event.target, {hash:true});
    values.timestamp = Date.now();
    values.id = this.state.id;
    this.props.onEditComment(values);
  }

  render() {
    return (
      <div>
        <h4>Edit Comment</h4>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="newpost">
            <label htmlFor="comment">Comment</label>
            <input type="text" id="comment" name="body" value={this.state.comment} onChange={(event) => this.updateComment(event.target.value)}/>
          </fieldset>
          <input className="btn-default" type="submit" name="submit" value="Submit"/>
          <input className="btn-default" type="button" name="cancel" value="Cancel" onClick={this.cancelEditComment}/>
        </form>
      </div>
    )
  }
}

export default EditComment
