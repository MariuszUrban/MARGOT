
import {connect} from 'react-redux'; 
import  Form from './Form';
import {hideForm} from '../../../redux/questionActions'

const mapStateToProps = (state) => {
    console.log('form state', state.showHideForm.isShown)
    return{
        formState: state.showHideForm.isShown,
    }
}

const mapDispatchToProps = (dispatch) => ({
    hideForm: () => dispatch(hideForm())
})

export default connect(mapStateToProps,mapDispatchToProps)(Form)