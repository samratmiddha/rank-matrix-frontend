import React, { useEffect, useState } from "react";
import {
	CircularProgress,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Link,
	TableSortLabel,
	Box,
	IconButton,
} from "@mui/material";
import { connect } from "react-redux";
import { Header } from "../../../components/header";
import { CustomPagination } from "../../../components/pagination";
import { fetchInstituteList } from "../../../store/actions/list";
import { makeSelectInstituteType } from "../../../store/selectors/form";
import { makeSelectInstituteList } from "../../../store/selectors/list";
import { SearchBar } from "../../../components/search";
import { visuallyHidden } from "@mui/utils";
import { instituteListHeader } from "../../../constants/tableHeader";
import "../../list.scss";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { fetchInstituteType } from "../../../store/actions/form";
import { ClickableChips } from "../../../components/chips";

const CollegeList = ({
	instituteListComponent,
	instituteTypeObj,
	instituteTypeComponent,
	instituteListObj,
}) => {
	const [institute, setInstitute] = useState("IIT");
	const [page, setPage] = useState(1);
	const [nirfLatestYear, setNirfLatestYear] = useState(2021);
	const [searchWord, setSearchWord] = useState("");
	const [orderBy, setorderBy] = useState("");
	const [order, setorder] = useState("asc");
	const [nirfRankNumber, setnirfRankNumber] = useState(0);

	useEffect(() => {
		const payload = {
			choice: "both",
		};
		instituteTypeComponent(payload);
	}, []);

	useEffect(() => {
		const payload = {
			page,
			search: searchWord,
			orderField: orderBy,
			orderType: order,
			typeList: institute,
		};
		instituteListComponent(payload);
	}, [institute, page, searchWord, orderBy, order]);

	useEffect(() => {
		if (instituteListObj.data.length > 0) {
			setNirfLatestYear(instituteListObj.data[0].nirf_year);
		}
	}, [instituteListObj]);

	const onPageChange = (event, value) => {
		setPage(value);
	};

	const createSortHandler = (property) => (event) => {
		const isAsc = orderBy === property && order === "asc";
		setorder(isAsc ? "desc" : "asc");
		setorderBy(property);
		setPage(1);
	};

	const previous_nirf = () => {
		setnirfRankNumber(nirfRankNumber - 1);
	};

	const next_nirf = () => {
		setnirfRankNumber(nirfRankNumber + 1);
	};

	return (
		<div className='list-container'>
			<Header heading={"Participating Colleges"} />
			<div className='table-container'>
				<div className='filters between'>
					{!instituteTypeObj.loading && !instituteTypeObj.error ? (
						<ClickableChips
							chipList={instituteTypeObj.data}
							defaultSelected={"IIT"}
							setChipList={setInstitute}
							setPage={setPage}
						/>
					) : (
						<CircularProgress />
					)}
					{instituteListObj.search && (
						<SearchBar
							labelText={"Search by any keyword"}
							defaultWord={searchWord}
							setSearchKey={setSearchWord}
							setPage={setPage}
						/>
					)}
				</div>
				{instituteListObj.loading ? (
					<CircularProgress />
				) : (
					!instituteListObj.error &&
					instituteListObj.data.length !== 0 &&
					institute != "" && (
						<>
							<TableContainer component={Paper}>
								<Table sx={{ minWidth: 650 }}>
									<TableHead>
										<TableRow>
											{instituteListHeader.map((header, index) => (
												<TableCell
													sortDirection={
														header.order
															? orderBy === header.id
																? order
																: false
															: false
													}
													key={index}
													align={header.alignment}
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
										{instituteListObj.data.map((row) => (
											<TableRow
												sx={{
													"&:last-child td, &:last-child th": { border: 0 },
												}}
												key={row.id}
											>
												<TableCell className='noto-sans' align='left'>
													{row.code}
												</TableCell>
												<TableCell className='noto-sans' align='left'>
													{row.name}
												</TableCell>
												<TableCell className='noto-sans' align='left'>
													{row.state}
												</TableCell>
												<TableCell
													align='center'
													className='nirf_column noto-sans'
												>
													<div className='nirf_column'>
														{nirfRankNumber > 0 && (
															<IconButton onClick={previous_nirf}>
																<ArrowBackIos />
															</IconButton>
														)}
														<div className='nirf_column'>
															<div className='nirf_label'>
																{nirfRankNumber == 0
																	? row.nirf_1 == 10000
																		? "-"
																		: row.nirf_1 > 250
																		? String(row.nirf_1) +
																		  "-" +
																		  String(row.nirf_1 + 49)
																		: row.nirf_1
																	: nirfRankNumber == 1
																	? row.nirf_2 == 10000
																		? "-"
																		: row.nirf_2 > 250
																		? String(row.nirf_2) +
																		  "-" +
																		  String(row.nirf_2 + 49)
																		: row.nirf_2
																	: row.nirf_3 == 10000
																	? "-"
																	: row.nirf_3 > 250
																	? String(row.nirf_3) +
																	  "-" +
																	  String(row.nirf_3 + 49)
																	: row.nirf_3}
															</div>
															in {nirfLatestYear - nirfRankNumber}
														</div>
														{nirfRankNumber < 2 && (
															<IconButton onClick={next_nirf}>
																<ArrowForwardIos />
															</IconButton>
														)}
													</div>
												</TableCell>
												<TableCell className='noto-sans' align='left'>
													<Link href={row.website} target='_blank'>
														{row.website}
													</Link>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
							{instituteListObj.total_pages > 1 && (
								<CustomPagination
									totalPage={instituteListObj.total_pages}
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
		instituteListObj: makeSelectInstituteList(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		instituteListComponent: (payload) => dispatch(fetchInstituteList(payload)),
		instituteTypeComponent: (payload) => dispatch(fetchInstituteType(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CollegeList);
