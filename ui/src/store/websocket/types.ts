

export type ApiResponse = Record<string, any>

export interface State {}

export interface MessageModel {
    event: string
    Content: string
}

export enum EventType {
    HELLO_WORLD = "HELLO_WORLD"
}

export enum ActionType {
    WS_CONNECTED = "@@websocket/WS_CONNECTED",
    WS_DISCONNECTED = "@@websocket/WS_DISCONNECTED",
    WS_MESSAGE = "@@websocket/WS_MESSAGE",
    WS_SEND_MESSAGE = "@@websocket/WS_SEND_MESSAGE"
}
