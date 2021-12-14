import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { newIssueAction } from "../redux/actions";

import Modal from "@mui/material/Modal";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteIssueAction } from "../redux/actions";

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
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteIssueAction(id));
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
					<p>Id:</p>
					<br />
					<p>Title:</p>
					<br />
					<p>State:</p>
					<br />
					<p>Url:</p>
					<br />
					<p>Created at:</p>
					<br />
					<p>Updated at:</p>
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
