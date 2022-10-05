import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Header } from "../../../components/header";
import { SearchBar } from "../../../components/search";
import {
	makeSelectInstituteType,
	makeSelectRound,
	makeSelectYear,
} from "../../../store/selectors/form";
import { visuallyHidden } from "@mui/utils";
import {
	Box,
	CircularProgress,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel,
} from "@mui/material";
import { rankHeader } from "../../../constants/tableHeader";
import { CustomPagination } from "../../../components/pagination";
import { makeSelectRankList } from "../../../store/selectors/list";
import { fetchRankList } from "../../../store/actions/list";
import { YearRoundSelect } from "../../../components/selectDialog";
import { fetchInstituteType, fetchRound } from "../../../store/actions/form";
import { ClickableChips } from "../../../components/chips";
import { TableInfo } from "../../../components/tableHeader";

const Ranks = ({
	instituteTypeObj,
	instituteTypeComponent,
	rankListObj,
	rankListComponent,
	yearObj,
	roundListComponent,
	roundObj,
}) => {
	const [instituteType, setInstituteType] = useState("IIT");
	const [page, setPage] = useState(1);
	const [searchWord, setSearchWord] = useState("");
	const [orderBy, setorderBy] = useState("");
	const [order, setorder] = useState("asc");
	const [changeYear, setchangeYear] = useState("");
	const [changeRound, setchangeRound] = useState("");
	const [changeData, setchangeData] = useState(false);
	const [year, setyear] = useState(2022);
	const [round, setround] = useState(1);

	useEffect(() => {
		const payload = {
			choice: "both",
		};
		instituteTypeComponent(payload);
	}, []);

	useEffect(() => {
		if (yearObj.length > 0) {
			setyear(yearObj[0]);
		}
	}, [yearObj]);

	useEffect(() => {
		const payload = {
			typeList: instituteType,
			page,
			search: searchWord,
			orderField: orderBy,
			orderType: order,
			year: year,
			round: round,
		};
		rankListComponent(payload);
	}, [instituteType, page, searchWord, orderBy, order, year]);

	useEffect(() => {
		if (changeData) {
			const payload = {
				typeList: instituteType,
				page,
				search: searchWord,
				orderField: orderBy,
				orderType: order,
				year: changeYear,
				round: changeRound,
			};
			rankListComponent(payload);
			setchangeData(false);
			setchangeYear("");
			setyear(changeYear);
			setround(changeRound);
		}
	}, [changeData]);

	useEffect(() => {
		if (changeYear !== "") {
			const payload = {
				year: changeYear,
			};
			roundListComponent(payload);
		}
	}, [changeYear]);

	const onPageChange = (event, value) => {
		setPage(value);
	};

	const createSortHandler = (property) => (event) => {
		const isAsc = orderBy === property && order === "asc";
		setorder(isAsc ? "desc" : "asc");
		setorderBy(property);
		setPage(1);
	};

	return (
		<div className='list-container'>
			<Header heading={"Opening and Closing Rank"} />
			<div className='table-container'>
				<div className='filters between'>
					<div className='chips-and-button'>
						{rankListObj.search && (
							<YearRoundSelect
								buttonText='Change Year and Round'
								formTitle='Select Year and Round'
								firstSelectLabel='Year'
								secondSelectLabel='Round'
								firstSelectList={yearObj}
								firstSelectOnChange={setchangeYear}
								firstSelectValue={changeYear}
								secondSelectList={roundObj}
								secondSelectOnChange={setchangeRound}
								secondSelectValue={changeRound}
								okClick={setchangeData}
								setPage={setPage}
							/>
						)}
						{!instituteTypeObj.loading &&
							!instituteTypeObj.error &&
							instituteTypeObj.data.length > 0 && (
								<ClickableChips
									chipList={instituteTypeObj.data}
									defaultSelected={"IIT"}
									setChipList={setInstituteType}
									setPage={setPage}
								/>
							)}
					</div>
					{rankListObj.search && (
						<>
							<TableInfo
								heading={`JoSAA ${year} Round ${round}`}
								className='non-mobile'
							/>
							<SearchBar
								labelText={"Search by any keyword"}
								defaultWord={searchWord}
								setSearchKey={setSearchWord}
								setPage={setPage}
							/>
							<TableInfo
								heading={`JoSAA ${year} Round ${round}`}
								className='mobile'
							/>
						</>
					)}
				</div>
				{rankListObj.loading ? (
					<CircularProgress />
				) : (
					!rankListObj.error &&
					rankListObj.data.length !== 0 &&
					instituteType !== "" && (
						<>
							<TableContainer component={Paper}>
								<Table sx={{ minWidth: 650 }}>
									<TableHead>
										<TableRow>
											{rankHeader.map((header, index) => (
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
										{rankListObj.data.map((row) => (
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
													{row.branch_detail.full_name}
												</TableCell>
												<TableCell className='noto-sans'>
													{row.category}
												</TableCell>
												<TableCell className='noto-sans'>{row.quota}</TableCell>
												<TableCell className='noto-sans'>
													{row.seat_pool}
												</TableCell>
												<TableCell className='noto-sans'>
													{row.opening_rank}
												</TableCell>
												<TableCell className='noto-sans'>
													{row.closing_rank}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
							{rankListObj.total_pages > 1 && (
								<CustomPagination
									totalPage={rankListObj.total_pages}
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
		rankListObj: makeSelectRankList(state),
		yearObj: makeSelectYear(state),
		roundObj: makeSelectRound(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		rankListComponent: (payload) => dispatch(fetchRankList(payload)),
		roundListComponent: (payload) => dispatch(fetchRound(payload)),
		instituteTypeComponent: (payload) => dispatch(fetchInstituteType(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranks);
