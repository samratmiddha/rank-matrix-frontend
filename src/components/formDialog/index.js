import React, { useEffect, useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Slide,
	MenuItem,
	Select,
} from "@mui/material";
import "./index.scss";
import {
	toastDuration,
	optionsList,
	choicesList,
} from "../../constants/general";
import {
	makeSelectBranchList,
	makeSelectBranchOneOneList,
	makeSelectCategory,
	makeSelectGender,
	makeSelectInstituteList,
	makeSelectInstituteType,
	makeSelectQuota,
	makeSelectRound,
	makeSelectYear,
} from "../../store/selectors/form";
import { connect } from "react-redux";
import {
	fetchBranchList,
	fetchBranchOneOneList,
	fetchInstituteList,
	fetchInstituteType,
	fetchQuota,
	fetchRound,
} from "../../store/actions/form";
import { showToast } from "../../store/actions/toast";
import { useLocation } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const FormDialog = ({
	openForm,
	setopenForm,
	predictionData,
	yearList,
	roundListComponent,
	roundList,
	instituteTypeList,
	instituteTypeComponent,
	instituteListComponent,
	instituteList,
	predictionList,
	setPredictionType,
	branchListComponent,
	branchList,
	branchOneOneListComponent,
	branchOneOneList,
	genderList,
	categoryList,
	quotaListComponent,
	quotaList,
	setInstituteType,
	setCategory,
	setCutoff,
	setSeatPool,
	setQuota,
	setRank,
	setYear,
	setRound,
	setOption,
	setInstituteId,
	setBranchId,
	setChoice,
	setdataSubmit,
	fetchinstituteTypeDetail,
	isEditing,
	showToastComponent,
}) => {
	const [open, setOpen] = useState(openForm);
	const [year, setyear] = useState(parseInt(localStorage.getItem("year")) || 0);
	const [instituteType, setinstituteType] = useState(
		localStorage.getItem("instituteType") || ""
	);
	const [category, setcategory] = useState(
		localStorage.getItem("category") || ""
	);
	const [cutoffVariation, setcutoffVariation] = useState(
		parseInt(localStorage.getItem("cutoff")) || 10
	);
	const [seatPool, setseatPool] = useState(
		localStorage.getItem("seatPool") || ""
	);
	const [quota, setquota] = useState(localStorage.getItem("quota") || "");
	const [rank, setrank] = useState(parseInt(localStorage.getItem("rank")) || 0);
	const [option, setoption] = useState(localStorage.getItem("option") || "");
	const [round, setround] = useState(localStorage.getItem("round") || "");
	const [choice, setchoice] = useState(localStorage.getItem("choice") || "");
	const [choiceEdit, setchoiceEdit] = useState(localStorage.getItem("choice"));
	const [instituteId, setinstituteId] = useState(
		localStorage.getItem("instituteId") || 0
	);
	const [branchId, setbranchId] = useState(
		localStorage.getItem("branchId") || 0
	);
	const [rankLabel, setrankLabel] = useState("Rank");

	const location = useLocation();

	useEffect(() => {
		if (fetchinstituteTypeDetail) {
			setchoice(localStorage.getItem("choice"));
			if (location.pathname === "/choices") {
				if (choice !== "") {
					const payload = {
						choice,
					};
					instituteTypeComponent(payload);
				}
			}
		}
	}, [fetchinstituteTypeDetail, choice]);

	useEffect(() => {
		setOpen(openForm);
	}, [openForm]);

	useEffect(() => {
		if (year !== 0) {
			const payload = {
				year,
			};
			setround(localStorage.getItem("round") || "");
			roundListComponent(payload);
		}
	}, [year]);

	useEffect(() => {
		if (setInstituteId) {
			const payload = {
				instituteId,
			};
			branchOneOneListComponent(payload);
		}
	}, [instituteId]);

	useEffect(() => {
		if (instituteType !== "") {
			const payload = {
				institute_type: instituteType,
			};
			quotaListComponent(payload);
			if (setInstituteId) {
				instituteListComponent(payload);
			}
			if (setBranchId) {
				branchListComponent(payload);
			}
			if (instituteType === "IIT") {
				setrankLabel("JEE Advance rank");
			} else {
				setrankLabel("JEE Mains rank");
			}
		}
	}, [instituteType]);

	const handleChange = (event) => {
		const selectdata = event.target;
		if (selectdata.name === "institute_type") {
			setinstituteType(selectdata.value);
		} else if (selectdata.name === "category") {
			setcategory(selectdata.value);
		} else if (selectdata.name === "cutoff") {
			setcutoffVariation(selectdata.value);
		} else if (selectdata.name === "seatPool") {
			setseatPool(selectdata.value);
		} else if (selectdata.name === "quota") {
			setquota(selectdata.value);
		} else if (selectdata.name === "rank") {
			setrank(selectdata.value);
		} else if (selectdata.name === "option") {
			setoption(selectdata.value);
		} else if (selectdata.name === "year") {
			setyear(selectdata.value);
		} else if (selectdata.name === "round") {
			setround(selectdata.value);
		} else if (selectdata.name === "institute_list") {
			setinstituteId(selectdata.value);
		} else if (selectdata.name === "branch_list") {
			setbranchId(selectdata.value);
		} else if (selectdata.name === "choice_option") {
			if (isEditing) {
				if (selectdata.value !== choiceEdit) {
					showToastComponent(
						"All the choices you filled will be removed",
						"warning",
						toastDuration
					);
				}
			}
			setchoice(selectdata.value);
		}
	};

	const handleClose = () => {
		setOpen(false);
		setopenForm(false);
	};

	const handleSubmit = () => {
		let error = 0;
		if (setInstituteType) {
			if (instituteType === "") {
				error = 1;
			} else {
				setInstituteType(instituteType);
			}
		}
		if (setCategory) {
			if (category === "") {
				error = 1;
			} else {
				setCategory(category);
			}
		}
		if (setSeatPool) {
			if (seatPool === "") {
				error = 1;
			} else {
				setSeatPool(seatPool);
			}
		}
		if (setQuota) {
			if (quota === "") {
				error = 1;
			} else {
				setQuota(quota);
			}
		}
		if (setRank) {
			if (rank === 0) {
				error = 1;
			} else {
				setRank(rank);
			}
		}
		if (setYear) {
			if (year === 0) {
				error = 1;
			} else {
				setYear(year);
			}
		}
		if (setRound) {
			if (round === "") {
				error = 1;
			} else {
				setRound(round);
			}
		}
		if (setOption) {
			if (option === "") {
				error = 1;
			} else {
				setOption(option);
			}
		}
		if (setInstituteId) {
			if (instituteId === 0) {
				error = 1;
			} else {
				setInstituteId(instituteId);
			}
		}
		if (setBranchId) {
			if (branchId === 0) {
				error = 1;
			} else {
				setBranchId(branchId);
			}
		}
		if (error !== 0) {
			showToastComponent(
				"Please fill all the details",
				"warning",
				toastDuration
			);
		} else {
			if (setChoice) {
				setChoice(choice);
			}
			if (setdataSubmit) {
				setdataSubmit(true);
			}
			if (setCutoff) {
				setCutoff(cutoffVariation);
			}
			handleClose();
		}
	};

	const handlePredictionType = (event) => {
		setPredictionType(event.target.value);
	};

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
				fullWidth
				maxWidth='lg'
				className='form-dialog-container'
			>
				<DialogTitle className='form-title'>
					{predictionList ? (
						<>
							Details for{" "}
							<Select
								value={predictionData.value}
								onChange={handlePredictionType}
								className='prediction-type'
							>
								{predictionList.map((item, index) => (
									<MenuItem value={item.value} key={index}>
										{item.title}
									</MenuItem>
								))}
							</Select>
						</>
					) : (
						predictionData.formTitle
					)}
				</DialogTitle>
				<DialogContent className='form-container'>
					{predictionData.formData.map((form) => {
						if (form.type !== "select") {
							return (
								<TextField
									sx={{ maxWidth: "30%" }}
									className='form-dialog'
									label={form.title === "Rank" ? rankLabel : form.title}
									variant='filled'
									type={form.type}
									name={form.name}
									onChange={handleChange}
									defaultValue={form.name === "cutoff" ? cutoffVariation : rank}
								/>
							);
						} else {
							if (form.list === "option") {
								return (
									<TextField
										sx={{ maxWidth: "30%" }}
										className='form-dialog'
										label={form.title}
										variant='filled'
										select
										disabled={optionsList.length === 0}
										onChange={handleChange}
										name={form.name}
										defaultValue={option}
									>
										{optionsList.map((option) => (
											<MenuItem
												key={option}
												value={option.split(" ")[0].toLowerCase()}
											>
												{option}
											</MenuItem>
										))}
									</TextField>
								);
							} else if (form.list === "year") {
								return (
									<TextField
										sx={{ maxWidth: "30%" }}
										className='form-dialog'
										label={form.title}
										variant='filled'
										select
										disabled={yearList.length === 0}
										onChange={handleChange}
										name={form.name}
										defaultValue={year === 0 ? null : year}
									>
										{yearList.map((option) => (
											<MenuItem key={option} value={option}>
												{option}
											</MenuItem>
										))}
									</TextField>
								);
							} else if (form.list === "round") {
								return (
									<TextField
										sx={{ maxWidth: "30%" }}
										className='form-dialog'
										label={form.title}
										variant='filled'
										select
										disabled={roundList.data.length === 0}
										onChange={handleChange}
										name={form.name}
										defaultValue={round}
									>
										{roundList.data &&
											roundList.data.map((option) => (
												<MenuItem key={option} value={option.split(" ")[1]}>
													{option}
												</MenuItem>
											))}
									</TextField>
								);
							} else if (form.list === "institute_type") {
								return (
									<TextField
										sx={{ maxWidth: "30%" }}
										className='form-dialog'
										label={form.title}
										variant='filled'
										select
										disabled={instituteTypeList.data.length === 0}
										onChange={handleChange}
										name={form.name}
										defaultValue={instituteType}
									>
										{instituteTypeList.data &&
											instituteTypeList.data.map((option) => (
												<MenuItem key={option} value={option}>
													{option}
												</MenuItem>
											))}
									</TextField>
								);
							} else if (form.list === "seatPool") {
								return (
									<TextField
										sx={{ maxWidth: "30%" }}
										className='form-dialog'
										label={form.title}
										variant='filled'
										select
										disabled={genderList.length === 0}
										onChange={handleChange}
										name={form.name}
										defaultValue={seatPool}
									>
										{genderList &&
											genderList.map((option) => (
												<MenuItem key={option.id} value={option.gender}>
													{option.gender}
												</MenuItem>
											))}
									</TextField>
								);
							} else if (form.list === "category") {
								return (
									<TextField
										sx={{ maxWidth: "30%" }}
										className='form-dialog'
										label={form.title}
										variant='filled'
										select
										disabled={categoryList.length === 0}
										onChange={handleChange}
										name={form.name}
										defaultValue={category}
									>
										{categoryList &&
											categoryList.map((option) => (
												<MenuItem key={option.id} value={option.category}>
													{option.category}
												</MenuItem>
											))}
									</TextField>
								);
							} else if (form.list === "quota") {
								return (
									<TextField
										sx={{ maxWidth: "30%" }}
										className='form-dialog'
										label={form.title}
										variant='filled'
										select
										disabled={quotaList.data.length === 0}
										onChange={handleChange}
										name={form.name}
										defaultValue={quota}
									>
										{quotaList.data &&
											quotaList.data.map((option) => (
												<MenuItem key={option.quota} value={option.quota}>
													{option.quota}
												</MenuItem>
											))}
									</TextField>
								);
							} else if (form.list === "institute_list") {
								return (
									<TextField
										sx={{ maxWidth: "30%" }}
										className='form-dialog'
										label={form.title}
										variant='filled'
										select
										disabled={instituteList.data.length === 0}
										onChange={handleChange}
										name={form.name}
										defaultValue={instituteId}
									>
										{instituteList.data &&
											instituteList.data.map((option) => (
												<MenuItem key={option.id} value={option.id}>
													{option.name}
												</MenuItem>
											))}
									</TextField>
								);
							} else if (form.list === "branch_list") {
								return (
									<TextField
										sx={{ maxWidth: "30%" }}
										className='form-dialog'
										label={form.title}
										variant='filled'
										select
										disabled={branchList.data.length === 0}
										onChange={handleChange}
										name={form.name}
										defaultValue={branchId}
									>
										{setInstituteId
											? branchOneOneList.data &&
											  branchOneOneList.data.map(
													(option) =>
														option.branch_detail && (
															<MenuItem
																key={option.branch_detail.id}
																value={option.branch_detail.id}
															>
																{option.branch_detail.name}
															</MenuItem>
														)
											  )
											: branchList.data &&
											  branchList.data.map((option) => (
													<MenuItem key={option.id} value={option.id}>
														{option.branch_code}
													</MenuItem>
											  ))}
									</TextField>
								);
							} else if (form.list === "choice_option") {
								return (
									<TextField
										sx={{ maxWidth: "30%" }}
										className='form-dialog'
										label={form.title}
										variant='filled'
										select
										disabled={choicesList.length === 0}
										onChange={handleChange}
										name={form.name}
										defaultValue={choice}
									>
										{choicesList.map((option, index) => (
											<MenuItem key={index} value={option.value}>
												{option.title}
											</MenuItem>
										))}
									</TextField>
								);
							}
						}
					})}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleSubmit}>Submit</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		yearList: makeSelectYear(state),
		roundList: makeSelectRound(state),
		instituteTypeList: makeSelectInstituteType(state),
		genderList: makeSelectGender(state),
		categoryList: makeSelectCategory(state),
		quotaList: makeSelectQuota(state),
		instituteList: makeSelectInstituteList(state),
		branchList: makeSelectBranchList(state),
		branchOneOneList: makeSelectBranchOneOneList(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		instituteTypeComponent: (payload) => dispatch(fetchInstituteType(payload)),
		roundListComponent: (payload) => dispatch(fetchRound(payload)),
		quotaListComponent: (payload) => dispatch(fetchQuota(payload)),
		instituteListComponent: (payload) => dispatch(fetchInstituteList(payload)),
		branchListComponent: (payload) => dispatch(fetchBranchList(payload)),
		branchOneOneListComponent: (payload) =>
			dispatch(fetchBranchOneOneList(payload)),
		showToastComponent: (message, type, duration) =>
			dispatch(showToast(message, type, duration)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog);
