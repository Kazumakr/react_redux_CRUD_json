import * as React from "react";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FilterTextField() {
	return (
		// <Box
		// 	component="form"
		// 	sx={{
		// 		"& > :not(style)": { m: 1, width: "25ch" },
		// 	}}
		// 	noValidate
		// 	autoComplete="off"
		// >
		<div style={{ padding: "10px" }}>
			<TextField
				fullWidth
				id="standard-basic"
				label="Filter issues"
				variant="standard"
			/>
		</div>
		// </Box>
	);
}
