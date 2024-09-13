import { all } from "redux-saga/effects";
import { watchLoginSaga } from "./authSaga";

export function* rootSaga(){
    yield all([
        watchLoginSaga(),
    ]);
}