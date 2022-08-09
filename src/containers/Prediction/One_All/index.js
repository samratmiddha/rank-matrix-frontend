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
import { TableInfo } from "../../../components/tableHeader";
import { PredictionList } from "../../../constants/general";
import { fetchOneAllPrediction } from "../../../store/actions/prediction";
import { makeSelectOneAllPrediction } from "../../../store/selectors/prediction";

const OneBranchAllInstitutesPrediction = ({
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
	const [branchId, setbranchId] = useState(0);
	const [openForm, setopenForm] = useState(false);
	const [dataSubmit, setdataSubmit] = useState(false);

	useEffect(() => {
		setopenForm(true);
	}, [predictionType]);

	useEffect(() => {
		if (dataSubmit) {
			const payload = {
				instituteType,
				branchId,
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
			localStorage.setItem("branchId", branchId);
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
				setBranchId={setbranchId}
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
					{!predictionObj.error &&
						predictionObj.data.institutes &&
						predictionObj.data.institutes.length !== 0 && (
							<TableInfo heading={predictionObj.data.branch.branch_code} />
						)}
				</div>
				{predictionObj.loading ? (
					<CircularProgress />
				) : (
					!predictionObj.error &&
					predictionObj.data.institutes &&
					predictionObj.data.institutes.length !== 0 && (
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
													{`JoSAA ${obj.split("_")[1]}: ${
														obj.split("_")[0].slice(0, -1) +
														" " +
														obj.split("_")[0].slice(-1)
													}`}
												</TableCell>
											))}
										</TableRow>
									</TableHead>
									<TableBody>
										{predictionObj.data.institutes.map((institute) => (
											<TableRow key={institute.id} className='prediction'>
												<TableCell className='branch-cell'>
													{institute.name}
												</TableCell>
												{predictionObj.data.round_data.map((obj, index) => (
													<TableCell
														align='center'
														key={index}
														className={`${
															obj.find(
																(obj) => obj.institute_code === institute.id
															)?.color
														} rank`}
													>
														{obj.find(
															(obj) => obj.institute_code === institute.id
														) ? (
															<>
																{
																	obj.find(
																		(obj) => obj.institute_code === institute.id
																	).opening_rank
																}
																<br /> to
																<br />
																{
																	obj.find(
																		(obj) => obj.institute_code === institute.id
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
		predictionObj: makeSelectOneAllPrediction(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		predictionComponent: (payload) => dispatch(fetchOneAllPrediction(payload)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OneBranchAllInstitutesPrediction);
