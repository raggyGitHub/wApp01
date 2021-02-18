import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import {
	CLOUD,
	SUN,
	RAIN,
	SNOW,
	THUNDER,
	DRIZZLE,
} from "./../../../constants/weather";
import "./styles.css";

const icons = {
	[CLOUD]: "cloud",
	[SUN]: "day-sunny",
	[RAIN]: "rain",
	[SNOW]: "snow",
	[THUNDER]: "day-thunderstorm",
	[DRIZZLE]: "day-showers",
};
//funcion requerida por el componente WeatherTemperature
const getweatherIcon = (weatherState) => {
	const icon = icons[weatherState];

	const sizeIcon = "3x";
	if (icon)
		return <WeatherIcons className="wIcon" name={icon} size={sizeIcon} />;
	else
		return (
			<WeatherIcons className="wIcon" name={"day-sunny"} size={sizeIcon} />
		);
};
//componente
const WeatherTemperature = ({ temperature, weatherState }) => (
	<div className="weatherTemperatureCont">
		{getweatherIcon(weatherState)}
		<span className="temperature">{` ${temperature}`}</span>
		<span className="temperatureType">{`C°`}</span>
	</div>
);

//usando ProtoTypes para los parametros requeridos

WeatherTemperature.propTypes = {
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
