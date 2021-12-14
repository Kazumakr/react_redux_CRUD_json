import { combineReducers } from "redux";
import issueReducers from "./reducer";

const rootReducer = combineReducers({
	issues: issueReducers,
});

export default rootReducer;
