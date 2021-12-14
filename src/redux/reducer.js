import { NEW_ISSUE, DELETE_ISSUE, EDIT_ISSUE } from "./actionType";

const initialState = {
	issues: [
		{
			id: 1,
			title: "test",
			state: "test",
			url: "test",
			created: "test",
			updated: "test",
		},
	],
};

const issueReducers = (state = initialState, action) => {
	switch (action.type) {
		case NEW_ISSUE:
			return {
				...state,
				issues: [...state.issues, action.payload],
			};
		case DELETE_ISSUE:
			return {
				...state,
				issues: state.issues.filter((issue) => issue.id !== action.payload),
			};
		// case EDIT_ISSUE:
		//     return state;
		default:
			return state;
	}
};

export default issueReducers;
