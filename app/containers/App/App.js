/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { connect } from 'react-redux'
import App from '../../components/App'
import axios from 'axios'

const mapStateToProps = (state, ownProps) => {
  return state
}
const mapDispatchToProps = (dispatch) => ({
  
})
export default connect(mapStateToProps,mapDispatchToProps)(App)