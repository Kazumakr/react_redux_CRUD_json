import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { newIssue } from "../redux/actions";
import { blue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
	boxShadow: 24,
	p: 4,
};

const theme = createTheme({
	palette: {
		primary: {
			main: "#000",
		},
	},
});

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
		dispatch(newIssue(issue));
		handleClose();
		setIssue({
			id: "",
			title: "",
			state: "",
			url: "",
			created: "",
			updated: "",
		});
	};

	return (
		<>
			<IconButton>
				<AddIcon sx={{ color: blue[500] }} onClick={handleOpen} />
			</IconButton>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<h2>Add new Issue</h2>
					<form onSubmit={handleSubmit}>
						<TextField
							id="standard-search"
							label="id"
							name="id"
							value={id}
							type="text"
							variant="standard"
							error={id === ""}
							helperText={id === "" ? "Required field" : " "}
							onChange={handleChange}
							fullWidth
							margin="normal"
							required
						/>
						<br />

						<TextField
							id="standard-helperText"
							label="Title"
							name="title"
							value={title}
							type="text"
							error={title === ""}
							helperText={title === "" ? "Required field" : " "}
							variant="standard"
							onChange={handleChange}
							margin="normal"
							fullWidth
							required
						/>

						<br />

						<TextField
							id="standard-helperText"
							label="State"
							name="state"
							value={state}
							type="text"
							error={state === ""}
							helperText={
								state === "" ? "Required field" : `${state.length}/10`
							}
							variant="standard"
							onChange={handleChange}
							margin="normal"
							fullWidth
							required
							inputProps={{ maxLength: 10 }}
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
							margin="normal"
							fullWidth
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
							fullWidth
							margin="normal"
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
							margin="normal"
							fullWidth
						/>

						<br />
						<ThemeProvider theme={theme}>
							<Button
								variant="text"
								type="submit"
								disabled={!id || !title || !state}
								color="primary"
							>
								Save
							</Button>
							<Button variant="text" onClick={handleClose} color="primary">
								Cancel
							</Button>
						</ThemeProvider>
					</form>
				</Box>
			</Modal>
		</>
	);
};

export default AddForm;
