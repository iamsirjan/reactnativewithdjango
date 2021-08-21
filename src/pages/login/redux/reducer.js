import actions from './actions';

const initialState = {
  loading: false,
  fetchingCurrentUser: false,
  message: '',
  currentUser: null,
  statusCode: null,
  isLoggedIn: false,
  userType: 'agent',
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_TOKEN_REQ:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_TOKEN_SUC:
      return {
        ...state,
        loading: false,
        statusCode: action.statusCode,
      };
    case actions.GET_TOKEN_FAIL:
      return {
        ...state,
        loading: false,
        statusCode: action.statusCode,
        message: action.message,
      };
    case actions.GET_ACCESS_REQ:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_ACCESS_SUC:
      return {
        ...state,
        loading: false,
        statusCode: action.statusCode,
        message: action.message,
        isLoggedIn: true,
      };
    case actions.GET_ACCESS_FAIL:
      return {
        ...state,
        loading: false,
        statusCode: action.statusCode,
        message: action.message,
        isLoggedIn: false,
      };
    case actions.GET_CURRENT_USER_REQ:
      return {
        ...state,
        fetchingCurrentUser: true,
      };
    case actions.GET_CURRENT_USER_SUC:
      return {
        ...state,
        fetchingCurrentUser: false,
        currentUser: action.currentUser,
        isLoggedIn: true,
      };
    case actions.GET_CURRENT_USER_FAIL:
      return {
        ...state,
        fetchingCurrentUser: false,
        message: action.message,
        isLoggedIn: false,
      };

    /* Logout */
    case actions.LOGOUT_REQ:
      return {
        ...state,
        loading: true,
      };
    case actions.LOGOUT_SUC:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        currentUser: null,
      };
    case actions.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        message: action.message,
        status: action.status,
      };
     
    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;