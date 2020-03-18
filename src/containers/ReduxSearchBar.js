import { connect } from 'react-redux'
import { addSearchParams } from '../actions/actions'
import SearchBar from '../components/SearchBar'

const mapDispatchToProps = dispatch => ({
    addSearchParams: search => addSearchParams(search)
})

export default connect(
    mapDispatchToProps
)(SearchBar)