import React from 'react'
import serializeForm from 'form-serialize'

const EditComment = ({ onEditComment, id, comment}) => {
  return(
    <div>
      <h4>Write a Comment</h4>
      <form onSubmit={handleSubmit(event, id, onEditComment)}>
        <fieldset className="newpost">
          <label htmlFor="comment">Comment</label>
          <input type="text" id="comment" name="body" value={comment}/>
        </fieldset>
        <input className="btn-default" type="submit" name="submit" value="Post Comment"/>
      </form>
    </div>
  )
}

const handleSubmit = (event, id, onEditComment) => {
  event.preventDefault();
  const values = serializeForm(event.target, {hash:true});
  values.timestamp = Date.now();
  values.id = id;
  onEditComment(values);
}

export default EditComment
