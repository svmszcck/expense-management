

import React from 'react'
import {
  renderComponent,
  branch
} from 'recompose'


const Loading = () => <div>Loading....</div>

export default branch(
  ({ loading }) => loading,
  renderComponent(Loading)
)
