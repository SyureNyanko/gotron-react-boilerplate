import { all, put, takeEvery, fork} from "redux-saga/effects"
import {ActionType, MessageModel, EventType} from "./types"
import { AnyAction } from 'redux'


function* hello_world(msg: string) {
    console.log(msg)
}

function* handleMessage(action: AnyAction) {
    const msg: MessageModel = action.value as MessageModel;
    switch(msg.event) {
        case EventType.HELLO_WORLD:
            yield fork(hello_world, msg.Content)
            break;
    }
}


function* watchWebsocketEvent() {
    yield takeEvery(ActionType.WS_MESSAGE, handleMessage);
}


function* websocketSaga() {
    yield all([fork(watchWebsocketEvent)])
}


export default websocketSaga