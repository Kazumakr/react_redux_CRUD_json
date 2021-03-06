import {
	NEW_ISSUE,
	DELETE_ISSUE,
	EDIT_ISSUE,
	GET_ISSUE,
	GET_CURRENT_ISSUE,
} from "./actionType";

const initialState = {
	issues: [],
	issue: {},
	loading: false,
};

const issueReducers = (state = initialState, action) => {
	switch (action.type) {
		case NEW_ISSUE:
		case DELETE_ISSUE:
		case EDIT_ISSUE:
			return {
				...state,
				loading: false,
			};
		case GET_ISSUE:
			return {
				...state,
				issues: action.payload,
				loading: false,
			};
		case GET_CURRENT_ISSUE:
			return {
				...state,
				issue: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

export default issueReducers;
