import React from "react";
import { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Clock } from "react-bootstrap-icons";






const URL = `https://api.open-meteo.com/v1/forecast?latitude=36.6875&longitude=4.0625&hourly=temperature_2m,precipitation_probability&daily=weathercode,sunrise,sunset&current_weather=true&timezone=auto`;
const URL2 = `https://api.open-meteo.com/v1/forecast?latitude=36.6875&longitude=4.0625&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`


function Tizi() {


  const [sunset, setsunset] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
     const result = await fetch(URL)
     result.json().then(json=>{
      setsunset(json.daily.sunset[0].split("T")[1]);     })
     
     }
     
    fetchData();
  }, []);


  const [sunrise, setsunrise] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
     const result = await fetch(URL)
     result.json().then(json=>{
      setsunrise(json.daily.sunrise[0].split('T')[1]);
     })
     
     }
     
    fetchData();
  }, []);



  useEffect(() => {
    document.title = 'Weather in Tizi-Ouzou';
  }, []);


  const [wind, setwind] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
     const result = await fetch(URL)
     result.json().then(json=>{
       setwind(json.current_weather.windspeed);
     })
     
     }
     
    fetchData();
  }, []);


 const [temp, setTemp] = useState(0)

 useEffect(() => {
   const fetchData = async () => {
    const result = await fetch(URL)
    result.json().then(json=>{
      setTemp(json.current_weather.temperature);
    })
    
    }
    
   fetchData();
 }, []);

 const [tempt, setTempt] = useState(0)

 useEffect(() => {
   const fetchData = async () => {
     const result = await fetch(URL2)
     result.json().then(json=>{
       setTempt(json.daily.temperature_2m_max[1]);
      })
      }
   
  fetchData();
}, []);





 const [winddir, setwinddir] = useState(0)

 useEffect(() => {
   const fetchData = async () => {
    const result = await fetch(URL)
    result.json().then(json=>{
      setwinddir(json.current_weather.winddirection);
    })
    
    }
    
   fetchData();
 }, []);

 let danger = ""
 let styles = {}

 if(temp > 14){
    danger = "Very nice day for a walk!";
    styles = {
      popup:{
        color: "#0283bf",
      }
    }
 }
 else if(temp > 8 && temp <= 14){
    danger = "It could be a little cold for a walk!"
    styles = {
      popup:{
        color: "#de984e",
      }
    }
 }
 else{
    danger = "Too cold for a walk!"
    styles = {
      popup:{
        color: "#b30505",
      }
    }
 }


 function test(){
  if(document.querySelector(".sets") != null){
    document.querySelector("#today").innerHTML ="tommorow's temperature: <br>" + tempt +"C"; 
  }};


  return (
    <div className="Alger text-center">
      <div className="header display-1"><b>TIZI-OUZOU</b> WEATHER NOW</div>
      <div className="place" >
        <Link to="/Blida">ALGER</Link>
        <Link to="/Tizi">TIZI-OUZOU</Link>
        <Link to="/Alger">BOUMERDES</Link>
        <Link to="/">HOME</Link>

      </div>
      

      <div className="bi bi-arrow-right"></div> 
      <hr class="hr" />
      <div className="place" >
        <Link to="/Imagest">Images</Link>
        <Link to="/Restat">Restaurants</Link>
        <Link to="/Alger">Museums</Link>
      </div>
      <div className="sets d-flex flex-column">
        <div id="today" onClick={test} >Click for Tommorow!</div>
        <div className="p-2 popup" style={styles.popup} dangerouslySetInnerHTML={{__html: danger }} />
        <div className="p-2">temperature: {temp}C</div>
        <div className="p-2">wind speed: {wind}km/h</div>
        <div className="p-2">wind direction: {winddir}°</div>
        <div className="p-2">sunrise: {sunrise}<Clock /></div>
        <div className="p-2">sunset: {sunset}<Clock /></div>
      </div>
    </div>
  );
}

export default Tizi;
