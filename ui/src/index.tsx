import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";

import configureStore from "./configureStore"
const initialState = window.INITIAL_REDUX_STATE
const store  = configureStore(initialState)

ReactDOM.render(<App store={store}/>, document.getElementById("root"));
