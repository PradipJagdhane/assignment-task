
import { configureStore }  from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga';
import authSlice from "../slice/authSlice";
import { rootSaga } from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer:{
        auth: authSlice,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export {store};