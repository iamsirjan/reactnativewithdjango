import {call, put, takeEvery, all, fork} from "redux-saga/effects";
import {
    registerUser
} from "../../../api/auth";
import actions from './actions';


function* calladdUserReq(action) {
    try {
        let apiResponse = yield call( registerUser,action.payload);
        let {status} = apiResponse;
        const message = 'Project added successfully';
        yield put({
            type: actions.SEND_CREATEUSER_SUC,
            statusCode : status,
        });
    } catch(err) {
        if (err && err?.response) {
            yield put({
                type: actions.SEND_CREATEUSER_FAIL,
                payload: err.response.message,

            })
        }
        yield put({
            type: actions.SEND_CREATEUSER_FAIL,
            payload: err.message,
        })
    }
}

export function* createUser() {
    yield takeEvery(actions.SEND_CREATEUSER_FAIL, calladdUserReq);
}


export default function* userRegister() {
    return yield all ([
        fork(createUser)
    ])
}