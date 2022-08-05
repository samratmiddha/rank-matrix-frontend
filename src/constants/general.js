import { createTheme } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
export const websiteName = "GoSOCE";
export const fileName = `${websiteName}_your_choices`;

export const howToUse = [
	{
		rule: "For prediction based on previous years' opening as well as closing rank click 'SOCE Prediction' and then 'Default Prediction'.",
	},
	{
		rule: "Fill all the desired details and click 'Submit'",
	},
	{
		rule: "Click 'Click to Get Prediction' on next page",
	},
	{
		rule: "Now it will highlight all previous years' cutoff in different colour. Your prediction based on colour coding is as follows:",
		ruleDescription: [
			{
				rule: "Very High probability for getting the branch/ college highlighted in GREEN colour even in case cut-off of current year is decreases from the previous year's cut-off by % figure filled by you under 'Variation in CutOff Percentage(%)'",
			},
			{
				rule: "Very Low probability for getting the branch/ college highlighted in RED colour as your rank is higher than the cut-off of previous year by % figure filled by you under 'Variation in CutOff Percentage(%)'",
			},
			{
				rule: "Probable to get the branch/ college highlighted in ORANGE colour in case cut-off of current year increases from the previous year's cut-off by % figure filled by you under 'Variation in CutOff Percentage(%)'",
			},
			{
				rule: "Probable to get the branch/ college highlighted in YELLOW colour even in case cut-off of current year decreases from the previous year's cut-off by % figure filled by you under 'Variation in CutOff Percentage(%)'",
			},
		],
	},
];

export const customtheme = createTheme({
	palette: {
		primary: {
			main: "#6096FC",
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#6096fc",
			light: "#6096fc",
			contrastText: "#ffffff",
		},
		black: {
			main: "#000000",
			contrastText: "#ffffff",
			light: "#000000",
		},
		white: {
			main: "#ffffff",
			contrastText: "#000000",
			light: "#ffffff",
		},
		chips: {
			main: "#D4E3FF",
			contrastText: "#6096FC",
			light: "#6096FC",
		},
	},
	breakpoints: {
		values: {
			xs: 450,
			sm: 600,
			md: 1000,
			lg: 1200,
			xl: 1536,
		},
	},
});

export const LightTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: "#ffffff",
		color: "#6096fc",
		boxShadow: theme.shadows[1],
		fontSize: 15,
	},
}));

export const apiURL = "http://localhost:8000";

export const toastDuration = 2000;

export const optionsList = ["Opening Rank", "Closing Rank"];

export const choicesList = [
	{
		value: "mains",
		title: "Only JEE Mains",
	},
	{
		value: "advance",
		title: "Only JEE Advance",
	},
	{
		value: "both",
		title: "Both JEE Mains and JEE Advance",
	},
];

export const PredictionList = [
	{
		value: "all_all",
		title: "All Branches in All Colleges",
		formTitle: "Details for all branches from all colleges",
		formData: [
			{
				title: "Institute Type",
				type: "select",
				list: "institute_type",
				name: "institute_type",
			},
			{
				title: "Category",
				type: "select",
				list: "category",
				name: "category",
			},
			{
				title: "Variation in Cutoff(%)",
				type: "number",
				name: "cutoff",
			},
			{
				title: "Seat Pool",
				type: "select",
				list: "seatPool",
				name: "seatPool",
			},
			{
				title: "Quota",
				type: "select",
				list: "quota",
				name: "quota",
			},
			{
				title: "Rank",
				type: "number",
				name: "rank",
			},
			{
				title: "Opening or Closing Ranks",
				type: "select",
				list: "option",
				name: "option",
			},
			{
				title: "Year",
				type: "select",
				list: "year",
				name: "year",
			},
			{
				title: "Round",
				type: "select",
				list: "round",
				name: "round",
			},
		],
	},
	{
		value: "all_one",
		title: "All Branches in One College",
		formTitle: "Details for all branches in a particluar college",
		formData: [
			{
				title: "Institute Type",
				type: "select",
				list: "institute_type",
				name: "institute_type",
			},
			{
				title: "Category",
				type: "select",
				list: "category",
				name: "category",
			},
			{
				title: "Variation in Cutoff(%)",
				type: "number",
				name: "cutoff",
			},
			{
				title: "Seat Pool",
				type: "select",
				list: "seatPool",
				name: "seatPool",
			},
			{
				title: "Quota",
				type: "select",
				list: "quota",
				name: "quota",
			},
			{
				title: "Rank",
				type: "number",
				name: "rank",
			},
			{
				title: "Institute Name",
				type: "select",
				list: "institute_list",
				name: "institute_list",
			},
		],
	},
	{
		value: "one_all",
		title: "One Branch in All Colleges",
		formTitle: "Details for one branch in all colleges",
		formData: [
			{
				title: "Institute Type",
				type: "select",
				list: "institute_type",
				name: "institute_type",
			},
			{
				title: "Category",
				type: "select",
				list: "category",
				name: "category",
			},
			{
				title: "Variation in Cutoff(%)",
				type: "number",
				name: "cutoff",
			},
			{
				title: "Seat Pool",
				type: "select",
				list: "seatPool",
				name: "seatPool",
			},
			{
				title: "Quota",
				type: "select",
				list: "quota",
				name: "quota",
			},
			{
				title: "Rank",
				type: "number",
				name: "rank",
			},
			{
				title: "Branch Name",
				type: "select",
				list: "branch_list",
				name: "branch_list",
			},
		],
	},
	{
		value: "one_one",
		title: "One Branch in One College",
		formTitle: "Details for one branch from a particular college",
		formData: [
			{
				title: "Institute Type",
				type: "select",
				list: "institute_type",
				name: "institute_type",
			},
			{
				title: "Category",
				type: "select",
				list: "category",
				name: "category",
			},
			{
				title: "Variation in Cutoff(%)",
				type: "number",
				name: "cutoff",
			},
			{
				title: "Seat Pool",
				type: "select",
				list: "seatPool",
				name: "seatPool",
			},
			{
				title: "Quota",
				type: "select",
				list: "quota",
				name: "quota",
			},
			{
				title: "Rank",
				type: "number",
				name: "rank",
			},
			{
				title: "Institute Name",
				type: "select",
				list: "institute_list",
				name: "institute_list",
			},
			{
				title: "Branch Name",
				type: "select",
				list: "branch_list",
				name: "branch_list",
			},
		],
	},
];

export const TestYourChoice = {
	title: "Test Your JoSAA Choices",
	formTitle: "Details for testing your choices",
	formData: [
		{
			title: "Choices option",
			type: "select",
			list: "choice_option",
			name: "choice_option",
		},
		{
			title: "Variation in Cutoff(%)",
			type: "number",
			name: "cutoff",
		},
		{
			title: "Rank",
			type: "number",
			name: "rank",
		},
		{
			title: "Year",
			type: "select",
			list: "year",
			name: "year",
		},
		{
			title: "Round",
			type: "select",
			list: "round",
			name: "round",
		},
	],
};

export const AddChoice = {
	title: "Add your choice to test your choices",
	formTitle: "Details for testing your choices",
	formData: [
		{
			title: "Institute Type",
			type: "select",
			list: "institute_type",
			name: "institute_type",
		},
		{
			title: "Category",
			type: "select",
			list: "category",
			name: "category",
		},
		{
			title: "Seat Pool",
			type: "select",
			list: "seatPool",
			name: "seatPool",
		},
		{
			title: "Quota",
			type: "select",
			list: "quota",
			name: "quota",
		},
		{
			title: "Institute Name",
			type: "select",
			list: "institute_list",
			name: "institute_list",
		},
		{
			title: "Branch Name",
			type: "select",
			list: "branch_list",
			name: "branch_list",
		},
	],
};
