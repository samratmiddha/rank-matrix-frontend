import React from "react";
import "./index.scss";

export const TableInfo = ({ heading, className }) => {
	return <div className={`table-info-heading ${className}`}>{heading}</div>;
};
