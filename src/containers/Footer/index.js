import { Copyright } from "@mui/icons-material";
import Love_IMG from "../../images/love_img.svg";
import React, { useState } from "react";
import "./index.scss";
import { Link, Tooltip } from "@mui/material";
import { LightTooltip } from "../../constants/general";

export const Footer = () => {
	const [footerClick, setfooterClick] = useState(0);
	const [meetTeamVisible, setmeetTeamVisible] = useState(false);
	const [meetTheTeam, setmeetTheTeam] = useState(false);

	const handleClick = () => {
		if (footerClick != 1) {
			setfooterClick(footerClick + 1);
		} else {
			setmeetTeamVisible(true);
		}
	};

	const handleTeamClick = () => {
		setmeetTheTeam(true);
	};

	return (
		<div
			className={`footer-container ${meetTeamVisible && "center"}`}
			onClick={handleClick}
		>
			{!meetTeamVisible && (
				<div className='copyright'>
					<Copyright className='icon' />
					<div className='year'>2022</div>
					<a href='https://channeli.in/maintainer_site/'>
						Information Management Group
					</a>
				</div>
			)}
			{meetTeamVisible && (
				<div className='meet-the-team'>
					{!meetTheTeam ? (
						<LightTooltip title='Meet the team'>
							<img src={Love_IMG} onClick={handleTeamClick} />
						</LightTooltip>
					) : (
						<div className='team-members'>
							<Link
								href='https://github.com/nikkuAg'
								className='member orange'
								target='_blank'
							>
								<div className='name'>Divyansh Agarwal</div>
								<div className='detail'>Developer</div>
							</Link>
							<Link href='#' className='member green' target='_blank'>
								<div className='name'>Nikhil Nagar</div>
								<div className='detail'>Designer</div>
							</Link>
						</div>
					)}
				</div>
			)}
			{!meetTeamVisible && (
				<div className='made-by-img'>
					Made with
					<img src={Love_IMG} />
					by IMG
				</div>
			)}
		</div>
	);
};
