import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
	// return <h1>"Render Items"</h1>;
	return forecastData.map(forecast => (
		<ForecastItem
			key={`${forecast.weekDay}${forecast.hour}`}
			weekDay={forecast.weekDay}
			hour={forecast.hour}
			data={forecast.data}>
		</ForecastItem>));

}

const renderProgress = () => {
	return <h3>"Cargando Pronostico Extendido..."</h3>;
}

const ForecastExtended = ({ city, forecastData }) => (

	<div>
		<h2 className='forecast-title'>
			Pronostico Extendido para {city}
		</h2>
		{forecastData ?
			renderForecastItemDays(forecastData) :
			renderProgress()
		}
	</div>
);

ForecastExtended.propTypes = {
	city: PropTypes.string.isRequired,
	forecastData: PropTypes.array,
}

export default ForecastExtended;