import {connect} from 'react-redux';
import Questions from './Questions';
import {showForm} from '../../../redux/questionActions';

const mapStateToProps = (state) => {
    console.log('haalooo', state.showHideForm.isShown)
    return {
        questionState: !state.showHideForm.isShown,
    }
}

const mapDispatchToProps = (dispatch) => ({
    showForm: () => dispatch(showForm())
})
export default connect(mapStateToProps, mapDispatchToProps)(Questions);

