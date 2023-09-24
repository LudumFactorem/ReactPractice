import axios from 'axios'
import background from '../public/images/nyc.jpeg'

// fetched from https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation_probability,rain,showers,snowfall,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&timezone=America%2FNew_York
const weather = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation_probability,rain,showers,snowfall,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&timezone=America%2FNew_York")

console.log(weather)

const currWeather = {
  timeZone: weather.data.timezone,
  latitude: weather.data.latitude,
  longitude: weather.data.longitude,
  temperature: weather.data.current_weather.temperature,
  time: weather.data.current_weather.time,
  windSpeed: weather.data.current_weather.windspeed,
  elevation: weather.data.elevation
}
console.log("weather: ", weather)
export default function Weather() {
    return (
      <>
        <div
          className="content" style={{ backgroundImage: `url(${background})`, minHeight: "100vh"}}>
          <h2>This is the current weather!</h2>
          <a>Time Zone: {currWeather.timeZone}</a>
          <a>Time Zone: {currWeather.latitude}</a>
          <a>Time Zone: {currWeather.longitude}</a>
          <a>Temperature: {currWeather.temperature}</a>
          <a>Time: {currWeather.time}</a>
          <a>Wind Speed: {currWeather.windSpeed}</a>
          <a>Elevation: {currWeather.elevation}</a>
        </div>
      </>

    );
  }
  