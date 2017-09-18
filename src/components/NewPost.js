import React, { Component } from 'react'
import serializeForm from 'form-serialize'

class NewPost extends Component {

  handleSubmit = (event) => {
      event.preventDefault();
      const values = serializeForm(event.target, {hash:true});
      values.timestamp = Date.now();
      values.id = this.generatePostId();
      console.log('values', JSON.stringify(values))
      this.props.onCreatePost(values);
  }

  generatePostId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  render(){
    console.log('this', this)
    return (
      <div className="posts">
        <h2>Create a Post</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="newpost">
            <label>
              Category
              <select name="category">
                <option value="react" defaultValue>React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
              </select>
            </label>
            <label>
              Author
              <input type="text" name="author"/>
            </label>
            <label>
              Title
              <input type="text" name="title"/>
            </label>
            <label>
              Post Body
              <textarea name="body"></textarea>
            </label>
          </fieldset>
          <input className="btn-default" type="submit" name="submit" value="Create Post"/>
        </form>
      </div>
    )
  }
}

export default NewPost
