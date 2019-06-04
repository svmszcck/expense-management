import React from 'react';
import {
  compose,
  withStateHandlers
} from 'recompose'

const Comment = ({
  content,
  text,
  editing,
  toggleEditing,
  onEditing,
  cancelEditing,
  onFinishedEditing
}) =>
    !editing
      ? <span onClick={toggleEditing}>Comment: {content}</span>
      : <div>
        <input value={text} onChange={onEditing} ></input>
        <button onClick={cancelEditing}>Cancel</button>
      <button onClick={onFinishedEditing}>Save</button>
      </div>



// setting the initial state based on the incoming props
const initialState = ({ content }) => ({ text: content, editing: false })

const handlers = {
  toggleEditing: ({ editing }) => evt => ({ editing: !editing }),
  onEditing: ({ text }) => evt => ({ text: evt.target.value }),
  cancelEditing: ({ editing }, { content }) => evt => ({ text: content, editing: false }),
  onFinishedEditing: ({ text }, { onSave }) => evt => {
    onSave(text)
    return ({ editing: false })
  }
}

export default compose(
  withStateHandlers(initialState, handlers)
)(Comment)
