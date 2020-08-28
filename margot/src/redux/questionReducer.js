import {SHOW_FORM, HIDE_FORM} from './questionActions';


const initialState ={ 
    isShown: false,
}

function questionReducer(state=initialState, {type}){
    if(type === SHOW_FORM ){
        return {
            ...state, 
            isShown: !state.isShown,
        }
    };
    if(type === HIDE_FORM ){
        return {
            ...state, 
            isShown: false,
        }
    };
    return state;
}

export default questionReducer;
