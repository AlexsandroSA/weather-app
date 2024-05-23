import React, { useState, useEffect, useMemo, useCallback } from "react";
import { appName, appVersion } from "@/helpers/envManager";
import { getWeatherByCoords } from "@/api/services/weather.service";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ICON_ENUM } from "@/enums/icons.enum";
import { TIcon } from "@/types/icon.type";

interface ErrorMessage {
  status: string;
  message: string;
}

interface Weather {
  temp: number;
  type: TIcon;
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

  async function handleClickLoadWeather() {
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
    <div>
      <Card className="w-80">
        <CardHeader>
          <CardTitle>{appName}</CardTitle>
        </CardHeader>

        <CardContent>
          {error && error.message && <p>{error.message}</p>}

          {weather && (
            <div className="flex flex-row justify-between items-center">
              <div>
                <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  {weather.temp}°C
                </h3>
                <p className="weather-location">
                  {weather.name}, {weather.country}
                </p>
              </div>

              <figure>
                <img
                  className="w-24"
                  src={ICON_ENUM[weather.type]}
                  alt={weather.type}
                />
                <figcaption></figcaption>
              </figure>
            </div>
          )}

          {!weather && (
            <Button className="w-full" onClick={handleClickLoadWeather}>
              View your weather
            </Button>
          )}
        </CardContent>

        <CardFooter>
          <p className="text-sm text-muted-foreground">Version {appVersion}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default App;
