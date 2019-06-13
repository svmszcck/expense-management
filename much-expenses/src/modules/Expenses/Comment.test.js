import React from 'react'

import { render, fireEvent, cleanup } from '@testing-library/react'

import Comment from './Comment'
describe("Comment", () => {

  afterEach(cleanup)

  it('Prompts the user to add a comment', () => {
    const { getByText } = render(
      <Comment
        content=""
      />
    )
    
    expect(getByText(/No comment yet/)).toBeDefined()
  
  })


  it('renders a comment with the proper content', () => {

    const content = 'Test a comment text'
    const { getByText } = render(
      <Comment
        content={content}
      />
    )

    expect(getByText(content)).toBeDefined()
  })

  it('clicking on the comment allow for editing', () => {


    const { getByText } = render(<Comment content="" />)

    fireEvent.click(getByText(/No comment yet/))
    expect(getByText('Save')).toBeDefined()
  })

})