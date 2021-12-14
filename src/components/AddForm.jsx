import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { newIssueAction } from "../redux/actions";

import Modal from "@mui/material/Modal";

import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

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

const AddForm = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [issue, setIssue] = useState({
		id: "",
		title: "",
		state: "",
		url: "",
		created: "",
		updated: "",
	});
	const { id, title, state, url, created, updated } = issue;
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setIssue({ ...issue, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(newIssueAction(issue));
		handleClose();
	};

	return (
		<>
			<IconButton>
				<AddIcon onClick={handleOpen} />
			</IconButton>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<h2>Header</h2>
					<form onSubmit={handleSubmit}>
						<TextField
							id="standard-search"
							label="id*"
							name="id"
							value={id}
							type="text"
							variant="standard"
							helperText="Required field"
							onChange={handleChange}
						/>
						<br />

						<TextField
							id="standard-helperText"
							label="Title*"
							name="title"
							value={title}
							type="text"
							helperText="Required field"
							variant="standard"
							onChange={handleChange}
						/>

						<br />

						<TextField
							id="standard-helperText"
							label="State*"
							name="state"
							value={state}
							type="text"
							helperText="Required field"
							variant="standard"
							onChange={handleChange}
						/>

						<br />
						<TextField
							id="standard-helperText"
							label="Url"
							name="url"
							value={url}
							type="text"
							variant="standard"
							onChange={handleChange}
						/>

						<br />
						<TextField
							id="standard-helperText"
							label="Created at"
							name="created"
							value={created}
							type="text"
							variant="standard"
							onChange={handleChange}
						/>
						<br />

						<TextField
							id="standard-helperText"
							label="Updated at"
							name="updated"
							value={updated}
							type="text"
							variant="standard"
							onChange={handleChange}
						/>

						<br />
						<Button variant="text" type="submit">
							Save
						</Button>
						<Button variant="text" onClick={handleClose}>
							Cancel
						</Button>
					</form>
				</Box>
			</Modal>
		</>
	);
};

export default AddForm;
