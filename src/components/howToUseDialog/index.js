import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import { howToUse } from "../../constants/general";
import "./index.scss";

export const HowToUse = ({ openDialog, setOpenDialog }) => {
	const [open, setOpen] = useState(openDialog);

	useEffect(() => {
		setOpen(openDialog);
	}, [openDialog]);

	const handleClose = () => {
		setOpen(false);
		setOpenDialog(false);
	};
	return (
		<div>
			<Dialog
				fullWidth={true}
				maxWidth='lg'
				open={open}
				onClose={handleClose}
				className='how-to-use'
			>
				<DialogTitle>How to Use</DialogTitle>
				<DialogContent>
					<ul>
						{howToUse.map((item, i) => (
							<li key={i}>
								{item.rule}
								{item.ruleDescription && (
									<ul>
										{item.ruleDescription.map((rule, j) => (
											<li key={j}>{rule.rule}</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</DialogContent>
			</Dialog>
		</div>
	);
};
