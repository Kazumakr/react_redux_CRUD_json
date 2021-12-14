import { NEW_ISSUE, DELETE_ISSUE, EDIT_ISSUE } from "./actionType";

export const newIssueAction = (issue) => ({
	type: NEW_ISSUE,
	payload: issue,
});

export const deleteIssueAction = (id) => ({
	type: DELETE_ISSUE,
	payload: id,
});

export const editIssueAction = (id) => ({
	type: EDIT_ISSUE,
	payload: id,
});
