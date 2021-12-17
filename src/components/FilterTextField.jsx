import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import EnhancedTable from "./table";

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
		<div>
			<TextField
				fullWidth
				id="standard-basic"
				label="Filter issues"
				variant="standard"
				onChange={(e) => searchItems(e.target.value)}
				style={{ margin: " 10px 20px" }}
			/>
			<EnhancedTable
				searchInput={searchInput}
				filteredResults={searchInput.length >= 1 ? filteredResults : APIData}
			/>
		</div>
	);
}
