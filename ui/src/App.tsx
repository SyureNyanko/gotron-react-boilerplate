import React, { Component } from "react";
import { ApplicationState } from "./store";
import { Store } from 'redux'
import { Provider } from 'react-redux'

export interface AppProps {
    store: Store<ApplicationState>
}

const App: React.FC<AppProps> = ({store}) => {
    return <Provider store={store}><h1>Hello Gotron World !!!!!</h1></Provider>
}

export default App