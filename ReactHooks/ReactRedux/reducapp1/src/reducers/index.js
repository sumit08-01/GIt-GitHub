import changeTheNumber from "./upDown";
import mulDivTheNumber from "./mulDiv";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    mulDivTheNumber
})
export default rootReducer