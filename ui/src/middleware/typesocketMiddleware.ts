import { MiddlewareAPI } from 'redux'
import { TypeSocket } from 'typesocket'

import { ActionType, MessageModel } from '../store/websocket/types'

export const socketMiddleware = (url: string) => {
    return (store: MiddlewareAPI<any, any>) => {
        const socket = new TypeSocket<MessageModel>(url);
        console.log("disssspat")
        socket.on('connected', () => store.dispatch({ type: ActionType.WS_CONNECTED }));
        socket.on('disconnected', () => store.dispatch({ type: ActionType.WS_DISCONNECTED }));
        socket.on('message', (message) => store.dispatch({ type: ActionType.WS_MESSAGE, value: message }));
        socket.connect();

        return (next: (action: any) => void) => (action: any) => {
            if (action.type && action.type === ActionType.WS_SEND_MESSAGE && socket.readyState === 1)
            return next(action);
        };
    }

}