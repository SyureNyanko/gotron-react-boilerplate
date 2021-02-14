import { Store, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationState, createRootReducer, rootSaga } from './store'
import { socketMiddleware } from './middleware/typesocketMiddleware'

declare global {
    var backendPort: string
}

interface ExtendedWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
declare var window: ExtendedWindow;
const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function configureStore(initialState: ApplicationState): Store<ApplicationState> {
    //const composeEnhancers = composeWithDevTools({})
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        createRootReducer(),
        initialState,
        composeReduxDevToolsEnhancers(applyMiddleware(sagaMiddleware, socketMiddleware('ws://localhost:' + backendPort + "/web/app/events")))
    )
        sagaMiddleware.run(rootSaga)
        return store
    
}