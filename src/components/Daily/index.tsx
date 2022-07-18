import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

type DailyProps = {
  feels_like: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
};

function Daily({
  feels_like,
  temp_min,
  temp_max,
  sea_level,
  grnd_level,
  humidity,
}: DailyProps) {
  return (
    
    <Grid container spacing={3} sx={{p:10 }}>
  <Grid item xs>
    <Paper sx={{p:2}} elevation={6}>
      <Typography fontWeight="fontWeightMedium">
    Feels like: <br></br>{feels_like} °C
    </Typography>
  </Paper> 
  </Grid>
  
  <Grid item xs >
  <Paper sx={{p:2}} elevation={6}>
  <Typography fontWeight="fontWeightMedium">
  Humidity: <br></br>{humidity} %
  </Typography>
  </Paper>
  </Grid>

  <Grid item xs >
  <Paper sx={{p:2}} elevation={6}>
      <Typography fontWeight="fontWeightMedium">
  Temp. min: <br></br>{temp_min} °C
  </Typography>
  </Paper>
  </Grid>

   
  <Grid item xs >
  <Paper sx={{p:2}} elevation={6}> 
<Typography fontWeight="fontWeightMedium">
  Temp. max:<br></br>{temp_max} °C
  </Typography>
  </Paper>
  </Grid>


  <Grid item xs >
  <Paper sx={{p:2}} elevation={6}>
<Typography fontWeight="fontWeightMedium">
  Sea level: <br></br>{sea_level}m
  </Typography>
  </Paper>
  </Grid>

  <Grid item xs >
  <Paper sx={{p:2}} elevation={6}>
<Typography fontWeight="fontWeightMedium">
  Ground level: <br></br>{grnd_level}m
  </Typography>
  </Paper>
  </Grid>

  
 
</Grid>
 
       
      
      
      
      
      
    
  );
}

export default Daily;
