import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
import axios from "axios";
import TextField from "@mui/material/TextField";

export default function FilterTextField() {
	const [searchInput, setSearchInput] = useState("");
	const [APIData, setAPIData] = useState([]);
	const [filteredResults, setFilteredResults] = useState([]);
	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API}`).then((res) => {
			setAPIData(res.data);
		});
	}, []);

	const searchItems = (searchValue) => {
		setSearchInput(searchValue);
		if (searchInput !== "") {
			const filteredData = APIData.filter((item) => {
				return Object.values(item)
					.join("")
					.toLowerCase()
					.includes(searchInput.toLowerCase());
			});
			setFilteredResults(filteredData);
		} else {
			setFilteredResults(APIData);
		}
	};
	return (
		<div style={{ padding: "10px" }}>
			<TextField
				fullWidth
				id="standard-basic"
				label="Filter issues"
				variant="standard"
				onChange={(e) => searchItems(e.target.value)}
			/>

			{/* <div>
				{searchInput.length > 1
					? filteredResults.map((item) => {
							return (
								<>
									<p>{item.title}</p>
									<p>{item.state}</p>
								</>
							);
					  })
					: APIData.map((item) => {
							return (
								<>
									<p>{item.title}</p>
									<p>{item.state}</p>
								</>
							);
					  })}
			</div> */}
		</div>
	);
}
