import Card from 'react-bootstrap/Card';

const RisultatiMeteo = ({city, weatherData}) => (
    <>
      {weatherData && (
        <Card className="text-center rounded-5 w-50 d-flex " >
        <Card.Header className='display-3'>{city}</Card.Header>
        <Card.Body>
          <Card.Title className='display-1'>{weatherData.main.temp}°C</Card.Title>

          <Card.Text>Temp max: {weatherData.main.temp_max}°C</Card.Text>
          <Card.Text>Temp min: {weatherData.main.temp_min}°C</Card.Text>
          <Card.Text>Humidity: {weatherData.main.humidity}%</Card.Text>
          <Card.Text>Weather: {weatherData.weather[0].description}</Card.Text>
          <Card.Text>Wind: {weatherData.wind.speed}KM/h</Card.Text>

        </Card.Body>
      </Card>
      )}


    </>
  );

  export default RisultatiMeteo;