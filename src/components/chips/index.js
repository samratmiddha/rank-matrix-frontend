import { Chip, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./index.scss";

export const ClickableChips = ({ chipList, setChipList, defaultSelected }) => {
	const [selected, setselected] = useState([defaultSelected]);

	const handleClick = (value) => {
		if (selected.includes(value)) {
			removeItem(value);
		} else {
			setselected((prevState) => [...prevState, value]);
		}
	};

	const removeItem = (item) => {
		setselected((prevState) =>
			prevState.filter((prevItem) => prevItem !== item)
		);
	};

	useEffect(() => {
		let text = "";
		selected.map((item, index) => {
			if (selected.length == index + 1) {
				text += item;
			} else {
				text += item + ",";
			}
		});
		setChipList(text);
	}, [selected]);

	return (
		<div className='clickable-chip-container'>
			<Stack direction='row' spacing={2}>
				{chipList.map((item, index) => (
					<Chip
						label={`${item}s`}
						// color='primary'
						value={item}
						onClick={() => handleClick(item)}
						key={index}
						component='button'
						variant={`${selected.includes(item) ? "" : "outlined"}`}
					/>
				))}
			</Stack>
		</div>
	);
};
