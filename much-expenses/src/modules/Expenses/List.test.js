import React from 'react'
import TestRenderer from 'react-test-renderer'
import { render, waitForElement, cleanup } from '@testing-library/react'

import Expenses from './List'



describe("Expenses list", () => {

  beforeEach(() => {
    const mockSuccessResponse = { data: { expenses: [] } }
    const mockJsonPromise = Promise.resolve(mockSuccessResponse)
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    })
    
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)
  })
  
  afterEach(cleanup)

  it('tries to fetch expenses', () => {   
    TestRenderer.create(<Expenses />).toJSON()
  
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3030/expenses')
  })


  it('renders a spinner while fetching', () => {
  
    const { getByTestId } = render(<Expenses />)

    waitForElement(() => getByTestId('display-list'))
      .then(spinner => expect(spinner).toBeDefined())
  })

  it('renders the list after fetching', () => {

    const { getByTestId } = render(<Expenses />)

    waitForElement(() => getByTestId('display-list'))
      .then(list => expect(list).toBeDefined())
  })
})