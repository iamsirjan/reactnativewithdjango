const entities = '[project]' ;

const actions = {
    SEND_CREATEUSER_REQ : `${entities} SEND_CREATEUSER_REQ`,
    SEND_CREATEUSER_SUC : `${entities} SEND_CREATEUSER_SUC`,
    SEND_CREATEUSER_FAIL : `${entities} SEND_CREATEUSER_FAIL`,

createUser: (payload) => ({
    type: actions.SEND_CREATEUSER_REQ,
    payload,
})

}

export default actions;