import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { featuresCard, howToUse } from "./constants";
import extra from "../../images/extra.png";
import {
  fetchNewUpdates,
  fetchRecentUpdates,
} from "../../store/actions/dashboard";
import { connect } from "react-redux";
import {
  makeSelectNewUpdate,
  makeSelectRecentUpdate,
} from "../../store/selectors/dashboard";
import useOnScreen from "../../constants/hooks";


const Dashboard = ({
  newUpdateComponent,
  recentUpdateComponent,
  newUpdateObject,
  recentUpdateObject,
}) => {
  useEffect(() => {
    newUpdateComponent();
    recentUpdateComponent();
  }, []);

  const howToUseRef = useRef(null);
  const featuresRef = useRef(null);
  const howToUseVisible = useOnScreen(howToUseRef);
  // const featuresVisible = useOnScreen(featuresRef);
  useEffect(() => {
    console.log(howToUseVisible);
    if (howToUseVisible) {
      howToUseRef.current.scrollTop = 0;
    }
    // console.log()
  }, [howToUseVisible]);

  return (
    <div>
      <div className="dashboard-container" ref={featuresRef}>
        <Container>
          <Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {featuresCard.map((card, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {card.title}
                      </Typography>
                    </CardContent>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="160"
                        alt={card.title}
                        image={extra}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Grid container spacing={2} className="new-update">
          <Grid item xs={2}>
            <div className="title">New Updates!</div>
          </Grid>
          <Grid item xs={10}>
            {newUpdateObject.loading ? (
              <div className="progress">
                <CircularProgress />
              </div>
            ) : (
              <div className="description">
                {!newUpdateObject.error ? (
                  newUpdateObject.data.length > 0 && (
                    <marquee>{newUpdateObject.data[0].text}</marquee>
                  )
                ) : (
                  <></>
                )}
              </div>
            )}
          </Grid>
        </Grid>
      </div>
      <div className="how-to-use" ref={howToUseRef}>
        <Container>
          <Grid
            container
            columnSpacing={{ xs: 4, md: 8 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={5} md={7}>
              <Box>
                <Typography gutterBottom variant="h5" component="div">
                  How to Use
                </Typography>
                <div className="content">
                  <Box>
                    <ul>
                      {howToUse.map((step, index) => (
                        <>
                          <li key={index}>{step.rule}</li>
                          {step.ruleDescription.length > 0 && (
                            <ul>
                              {step.ruleDescription.map((substep, subindex) => (
                                <li key={subindex}>{substep.rule}</li>
                              ))}
                            </ul>
                          )}
                        </>
                      ))}
                    </ul>
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={5}>
              <Box>
                <Typography gutterBottom variant="h5" component="div">
                  Recent Updates
                </Typography>
                <div className="content">
                  <Box>
                    {recentUpdateObject.loading ? (
                      <CircularProgress />
                    ) : !recentUpdateObject.error ? (
                      recentUpdateObject.data.length > 0 && 
                      <ul>
                        {recentUpdateObject.data.map((update, index) => (
                          <li key={index}>{update.text}</li>
                        ))}
                      </ul>
                    ) : (
                      <></>
                    )}
                  </Box>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  newUpdateComponent: PropTypes.func,
  recentUpdateComponent: PropTypes.func,
  newUpdateObject: PropTypes.object,
  recentUpdateObject: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    newUpdateObject: makeSelectNewUpdate(state),
    recentUpdateObject: makeSelectRecentUpdate(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newUpdateComponent: () => dispatch(fetchNewUpdates()),
    recentUpdateComponent: () => dispatch(fetchRecentUpdates()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
