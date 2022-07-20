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

const CollegeList = ({
  instituteListComponent,
  instituteTypeObj,
  instituteListObj,
}) => {
  const [institute, setInstitute] = useState("IIT");
  const [page, setPage] = useState(1);
  const [nirfLatestYear, setNirfLatestYear] = useState(2021);
  const [searchWord, setSearchWord] = useState("");
  const [orderBy, setorderBy] = useState("");
  const [order, setorder] = useState("asc");

  useEffect(() => {
    const payload = {
      instituteType: institute,
      page,
      search: searchWord,
      orderField: orderBy,
      orderType: order,
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
  };

  return (
    <div className="list-container">
      <Header
        heading={"List of Colleges"}
        dropDownList={instituteTypeObj}
        setValue={setInstitute}
      />
      <div className="table-container">
        {instituteListObj.search && (
          <div className="filters">
            <SearchBar
              labelText={"Search by any keyword"}
              defaultWord={searchWord}
              setSearchKey={setSearchWord}
            />
          </div>
        )}
        {instituteListObj.loading ? (
          <CircularProgress />
        ) : (
          !instituteListObj.error &&
          instituteListObj.data.length != 0 && (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                        >
                          {header.order ? (
                            <TableSortLabel
                              active={orderBy === header.id}
                              direction={orderBy === header.id ? order : "asc"}
                              onClick={createSortHandler(header.id)}
                            >
                              {header.label}
                              {header.rank >= 0 &&
                                ` (${nirfLatestYear - header.rank})`}
                              {orderBy === header.id ? (
                                <Box component="span" sx={visuallyHidden}>
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
                        <TableCell>{row.code}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.state}</TableCell>
                        <TableCell>{row.nirf_3}</TableCell>
                        <TableCell>{row.nirf_2}</TableCell>
                        <TableCell>{row.nirf_1}</TableCell>
                        <TableCell>
                          <Link href={row.website} target="_blank">
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollegeList);
