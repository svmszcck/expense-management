import {
  compose,
  lifecycle,
  withStateHandlers
} from 'recompose'

import withLoader from '../Loader'

const server = 'http://localhost:3030'


export default path => compose(
  withStateHandlers({ loading: true }, {
    onData: state => data => ({ data, loading: false })
  }),
  lifecycle({
    componentDidMount() {
      fetch(`${server}${path}`)
        .then(response => response.json())
        .then(this.props.onData)
    }
  }),
  withLoader
)
