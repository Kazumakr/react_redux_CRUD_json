import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import EnhancedTable from "../components/table";
import FilterTextField from "../components/FilterTextField";
import Header from "../components/Header";
import AddForm from "../components/AddForm";

const Home = () => {
	// useEffect(() => {
	// 	dispatch();
	// }, []);
	return (
		<div>
			<Header />
			<FilterTextField />
			<EnhancedTable />
			{/* <AddForm /> */}
		</div>
	);
};

export default Home;
