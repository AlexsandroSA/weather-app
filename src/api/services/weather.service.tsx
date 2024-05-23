import { apiUrl, apikey } from '../../helpers/envManager';


export async function getWeatherByCoords(lat: number, lon: number) {
    const data = await fetch(`${apiUrl}/weather?lat=${lat}&lon=${lon}&appid=${apikey}`)
        .then(response => response.json())
        .then(data => {
            return {
                temp: Math.round(data.main.temp -273.15),
                type: data.weather[0].main.toLocaleLowerCase(),
                name: data.name,
                country: data.sys.country,
            };
        })
        .catch(e => console.log(e));

    return data;
}
