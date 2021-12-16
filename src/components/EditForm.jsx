import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import { loadCurrentIssue, editIssue } from "../redux/actions";

import Modal from "@mui/material/Modal";

import IconButton from "@mui/material/IconButton";

import EditIcon from "@mui/icons-material/Edit";

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

const EditForm = ({ issueId }) => {
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

	const handleChange = (e) => {
		const { name, value } = e.target;
		setStates({ ...states, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(editIssue(states, issueId));
		handleClose();
	};

	return (
		<>
			<IconButton>
				<EditIcon onClick={handleOpen} />
			</IconButton>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<h2>Edit</h2>
					{/* <p>{issueId}</p> */}
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
							// onChange={(e) => setId(e.target.value)}
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
							// onChange={(e) => setTitle(e.target.value)}
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
							// onChange={(e) => setState(e.target.value)}
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
							// onChange={(e) => setUrl(e.target.value)}
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
							// onChange={(e) => setCreated(e.target.value)}
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
							// onChange={(e) => setUpdated(e.target.value)}
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

export default EditForm;
