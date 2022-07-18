import "./index.css"
import { Grid  } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import Daily from "./components/Daily";
import Display from "./components/Display";
import Input from "./components/Input";



const newTheme = createTheme({
  palette: {
    primary: {
      main: "#03a9f4"
    } ,
    secondary:{
      main: "#f50057"
    }
  },
  typography: {
    fontFamily: "Rubik",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  }
})
    





function App() {
  const [input, setInputField] = useState("");
  const [weather, setWeather] = useState("");
  const [cityName, setCityName] = useState("");
  const [clouds, setClouds] = useState (false)
  const [rain, setRain] = useState (false)
  const [sunny, setSunny] = useState (false)
  const [population, setPopulation] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [daily, setDaily] = useState({ 
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    sea_level: 0,
    grnd_level: 0,
    humidity: 0,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputField(e.target.value);
    console.log(input);
  }


  async function handleClick() {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${input}&mode=json&units=metric&appid=783e8d99d8f427f74c5920c808625b77`
    );
    const data = await res.json();
    console.log(data.city.name);

    setCityName(data.city.name);
    setPopulation(data.city.population);
    setTemperature(data.list[0].main.temp);
    setWeather(data.list[0].weather[0].main);
    setDaily({
      feels_like: data.list[0].main.feels_like,
      temp_min: data.list[0].main.temp_min,
      temp_max: data.list[0].main.temp_max,
      sea_level: data.list[0].main.sea_level,
      grnd_level: data.list[0].main.grnd_level,
      humidity: data.list[0].main.humidity,
    })
 
    // async function iconUpdate () {
    // } if (weather && weather == "Clouds") {
    //     setClouds(true)
    //     console.log("it is cloudy")
    //   }  else  {
  
    //     if (weather && weather == "Clear") {
    //       setSunny(true)
    //       console.log("it is a clear day")
    //     }
    //   } 
  



    // iconUpdate()
    
    
  }
  
 

  

  return (
<ThemeProvider theme={newTheme}>
    

      <Grid  
      container 
      display="flex" 
      flexDirection="column"
      direction-column="true"
      justifyContent="center" 
      alignItems="center"
      >
      
    
        <Input         
         onChange={handleChange} 
         onClick={handleClick} />
         
        <Display
          name={cityName}
          population={population}
          temperature={temperature}
          weather={weather}
                    />
          
        
       
        
      </Grid>

        <Daily 
        
        feels_like={daily.feels_like}
        temp_min={daily.temp_min}
        temp_max={daily.temp_max}
        sea_level={daily.sea_level}
        grnd_level={daily.grnd_level}
        humidity={daily.humidity}
        />
    
    </ThemeProvider>
  );
}

export default App;
