
import React from 'react'

import {
  compose,
  withHandlers,
  withStateHandlers
} from 'recompose'

import styled from 'styled-components'

const StyledInput = styled.input`
  display: none;
`

const StyledTextWrapper = styled.span`
  margin-right: .5em;
  font-size: 13px;
`

const Uploader = ({
  setRef,
  getRef,
  onSubmit,
  setFile,
  file
}) => 
  <div>  
    <StyledInput type="file" ref={setRef} onChange={setFile} />
    {
      file 
        ? <div>
            <StyledTextWrapper>{file.name}</StyledTextWrapper>
            <button onClick={evt => onSubmit('UPLOAD', { file })}>Upload</button>
          </div>
        : <div>
          <StyledTextWrapper>No file selected</StyledTextWrapper>
          <button onClick={evt => getRef().click()}>Select File</button>
        </div>
    }   
  </div>




export default compose(
  withStateHandlers({ }, {
    setFile: () => evt => ({ file: evt.target.files[0] })
  }),
  withHandlers(() => {
    let inputReference = null;

    return {
      setRef: () => ref => (inputReference = ref),
      getRef: () => () => inputReference
    }
  })
)(Uploader)
