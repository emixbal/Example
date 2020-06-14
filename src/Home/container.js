import { connect } from 'react-redux'
import App from './component'
import {change_name, add_list, delete_list} from './actions'

const mapStateToProps = (state) => ({
    name: state.home.name,
    list: state.home.list,
})

const mapDispatchToProps = {
    change_name,
    add_list,
    delete_list,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)