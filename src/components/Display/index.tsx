import { Paper, Grid, Typography } from "@mui/material";
import React from "react";
import CloudTwoToneIcon from "@mui/icons-material/CloudTwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import ThunderstormTwoToneIcon from "@mui/icons-material/ThunderstormTwoTone";


type DisplayProps = {
  name: string;
  population: number;
  temperature: number;
  weather: string;
 
};





function Display({ population, temperature, weather, name  }: DisplayProps) {
  return (
    <Paper sx={{ p: 10, mt: 10 }} elevation={6}>
      <Typography component={"h2"} fontWeight = "fontWeightBold">
        <Grid item p={1} >
          Name: {name}
        </Grid>
        <Grid item p={1}>
          Population: {population}
        </Grid>
        <Grid item p={1}>
          Temperature: {temperature} °C
        </Grid>
        <Grid item p={1}>
          Weather: {weather}
        </Grid>
      </Typography>
      <br></br>
      <Grid
        container
        display="flex"
        flexDirection="row"
        direction-column="true"
        justifyContent="center"
        alignItems="center"
      >
        <Grid sx={{p:1}} >
          <WbSunnyTwoToneIcon color= "disabled" fontSize="large"  />
        </Grid>
        <Grid sx={{p:1}}>
          <CloudTwoToneIcon color="disabled" fontSize="large" />
        </Grid>
        <Grid sx={{p:1}}>
          <ThunderstormTwoToneIcon color="disabled" fontSize="large" />
        </Grid>
      </Grid>
  
    </Paper>
  );
}

export default Display;
