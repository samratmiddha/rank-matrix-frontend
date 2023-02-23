import { Chip, Stack } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { toastDuration } from "../../constants/general"
import { showToast } from "../../store/actions/toast"
import "./index.scss"

export const ClickableChips = ({
	chipList,
	setChipList,
	defaultSelected,
	setPage,
}) => {
	const dispatch = useDispatch()
	const [selected, setselected] = useState([defaultSelected])

	const handleClick = (value) => {
		if (selected.includes(value)) {
			removeItem(value)
		} else {
			setselected((prevState) => [...prevState, value])
		}
	}

	const removeItem = (item) => {
		setselected((prevState) =>
			prevState.filter((prevItem) => prevItem !== item)
		)
	}

	useEffect(() => {
		let text = ""
		selected.map((item, index) => {
			if (selected.length === index + 1) {
				text += item
			} else {
				text += item + ","
			}
		})
		if (text === "") {
			dispatch(
				showToast("Select atleast one Institute Type", "warning", toastDuration)
			)
		}
		setChipList(text)
		setPage(1)
	}, [selected])

	return (
		<div className='clickable-chip-container'>
			<Stack direction='row' spacing={2}>
				{chipList.results &&
					chipList.results.map((item, index) => (
						<Chip
							label={`${item.type}s`}
							value={item.type}
							onClick={() => handleClick(item.type)}
							key={index}
							component='button'
							variant={`${selected.includes(item.type) ? "" : "outlined"}`}
						/>
					))}
			</Stack>
		</div>
	)
}
