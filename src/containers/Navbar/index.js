import "./index.scss";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { websiteName } from "../../constants/general";
import logo from "../../images/icon.png";
import { Link } from "react-router-dom";
import { HowToUse } from "../../components/howToUseDialog";

export const Navbar = () => {
	const [showShadow, setshowShadow] = useState(false);
	const [howToUseClick, setHowToUseClick] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset === 0) {
				setshowShadow(false);
			} else {
				setshowShadow(true);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, [showShadow]);

	const howUseClick = () => {
		setHowToUseClick(true);
	};

	return (
		<>
			<div className={`navbar-container ${showShadow ? "shadow" : ""}`}>
				<Link to='/' className='go-back'>
					<div className='content'>
						<img src={logo} alt={websiteName} className='element logo' />
						<div className='title element'>{websiteName}</div>
					</div>
				</Link>
				<div className='content'>
					<Button variant='contained' onClick={howUseClick} className='element'>
						How to Use
					</Button>
				</div>
			</div>
			<HowToUse openDialog={howToUseClick} setOpenDialog={setHowToUseClick} />
		</>
	);
};
