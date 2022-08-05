import { Typography } from "@mui/material";
import React from "react";
import "./index.scss";

export const Header = ({ heading, label }) => {
	return (
		<div className='header-container'>
			<div className='header-content'>
				<Typography variant='h4' component='h2'>
					{heading}
				</Typography>
				<Typography variant='h4' component='div' className='label'>
					{label}
				</Typography>
			</div>
		</div>
	);
};
