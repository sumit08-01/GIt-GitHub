
import { createStore } from "redux";

import rootReducer from "./reducers";

const store = createStore(rootReducer, window._REDUX_DEVTOOLS_EXTENTION_ && Window._REDUX_DEVTOOLS_EXTENTION_())

export default store;

