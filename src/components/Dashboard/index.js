import React, { useEffect } from "react";
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
import { featuresCard } from "./constants";
import extra from "../../images/extra.png";
import { fetchNewUpdates } from "../../store/actions/dashboard";
import { connect } from "react-redux";
import { makeSelectNewUpdate } from "../../store/selectors/dashboard";

const Dashboard = ({ newUpdateComponent, newUpdate }) => {
  useEffect(() => {
    newUpdateComponent();
  }, []);

  useEffect(() => {
    console.log(newUpdate);
  }, [newUpdate]);

  return (
    <div className="dashboard-container">
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
          {newUpdate.loading ? (
            <div className="progress">
              <CircularProgress />
            </div>
          ) : (
            <div className="description">
              {!newUpdate.error ? (
                newUpdate.data.length > 0 && (
                  <marquee>{newUpdate.data[0].text}</marquee>
                )
              ) : (
                <></>
              )}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

Dashboard.propTypes = {
  newUpdateComponent: PropTypes.func,
  newUpdate: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    newUpdate: makeSelectNewUpdate(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newUpdateComponent: () => dispatch(fetchNewUpdates()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
