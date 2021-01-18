import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {catsReducer, initialState} from "./catsReducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  catsReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
