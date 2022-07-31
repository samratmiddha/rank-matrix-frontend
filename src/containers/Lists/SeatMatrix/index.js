import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { visuallyHidden } from "@mui/utils";
import {
	Box,
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

const SeatMatrix = ({
	seatMatrixComponent,
	instituteTypeObj,
	seatMatrixObj,
	yearObj,
}) => {
	const [instituteType, setInstituteType] = useState("IIT");
	const [page, setPage] = useState(1);
	const [searchWord, setSearchWord] = useState("");
	const [orderBy, setorderBy] = useState("");
	const [order, setorder] = useState("asc");
	const [tabValue, setTabValue] = useState(2021);
	const [seatMatrixYear, setSeatMatrixYear] = useState([]);

	useEffect(() => {
		let payload = {
			instituteType,
			page,
			search: searchWord,
			orderField: orderBy,
			orderType: order,
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
				id: "increase",
				label: `Change in seats from year ${yearObj[yearObj.length - 2]} to ${
					yearObj[yearObj.length - 1]
				}`,
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
	};

	const handleChange = (event, newValue) => {
		setTabValue(newValue);
	};

	return (
		<div className='list-container'>
			<Header
				heading={"Seat Matrix"}
				dropDownList={instituteTypeObj}
				setValue={setInstituteType}
			/>
			<div className='extra-container'>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={tabValue}
						onChange={handleChange}
						textColor='black'
						indicatorColor='secondary'
						aria-label='basic tabs example'
						variant='scrollable'
						scrollButtons='auto'
					>
						{seatMatrixYear.map((year) => (
							<Tab label={year.label} key={year.id} value={year.id} />
						))}
					</Tabs>
				</Box>
			</div>
			<div className='table-container'>
				{seatMatrixObj.search && (
					<div className='filters'>
						<SearchBar
							labelText={"Search by any keyword"}
							defaultWord={searchWord}
							setSearchKey={setSearchWord}
						/>
					</div>
				)}
				{seatMatrixObj.loading ? (
					<CircularProgress />
				) : (
					!seatMatrixObj.error &&
					seatMatrixObj.data.length !== 0 && (
						<>
							<TableContainer component={Paper}>
								<Table sx={{ minWidth: 650 }} aria-label='simple table'>
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
												<TableCell>{row.institute_detail.full_name}</TableCell>
												<TableCell>
													{row.branch_full_detail.full_name}
												</TableCell>
												<TableCell>{row.branch_full_detail.duration}</TableCell>
												<TableCell>{row.branch_full_detail.degree}</TableCell>
												<TableCell>{row.seat_pool}</TableCell>
												<TableCell>{row.category}</TableCell>
												<TableCell>{row.quota}</TableCell>
												<TableCell>{row.seats}</TableCell>
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatMatrix);
