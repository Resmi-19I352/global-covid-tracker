import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
  if (!confirmed) {
    return "Loading...";
  }
  const active = confirmed["value"] - recovered["value"] - deaths["value"];
  let cardDetails = [
    {
      style: styles.infected,
      text: "Infected",
      value: confirmed.value,
      
    },
    {
      style: styles.recovered,
      text: "Recovered",
      value: recovered.value,
     
    },
    {
      style: styles.deaths,
      text: "Deaths",
      value: deaths.value,
      
    },
    {
      style: styles.active,
      text: "Active",
      value: active,
      
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={50} justify="center">
        {cardDetails.map((detail, index) => (
          <Grid
            item
            component={Card}
            xs={45}
            md={20}
            className={cx(styles.Card, detail.style)}
            key={index}
            style={{ margin: "0px 25px", padding: "14px" }}
          >
            <CardContent>
              <Typography color="black" gutterBottom>
                <b><i>{detail.text}</i></b>
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={detail.value}
                  duration={3}
                  separator=","
                />
                
              </Typography>
              <br/>
              <Typography color="red">Last Updated at : </Typography>
              <Typography color="textPrimary" variant="body2">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography color="textPrimary" variant="body2">
                {new Date(lastUpdate).toLocaleTimeString()}
              </Typography>
              <Typography variant="body2">{detail.bottomText}</Typography>
             
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
