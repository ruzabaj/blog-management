import React from 'react'
import "../../../sass/blog.scss";

const Comment = () => {
  return (
    <div className='comment-section'>
        <div className='comment-header'>
            <h3>leave a comment</h3>
            <p className='conversation'>Join the conversation</p>
        </div>
        <div>
            <input type="text"/>
            <button type='submit'>SUBMIT</button>
        </div>
    </div>
  )
}

export default Comment