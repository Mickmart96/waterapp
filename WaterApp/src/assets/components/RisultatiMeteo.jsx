import React from 'react';
import { CiTempHigh } from 'react-icons/ci';
import { WiStrongWind, WiRaindrops, WiThermometer, WiThermometerExterior, WiCloudy } from 'react-icons/wi';
import { Row, Card, Container, Col } from 'react-bootstrap';

const RisultatiMeteo = ({ city, weatherData, day }) => (
  <Container fluid>
    {weatherData && (
      <Card className="text-center rounded-5 w-50 d-flex transparent-card mx-auto">
        <Card.Header className="display-3 text-white">{city.toUpperCase()}</Card.Header>
        <Card.Body className="d-flex justify-content-between flex-wrap">
          <Card.Title className="display-2 text-white">
            <CiTempHigh />
            {weatherData.main.temp}°C
          </Card.Title>
          <div className="text-section Row">
            <div className="text-white">
              <p>
                <WiThermometer style={{ fontSize: '1.7em' }} /> {weatherData.main.temp_max}°C
              </p>
            </div>
            <div className="text-white">
              <p>
                <WiThermometerExterior style={{ fontSize: '1.7em' }} /> {weatherData.main.temp_min}°C
              </p>
            </div>
            <div className="text-white">
              <p className="text-white">
                <WiRaindrops style={{ fontSize: '2em' }} />
                {weatherData.main.humidity}%
              </p>
            </div>
          </div>
          <div className="text-section">
            <p className="text-white">
              <WiCloudy style={{ fontSize: '1.7em' }} /> {weatherData.weather[0].description}
            </p>
            <p className="text-white">
              <WiStrongWind style={{ fontSize: '1.8em' }} />
              {weatherData.wind.speed}KM/h
            </p>
          </div>
        </Card.Body>
      </Card>
    )}
    <br />
    {day && (
      <Container className='text-center'>
        <Row>
          <Col>
            <div className="text-white">
              <div className="text-section Row">
                <h2 className="text-white">OGGI</h2>
                <div className="text-white">
                  <p className="h5"> <CiTempHigh style={{ fontSize: '1.7em' }}/>{day.list[0].main.temp}°C</p>
                  <p className="h5"><WiRaindrops style={{ fontSize: '2em' }} />{day.list[0].main.humidity}%</p>
                  <p className="h5"><WiStrongWind style={{ fontSize: '1.8em' }} />{day.list[0].wind.speed}km/h</p>
                  <p className="h5"><WiCloudy style={{ fontSize: '1.7em' }} />{day.list[0].weather[0].description}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="text-white">
              <div className="text-section Row">
                <h2 className="text-white">DOMANI</h2>
                <div className="text-white">
                  <p className="h5"><CiTempHigh style={{ fontSize: '1.7em' }}/>{day.list[8].main.temp}°C</p>
                  <p className="h5"><WiRaindrops style={{ fontSize: '2em' }} />{day.list[8].main.humidity}%</p>
                  <p className="h5"><WiStrongWind style={{ fontSize: '1.8em' }} />{day.list[8].wind.speed}km/h</p>
                  <p className="h5"><WiCloudy style={{ fontSize: '1.7em' }} />{day.list[8].weather[0].description}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="text-white">
              <div className="text-section Row">
                <h2 className="text-white">DOPODOMANI</h2>
                <div className="text-white">
                  <p className="h5"> <CiTempHigh style={{ fontSize: '1.7em' }}/>{day.list[16].main.temp}°C</p>
                  <p className="h5"> <WiRaindrops style={{ fontSize: '2em' }} />{day.list[16].main.humidity}%</p>
                  <p className="h5"><WiStrongWind style={{ fontSize: '1.8em' }} />{day.list[16].wind.speed}km/h</p>
                  <p className="h5"><WiCloudy style={{ fontSize: '1.7em' }} />{day.list[16].weather[0].description}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )}
  </Container>
);

export default RisultatiMeteo;