export const SHOW_FORM ='SHOW_FORM';
export const HIDE_FORM = 'HIDE_FORM';

export const showForm = () => {
    return{
        type: SHOW_FORM,
    }
}

export const hideForm = () => {
    return{
        type: HIDE_FORM,
    }
}