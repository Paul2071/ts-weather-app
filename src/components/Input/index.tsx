import {  Grid, TextField, Button } from "@mui/material";
import React from "react";

type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
 
};


function Input({onChange, onClick, }: InputProps) {
  return (
  
<Grid>
 <TextField
  sx={{mt:5}} 
  label="Enter City"
  onChange={onChange}   />
 <Button 
  sx={{mt:6, ml:1, mr: 1}}
  variant="contained" 
  onClick={onClick}  
  color="secondary">
  SEARCH
 </Button> 
</Grid>
  
 
  )
}

export default Input;
