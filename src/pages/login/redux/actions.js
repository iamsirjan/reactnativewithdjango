const entities = '[auth]';

const actions = {
  GET_TOKEN_REQ: `${entities} GET_TOKEN`,
  GET_TOKEN_SUC: `${entities} GET_TOKEN_SUC`,
  GET_TOKEN_FAIL: `${entities} GET_TOKEN_FAIL`,

  GET_ACCESS_REQ: `${entities} GET_ACCESS_REQ`,
  GET_ACCESS_SUC: `${entities} GET_ACCESS_SUC`,
  GET_ACCESS_FAIL: `${entities} GET_ACCESS_FAIL`,

  GET_CURRENT_USER_REQ: `${entities} GET_CURRENT_USER_REQ`,
  GET_CURRENT_USER_SUC: `${entities} GET_CURRENT_USER_SUC`,
  GET_CURRENT_USER_FAIL: `${entities} GET_CURRENT_USER_FAIL`,

  GET_OTP_REQ: `${entities} GET_OTP_REQ`,
  GET_OTP_SUC: `${entities} GET_OTP_SUC`,
  GET_OTP_FAIL: `${entities} GET_OTP_FAIL`,

  LOGOUT_REQ: `${entities} LOGOUT_REQ`,
  LOGOUT_SUC: `${entities} LOGOUT_SUC`,
  LOGOUT_FAIL: `${entities} LOGOUT_FAIL`,

  getOTP: (payload) => ({
    type: actions.GET_OTP_REQ,
    payload
  }),

  login: (payload) => ({
    type: actions.GET_TOKEN_REQ,
    payload,
  }),
  getCurrentUser: (payload) => ({
    type: actions.GET_CURRENT_USER_REQ,
    payload,
  }),
  logout: () => ({
    type: actions.LOGOUT_REQ,
  }),
};

export default actions;