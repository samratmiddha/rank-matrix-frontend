import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { visuallyHidden } from "@mui/utils";
import {
	Box,
	Button,
	CircularProgress,
	Paper,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel,
	Tabs,
} from "@mui/material";
import { Header } from "../../../components/header";
import { SearchBar } from "../../../components/search";
import { fetchSeatMatrix } from "../../../store/actions/list";
import {
	makeSelectInstituteType,
	makeSelectYear,
} from "../../../store/selectors/form";
import { makeSelectSeatMatrix } from "../../../store/selectors/list";
import "../../list.scss";
import { CustomPagination } from "../../../components/pagination";
import { seatMatrixHeader } from "../../../constants/tableHeader";
import { fetchInstituteType } from "../../../store/actions/form";
import { ClickableChips } from "../../../components/chips";

const SeatMatrix = ({
	seatMatrixComponent,
	instituteTypeObj,
	instituteTypeComponent,
	seatMatrixObj,
	yearObj,
}) => {
	const [instituteType, setInstituteType] = useState("IIT");
	const [page, setPage] = useState(1);
	const [searchWord, setSearchWord] = useState("");
	const [orderBy, setorderBy] = useState("");
	const [order, setorder] = useState("asc");
	const [tabValue, setTabValue] = useState(2022);
	const [seatMatrixYear, setSeatMatrixYear] = useState([]);

	useEffect(() => {
		const payload = {
			choice: "both",
		};
		instituteTypeComponent(payload);
	}, []);

	useEffect(() => {
		let payload = {
			page,
			search: searchWord,
			orderField: orderBy,
			orderType: order,
			typeList: instituteType,
		};
		if (tabValue !== "increase") {
			payload["year"] = tabValue;
		} else {
			payload["increase"] = true;
		}
		seatMatrixComponent(payload);
	}, [instituteType, page, searchWord, orderBy, order, tabValue]);

	useEffect(() => {
		if (yearObj.length > 0) {
			let data = [];
			yearObj.forEach((year) => {
				if (year >= 2019) {
					data.push({
						id: year,
						label: `JoSAA ${year}`,
					});
				}
			});
			data.reverse();
			data.push({
				id: 2022,
				label: `JoSAA 2022`,
			});
			data.push({
				id: "increase",
				// label: `Seat change from ${yearObj[yearObj.length - 2]}-${
				// 	yearObj[yearObj.length - 1]
				// }`
				label: `Seat change from 2021-2022`,
			});
			setSeatMatrixYear(data);
		}
	}, [yearObj]);

	const onPageChange = (event, value) => {
		setPage(value);
	};

	const createSortHandler = (property) => (event) => {
		const isAsc = orderBy === property && order === "asc";
		setorder(isAsc ? "desc" : "asc");
		setorderBy(property);
		setPage(1);
	};

	const handleChange = (event, newValue) => {
		setTabValue(newValue);
		setPage(1);
	};

	const handleSeatChange = () => {
		setTabValue("increase");
		setPage(1);
	};

	return (
		<div className='list-container'>
			<Header heading={"Seat Matrix"} />
			<div className='extra-container'>
				<Box
					sx={{ borderBottom: 1, borderColor: "divider" }}
					className='tabs-container'
				>
					<Tabs
						value={tabValue}
						onChange={handleChange}
						className='tabs'
						variant='scrollable'
						scrollButtons='auto'
					>
						{seatMatrixYear.map((year) => (
							<Tab
								label={year.label}
								className={`tab ${year.id === "increase" && "increase-tab"}`}
								key={year.id}
								value={year.id}
							/>
						))}
					</Tabs>
					<Button
						className={`increase-tab-button ${
							tabValue === "increase" ? "selected" : ""
						}`}
						onClick={handleSeatChange}
					>
						{/* Seat change from {yearObj[1]}-{yearObj[0]} */}
						Seat change from 2021-2022
					</Button>
				</Box>
			</div>
			<div className='table-container'>
				<div className='filters between'>
					{!instituteTypeObj.loading && !instituteTypeObj.error ? (
						<ClickableChips
							chipList={instituteTypeObj.data}
							defaultSelected={"IIT"}
							setChipList={setInstituteType}
							setPage={setPage}
						/>
					) : (
						<CircularProgress />
					)}
					{seatMatrixObj.search && (
						<SearchBar
							labelText={"Search by any keyword"}
							defaultWord={searchWord}
							setSearchKey={setSearchWord}
							setPage={setPage}
						/>
					)}
				</div>
				{seatMatrixObj.loading ? (
					<CircularProgress />
				) : (
					!seatMatrixObj.error &&
					seatMatrixObj.data.length !== 0 &&
					instituteType !== "" && (
						<>
							<TableContainer component={Paper}>
								<Table sx={{ minWidth: 650 }}>
									<TableHead>
										<TableRow>
											{seatMatrixHeader.map((header, index) => (
												<TableCell
													sortDirection={
														header.order
															? orderBy === header.id
																? order
																: false
															: false
													}
													key={index}
												>
													{header.order ? (
														<TableSortLabel
															active={orderBy === header.id}
															direction={orderBy === header.id ? order : "asc"}
															onClick={createSortHandler(header.id)}
														>
															{header.label}
															{orderBy === header.id ? (
																<Box component='span' sx={visuallyHidden}>
																	{order === "desc"
																		? "sorted descending"
																		: "sorted ascending"}
																</Box>
															) : null}
														</TableSortLabel>
													) : (
														header.label
													)}
												</TableCell>
											))}
										</TableRow>
									</TableHead>
									<TableBody>
										{seatMatrixObj.data.map((row) => (
											<TableRow
												sx={{
													"&:last-child td, &:last-child th": { border: 0 },
												}}
												key={row.id}
											>
												<TableCell className='noto-sans'>
													{row.institute_detail.full_name}
												</TableCell>
												<TableCell className='noto-sans'>
													{row.branch_full_detail.full_name}
												</TableCell>
												<TableCell className='noto-sans'>
													{row.branch_full_detail.duration}
												</TableCell>
												<TableCell className='noto-sans'>
													{row.branch_full_detail.degree}
												</TableCell>
												<TableCell className='noto-sans'>
													{row.seat_pool}
												</TableCell>
												<TableCell className='noto-sans'>
													{row.category}
												</TableCell>
												<TableCell className='noto-sans'>{row.quota}</TableCell>
												<TableCell className='noto-sans'>{row.seats}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
							{seatMatrixObj.total_pages > 1 && (
								<CustomPagination
									totalPage={seatMatrixObj.total_pages}
									onChange={onPageChange}
									page={page}
								/>
							)}
						</>
					)
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		instituteTypeObj: makeSelectInstituteType(state),
		seatMatrixObj: makeSelectSeatMatrix(state),
		yearObj: makeSelectYear(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		seatMatrixComponent: (payload) => dispatch(fetchSeatMatrix(payload)),
		instituteTypeComponent: (payload) => dispatch(fetchInstituteType(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatMatrix);
