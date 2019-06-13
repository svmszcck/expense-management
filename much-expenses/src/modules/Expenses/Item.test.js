import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Item from './Item'
describe("Expense item", () => {

  afterEach(cleanup)

  it('renders item details', () => {
    const { getByText } = render(
      <Item
        id="test-id"
        amount={100}
        merchant="TestMerchant"
        receipts={[{ url: '/some/url' }]}
        user={{ first: 'Tom', last: 'Hanks' }}
        comment="I am a test comment"
      />)
    
    expect(getByText(/User:/)).toBeDefined()
    expect(getByText(/Amount:/)).toBeDefined()
    expect(getByText(/Merchant:/)).toBeDefined()
  })


  it('renders empty gallery', () => {

    const { getByText } = render(
      <Item
        id="test-id"
        amount={100}
        merchant="TestMerchant"
        receipts={[]}
        user={{ first: 'Tom', last: 'Hanks' }}
        comment="I am a test comment"
      />)

    expect(getByText(/No receipts uploaded/)).toBeDefined()
  })

})