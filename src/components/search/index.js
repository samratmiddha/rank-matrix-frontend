import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import "./index.scss";

export const SearchBar = ({ labelText, setSearchKey, defaultWord }) => {
	const handleChange = (event) => {
		setSearchKey(event.target.value.trim());
	};

	return (
		<div className='search-container'>
			<TextField
				label={labelText}
				sx={{ m: 1, width: "25ch" }}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<SearchIcon sx={{ mr: 1, my: 0.5 }} />
						</InputAdornment>
					),
				}}
				onChange={handleChange}
				defaultValue={defaultWord}
			/>
		</div>
	);
};
