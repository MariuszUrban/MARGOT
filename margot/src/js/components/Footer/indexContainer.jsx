import {connect} from 'react-redux'; 
import index from './index';

const mapStateToProps = (state) => {
    console.log('index state', state.showHideForm.isShown)
    return{
        indexState: state.showHideForm.isShown,
    }
}

export default connect(mapStateToProps,null)(index)