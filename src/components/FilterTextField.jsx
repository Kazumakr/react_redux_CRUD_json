import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import EnhancedTable from "./table";
import { useSelector } from "react-redux";

export default function FilterTextField() {
	const [searchInput, setSearchInput] = useState("");
	const [APIData, setAPIData] = useState([]);
	const [filteredResults, setFilteredResults] = useState([]);
	let { issues } = useSelector((state) => state.data);
	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API}`).then((res) => {
			setAPIData(res.data);
		});
	}, [issues]);

	const searchItems = (searchValue) => {
		setSearchInput(searchValue);

		if (searchValue !== "") {
			const filteredData = APIData.filter((item) => {
				return Object.values(item)
					.join("")
					.toLowerCase()
					.includes(searchValue.toLowerCase());
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
				filteredResults={filteredResults}
			/>
		</div>
	);
}
