import {
	Button,
	CircularProgress,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import FormDialog from "../../../components/formDialog";
import { Header } from "../../../components/header";
import { PredictionList } from "../../../constants/general";
import { fetchAllOnePrediction } from "../../../store/actions/prediction";
import { makeSelectAllOnePrediction } from "../../../store/selectors/prediction";

const AllBranchOneCollegePrediction = ({
	setpredictionType,
	predictionType,
	predictionComponent,
	predictionObj,
}) => {
	const [instituteType, setinstituteType] = useState("");
	const [category, setcategory] = useState("");
	const [cutoff, setcutoff] = useState(10);
	const [seatPool, setseatPool] = useState("");
	const [quota, setquota] = useState("");
	const [rank, setrank] = useState(0);
	const [instituteId, setinstituteId] = useState(0);
	const [openForm, setopenForm] = useState(false);
	const [dataSubmit, setdataSubmit] = useState(false);

	useEffect(() => {
		setopenForm(true);
	}, [predictionType]);

	useEffect(() => {
		if (dataSubmit) {
			const payload = {
				instituteId,
				category,
				seatPool,
				quota,
				rank,
				cutoff,
			};
			predictionComponent(payload);
			localStorage.setItem("instituteType", instituteType);
			localStorage.setItem("category", category);
			localStorage.setItem("cutoff", cutoff);
			localStorage.setItem("seatPool", seatPool);
			localStorage.setItem("quota", quota);
			localStorage.setItem("rank", rank);
			localStorage.setItem("instituteId", instituteId);
			setdataSubmit(false);
		}
	}, [dataSubmit]);

	const editDetailButtonClick = () => {
		setopenForm(true);
	};

	return (
		<div className='list-container'>
			<Header
				heading='Prediction'
				label={
					PredictionList.find(
						(prediction) => prediction.value === predictionType
					).title
				}
			/>
			<FormDialog
				openForm={openForm}
				setopenForm={setopenForm}
				predictionData={PredictionList.find(
					(prediction) => prediction.value === predictionType
				)}
				predictionList={PredictionList}
				setPredictionType={setpredictionType}
				setInstituteType={setinstituteType}
				setInstituteId={setinstituteId}
				setCategory={setcategory}
				setCutoff={setcutoff}
				setSeatPool={setseatPool}
				setQuota={setquota}
				setRank={setrank}
				setdataSubmit={setdataSubmit}
			/>
			<div className='table-container'>
				<div className='filters between'>
					<Button className='choice-button' onClick={editDetailButtonClick}>
						Edit Details
					</Button>
				</div>
				{predictionObj.loading ? (
					<CircularProgress />
				) : (
					!predictionObj.error &&
					predictionObj.data.branch &&
					predictionObj.data.branch.length !== 0 && (
						<>
							<TableContainer
								component={Paper}
								className='prediction-table-container'
							>
								<Table sx={{ minWidth: 650 }}>
									<TableHead className='prediction-table-head'>
										<TableRow>
											<TableCell className='insitute_head' />
											{predictionObj.data.keys.map((obj, index) => (
												<TableCell key={index} className='insitute_head'>
													{`JoSAA ${obj.split("_")[1]}: ${obj.split("_")[0]}`}
												</TableCell>
											))}
										</TableRow>
									</TableHead>
									<TableBody>
										{predictionObj.data.branch.map((branch) => (
											<TableRow key={branch.id} className='prediction'>
												<TableCell className='branch-cell'>
													{branch.branch_code}
												</TableCell>
												{predictionObj.data.round_data.map((obj, index) => (
													<TableCell
														align='center'
														key={index}
														className={`${
															obj.find((obj) => obj.branch_code === branch.id)
																?.color
														} rank`}
													>
														{obj.find(
															(obj) => obj.branch_code === branch.id
														) ? (
															<>
																{
																	obj.find(
																		(obj) => obj.branch_code === branch.id
																	).opening_rank
																}
																<br />
																to
																<br />
																{
																	obj.find(
																		(obj) => obj.branch_code === branch.id
																	).closing_rank
																}
															</>
														) : (
															"-"
														)}
													</TableCell>
												))}
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</>
					)
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		predictionObj: makeSelectAllOnePrediction(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		predictionComponent: (payload) => dispatch(fetchAllOnePrediction(payload)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AllBranchOneCollegePrediction);
