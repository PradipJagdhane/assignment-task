import { all } from "redux-saga/effects";
import { watchLoginSaga } from "./authSaga";
import { watchSignup } from "./signupSaga";
import { watchTableSaga } from "./tableSaga";

export function* rootSaga(){
    yield all([
        watchLoginSaga(),
        watchSignup(),
        watchTableSaga(),
    ]);
}