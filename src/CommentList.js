import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './decorators/toggleOpen'

function CommentList(props) {
    const { comments, isOpen, toggleOpen } = props
  
    if (!comments || !comments.length) return <p>No comments yet</p>

    const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
    const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
    const body = isOpen && <ul>{commentItems}</ul>

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{text}</a>
            {body}
        </div>
    )
}

CommentList.propTypes = {
  comments  : PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string
  })
  ),
  isOpen    : PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
}


export default toggleOpen(CommentList)