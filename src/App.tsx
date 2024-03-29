import React, { useState, useEffect, useMemo, useCallback } from "react";
import { appName, appVersion } from "./helpers/envManager";
import { getWeatherByCoords } from "./api/services/weather.service";
import { Card } from "./components";

interface ErrorMessage {
  status: string;
  message: string;
}

interface Weather {
  temp: number;
  type: string;
  name: string;
  country: string;
}

interface Position {
  lat: number;
  lon: number;
}

const App: React.FC = () => {
  const [error, setError] = useState<ErrorMessage>();
  const [weather, setWeather] = useState<Weather>();
  const [position, setPosition] = useState<Position>({ lat: 0, lon: 0 });

  const geo = useMemo(() => navigator.geolocation, []);
  const lat = position ? position.lat : 0;
  const lon = position ? position.lon : 0;

  const savePosition = useCallback(() => {
    geo.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setPosition({ lat: latitude, lon: longitude });
    });
  }, [geo]);

  async function onClickLoadWeather() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await getWeatherByCoords(lat, lon);

    const data = {
      temp: response.temp,
      type: response.type,
      name: response.name,
      country: response.country,
    };

    setWeather(data);
  }

  useEffect(() => {
    if (!geo) {
      setError({ message: "Geolocation is not supported", status: "" });
      return;
    }

    savePosition();
  }, [geo, savePosition]);

  return (
    <Card title={appName}>
      <div className="weather">
        {error && error.message && <p>{error.message}</p>}

        {weather && (
          <>
            <div className={`weather-image ${weather.type}`} />
            <p className="weather-temperature">{weather.temp}°C</p>
            <p className="weather-location">
              {weather.name}, {weather.country}
            </p>
          </>
        )}

        {!weather && (
          <button className="button is-large" onClick={onClickLoadWeather}>
            View your weather
          </button>
        )}
        
        <p>Version {appVersion}</p>
      </div>
    </Card>
  );
};

export default App;
