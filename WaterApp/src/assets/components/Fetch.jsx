import React, { useState } from "react";
import BarraRicerca from "./Barradiricerca";
import RisultatiMeteo from "./RisultatiMeteo";
import { Container } from "react-bootstrap";

function FetchWeather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [day, setDay] = useState(null);

  const FetchCity = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f64327af1492cb6b843fb2420be96e9&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        fetchForecast(); // Avvia il recupero dei dati di previsione solo se la ricerca corrente ha avuto successo
      } else {
        setError("Città non trovata. Riprova con un altro nome.");
      }
    } catch (error) {
      console.error("Errore nel recupero dei dati meteorologici:", error);
    }
  };
 
  const fetchForecast = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3f64327af1492cb6b843fb2420be96e9&lang=en&units=metric`
      );
      const data = await response.json();
      setDay(data);
    }
   
    catch (error) {
      console.error("Errore nel recupero dei dati di previsione:", error);
    }
  };

  const handleSearch = () => {
    if (city.length > 3) {
      FetchCity();
    }
  };

  return (
    <>
      <Container className="p-5 radius my-5 rounded-5">
        <BarraRicerca
          city={city}
          handleSearch={handleSearch}
          setCity={setCity}
        />
      </Container>
      <Container className="d-flex justify-content-center">
        <RisultatiMeteo city={city} weatherData={weatherData} day={day}/>
      </Container>
    </>
  );
}

export default FetchWeather;