import React, { Component } from "react";
// import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Toolbar } from "@material-ui/core";
import { Grid, Col, Row } from 'react-flexbox-grid';
// import PropTypes from 'prop-types';
import LocationListContainer from "./containers/LocationListContainer";
// import { setCity } from './actions';
//import { store } from './store';
import "./App.css";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";


const cities = [
	'Santa Cruz de la Sierra,bo',
	'Potosi,bo',
	'Sucre,bo',
	'La Paz,bo',
	'Cochabamba,bo',
	'Tarija,bo',
	'Pando,bo',
	'Beni,bo',
	'Oruro,bo',
];


class App extends Component {

	render() {

		return (
			<Grid >
				<Row>
					<AppBar position='sticky'  >
						<Toolbar>
							<Typography variant='h3' color='inherit'>
								Wheather App
							</Typography>
						</Toolbar>
					</AppBar>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<LocationListContainer
							cities={cities}
						>
						</LocationListContainer>
					</Col>
					<Col xs={12} md={6}>
						<Paper elevation={4}>
							<div className="details">
								<ForecastExtendedContainer ></ForecastExtendedContainer>
							</div>
						</Paper>
					</Col>
				</Row>


			</Grid>
		);
	}
}



//validamos que el tipo setCity sea del tipo funcion requerido

// App.propTypes = {
// 	setCity: PropTypes.func.isRequired,
// }
/* mapDispatchToProps retorna un 
 'objeto' que injecta 'funciones' o una 'funcion' a las propiedades
 'props' del componente App */

// const mapDispatchToProps = dispatch => ({

// 	setCity: value => dispatch(setCity(value))

//el primer setCity es el nommbre de la propiedad tipo funcion dentro de ese objeto
// });

export default App;

/*connect es un HighOrderComponent que es una funcion
 que toma como parametro un componente que retorna otro componente */

