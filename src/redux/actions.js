import {
	NEW_ISSUE,
	DELETE_ISSUE,
	EDIT_ISSUE,
	GET_ISSUE,
	GET_CURRENT_ISSUE,
} from "./actionType";
import axios from "axios";

const newIssueAction = (issue) => ({
	type: NEW_ISSUE,
	payload: issue,
});

const deleteIssueAction = () => ({
	type: DELETE_ISSUE,
	// payload: id,
});
const editIssueAction = (id) => ({
	type: EDIT_ISSUE,
	payload: id,
});
const getIssueAction = (issues) => ({
	type: GET_ISSUE,
	payload: issues,
});
const getCurrentIssueAction = (issue) => ({
	type: GET_CURRENT_ISSUE,
	payload: issue,
});

export const loadIssues = () => {
	return function (dispatch) {
		axios
			.get(`${process.env.REACT_APP_API}`)
			.then((res) => {
				dispatch(getIssueAction(res.data));
			})
			.catch((error) => console.log(error));
	};
};
export const loadCurrentIssue = (id) => {
	return function (dispatch) {
		axios
			.get(`${process.env.REACT_APP_API}/${id}`)
			.then((res) => {
				dispatch(getCurrentIssueAction(res.data));
			})
			.catch((error) => console.log(error));
	};
};
export const editIssue = (issue, id) => {
	return function (dispatch) {
		axios
			.put(`${process.env.REACT_APP_API}/${id}`, issue)
			.then((res) => {
				console.log("res", res);
				dispatch(editIssueAction());
				dispatch(loadIssues());
			})
			.catch((error) => console.log(error));
	};
};
export const newIssue = (issue) => {
	return function (dispatch) {
		axios
			.post(`${process.env.REACT_APP_API}`, issue)
			.then((res) => {
				dispatch(newIssueAction());
				dispatch(loadIssues());
			})
			.catch((error) => console.log(error));
	};
};
export const deleteIssue = (id) => {
	return function (dispatch) {
		axios
			.delete(`${process.env.REACT_APP_API}/${id}`)
			.then((res) => {
				dispatch(deleteIssueAction());
				dispatch(loadIssues());
			})
			.catch((error) => console.log(error));
	};
};
