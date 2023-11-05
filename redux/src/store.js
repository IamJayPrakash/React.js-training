import rootReducer from './reducer/index';
import { createStore } from "redux"

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;