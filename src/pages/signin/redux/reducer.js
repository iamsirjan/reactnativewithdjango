import actions from './actions';

const initialState = {
    loading: false,
    message: '',

}

const RegisterUser = (state = initialState , action) => {
    switch(action.type) {
        case actions.SEND_CREATEUSER_REQ:
            return {
                ...state,
                loading: true,
            }
        case actions.SEND_CREATEUSER_SUC:
            return {
                ...state,
                loading: false,
                message: action.payload,
            }
        case actions.SEND_CREATEUSER_FAIL:
            return {
                ...state,
                loading: false,
                message: action.payload,
            }
        default : 
        return {
            ...state
        }
    }
}

export default RegisterUser