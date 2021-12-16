import { combineReducers } from "redux";
import issueReducers from "./reducer";

const rootReducer = combineReducers({
	data: issueReducers,
});

export default rootReducer;
