import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PropTypes } from "prop-types";
import getUrlWeatherByCity from "./../../services/getUrlWeatherByCity";
//import { api_weather } from "./../../constants/api_urls";
//import transformWeather from "./../../services/transformWeather";
import Location from "./Location";
import WeatherData from "./WeatherData/WeatherData";
import "./styles.css";

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
	<div className="weatherLocationCont" onClick={onWeatherLocationClick}>
		<Location city={city} />
		{data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
	</div>
);

WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired,
	onWeatherLocationClick: PropTypes.func.isRequired,
	data: PropTypes.shape({
		temperature: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.string.isRequired,
	}),
}
export default WeatherLocation;
