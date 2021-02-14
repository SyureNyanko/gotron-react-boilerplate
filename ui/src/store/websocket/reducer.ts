import { Reducer } from 'redux'
import { State } from './types'

export const initialState: State = {}

const reducer: Reducer<State> = (state = initialState, action) => {
    switch ( action.type ) {
        default: {
            console.log("reducer", action.type)
            return state
        }
    }
}

export { reducer as webSocketReducer}