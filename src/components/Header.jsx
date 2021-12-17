import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";

const Header = () => {
	function refreshPage() {
		window.location.reload(false);
	}

	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							<Box textAlign="left">React Redux CRUD</Box>
						</Typography>

						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
						>
							Reload data:
						</Typography>
						<IconButton>
							<RefreshIcon style={{ color: "white" }} onClick={refreshPage} />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>
			;
		</div>
	);
};

export default Header;
