import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	CircularProgress,
	Grid,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { featuresCard } from "./constants";
import { fetchRecentUpdates } from "../../store/actions/dashboard";
import { connect } from "react-redux";
import { makeSelectRecentUpdate } from "../../store/selectors/dashboard";
import { Link } from "react-router-dom";

const Dashboard = ({ recentUpdateComponent, recentUpdateObject }) => {
	useEffect(() => {
		recentUpdateComponent();
	}, []);

	return (
		<div>
			<Box className='dashboard-container'>
				<Box className='updates'>
					{!recentUpdateObject.loading && !recentUpdateObject.error ? (
						<>
							<Typography gutterBottom variant='h5' component='div'>
								Updates HI
							</Typography>
							<ul className='recent-updates'>
								{recentUpdateObject.data.map((update, index) => (
									<Typography
										gutterBottom
										variant='p'
										key={index}
										component='li'
										className='noto-sans'
									>
										{update.text}
									</Typography>
								))}
							</ul>
						</>
					) : (
						!recentUpdateObject.error && <CircularProgress />
					)}
				</Box>
				<Grid
					container
					direction='row'
					justifyContent='left'
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{featuresCard.map((card, index) => (
						<Grid item xs={2} sm={4} md={4} key={index}>
							<Card>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										{card.title}
									</Typography>
								</CardContent>
								<CardActionArea>
									<Link to={card.link}>
										<CardMedia
											component='img'
											alt={card.title}
											image={card.image}
										/>
									</Link>
								</CardActionArea>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
};

Dashboard.propTypes = {
	newUpdateComponent: PropTypes.func,
	recentUpdateComponent: PropTypes.func,
	recentUpdateObject: PropTypes.object,
	howToUseClick: PropTypes.bool,
	setHowToUseClick: PropTypes.func,
};

function mapStateToProps(state) {
	return {
		recentUpdateObject: makeSelectRecentUpdate(state),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		recentUpdateComponent: () => dispatch(fetchRecentUpdates()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
