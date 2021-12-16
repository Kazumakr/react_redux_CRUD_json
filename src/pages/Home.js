import React from "react";
import EnhancedTable from "../components/table";
import FilterTextField from "../components/FilterTextField";
import Header from "../components/Header";

const Home = () => {
	return (
		<div>
			<Header />
			<FilterTextField />
			<EnhancedTable />
		</div>
	);
};

export default Home;
