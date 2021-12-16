import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { loadCurrentIssue } from "../redux/actions";

import Modal from "@mui/material/Modal";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteIssue } from "../redux/actions";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const DeleteForm = ({ issueId }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
		dispatch(loadCurrentIssue(issueId));
	};
	const handleClose = () => setOpen(false);
	const [states, setStates] = useState({
		id: "",
		title: "",
		state: "",
		url: "",
		created: "",
		updated: "",
	});
	const { id, title, state, url, created, updated } = states;
	const dispatch = useDispatch();
	const { issue } = useSelector((states) => states.data);

	// useEffect(() => {
	// 	dispatch(loadCurrentIssue(issueId));
	// }, []);

	useEffect(() => {
		if (issue) {
			setStates({ ...issue });
		}
	}, [issue]);

	const handleDelete = (id) => {
		dispatch(deleteIssue(id));
	};

	return (
		<>
			<IconButton>
				<DeleteIcon onClick={handleOpen} />
			</IconButton>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<h2>Are you sure?</h2>
					<br />
					<p>
						Id:
						{id}
					</p>
					<br />
					<p>Title:{title}</p>
					<br />
					<p>State:{state}</p>
					<br />
					<p>Url:{url}</p>
					<br />
					<p>Created at:{created}</p>
					<br />
					<p>Updated at:{updated}</p>
					<br />
					<Button variant="text" onClick={() => handleDelete(issueId)}>
						Delete
					</Button>
					<Button variant="text" onClick={handleClose}>
						Cancel
					</Button>
				</Box>
			</Modal>
		</>
	);
};

export default DeleteForm;
