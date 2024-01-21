import { CiTempHigh } from "react-icons/ci"; 

import { WiStrongWind } from "react-icons/wi"; 
import { WiRaindrops } from "react-icons/wi"; 
import { WiThermometer } from "react-icons/wi"; 
import { WiThermometerExterior } from "react-icons/wi"; 
import { WiCloudy } from "react-icons/wi"; 
 
import Card from 'react-bootstrap/Card';



const RisultatiMeteo = ({city, weatherData}) => (
    <>
      {weatherData && (
 <Card className="text-center rounded-5 w-50 d-flex transparent-card">
 <Card.Header className='display-3 text-white'>{city}</Card.Header>
 <Card.Body className="d-flex justify-content-between flex-wrap">
 <Card.Title className='display-2 text-white'><CiTempHigh />{weatherData.main.temp}°C</Card.Title>
   <div className="text-section Row">
    <div className="text-white">
       <p ><WiThermometer style={{ fontSize: '1.7em' }}/> {weatherData.main.temp_max}°C</p>
       <p><WiThermometerExterior style={{ fontSize: '1.7em' }}/> {weatherData.main.temp_min}°C</p>
       <p className='text-white'><WiRaindrops style={{ fontSize: '2em' }}/>{weatherData.main.humidity}%</p>
     </div>
   </div>
   <div className="text-section">
     <p className='text-white'><WiCloudy style={{ fontSize: '1.7em' }}/> {weatherData.weather[0].description}</p>
     <p className='text-white'><WiStrongWind style={{ fontSize: '1.8em' }}/>{weatherData.wind.speed}KM/h</p>
   </div>
  
 </Card.Body>
</Card>
      )}


    </>
  );

  export default RisultatiMeteo;