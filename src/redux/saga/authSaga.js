import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { login, loginFailure, loginSuccess } from "../slice/authSlice";

const loginKey = process.env.REACT_APP_LOGIN_API_KEY;

function* loginSaga(action) {
    try{
        const response = yield call (axios.post, `${loginKey}`,{
            email: action.payload.email,
            password: action.payload.password,
        });

        const data = response.data;
        yield put(loginSuccess(data));
        console.log("data from authSaga", data);
        // localStorage.setItem('token', data.token);
    }catch(error){
        let errorMsg = "Something went wrong";
        if(error.response && error.response.data){
            errorMsg = error.response.data.message;
        }
        yield put(loginFailure(errorMsg));
    }
}

export function* watchLoginSaga(){
    yield takeLatest(login.type, loginSaga);
}