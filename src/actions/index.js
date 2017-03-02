// axios allows us to make AJAX requests from the browser without having to
// import a large library such as jquery
import axios from 'axios'

const API_KEY = 'ef328b71e4664319163442c800054e65';

// using the backticks with URL allows us to inject a variable with string interpolation
// const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// API Call Template 
// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}


export const FETCH_WEATHER = 'FETCH_WEATHER';

// whenever someone calls a fetchWeather action, they're going to pass a city name
export function fetchWeather(city) {
	const URL = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(URL);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}