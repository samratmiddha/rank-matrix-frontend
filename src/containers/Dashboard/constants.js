import extra from "../../images/extra.png";

export const featuresCard = [
  {
    title: "Test Your JoSAA Choices",
    image: { extra },
    link: "A",
  },
  {
    title: "SOCE Prediction",
    image: { extra },
    link: "A",
  },
  {
    title: "Seat Matrix",
    image: { extra },
    link: "A",
  },
  {
    title: "Opening and Closing Ranks",
    image: { extra },
    link: "A",
  },
  {
    title: "List of Colleges",
    image: { extra },
    link: "/colleges_list",
  },
];

export const howToUse = [
  {
    rule: "For prediction based on previous years' opening as well as closing rank click 'SOCE Prediction' and then 'Default Prediction'.",
    ruleDescription: [],
  },
  {
    rule: "Fill all the desired details and click 'Submit'",
    ruleDescription: [],
  },
  {
    rule: "Click 'Click to Get Prediction' on next page",
    ruleDescription: [],
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
