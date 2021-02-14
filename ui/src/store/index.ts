
import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { webSocketReducer } from './websocket/reducer'
import websocketSaga from './websocket/sagas'

export interface ApplicationState {
}

export const createRootReducer = () =>
  combineReducers({
    websocket: webSocketReducer,
  })


  export function* rootSaga() {
    yield all([fork(websocketSaga)])
  }