import React, { useState } from "react";
import Box from "@mui/material/Box";
import { pink } from "@mui/material/colors";

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
	width: 300,
	bgcolor: "background.paper",
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
	const dispatch = useDispatch();
	const { issue } = useSelector((states) => states.data);
	const handleDelete = (id) => {
		dispatch(deleteIssue(id));
	};

	return (
		<>
			<IconButton>
				<DeleteIcon sx={{ color: pink[500] }} onClick={handleOpen} />
			</IconButton>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<h2>Are you sure?</h2>
					{issue.id && <p>Id:{issue.id}</p>}
					{issue.id && <p>Title:{issue.title}</p>}
					{issue.state && <p>State:{issue.state}</p>}
					{issue.url && <p>Url:{issue.url}</p>}
					{issue.created && <p>Created at:{issue.created}</p>}
					{issue.updated && <p>Updated at:{issue.updated}</p>}
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
