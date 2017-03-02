import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map((weather) => weather.main.temp);
		const humidities = cityData.list.map((weather) => weather.main.humidity);
		const pressures = cityData.list.map((weather) => weather.main.pressure);

		return (
			<tr key={name}>
				<td>{name}</td>
				<td><Chart color="green" data={temps} /></td>
				<td><Chart color="black" data={humidities} /></td>
				<td><Chart color="blue" data={pressures} /></td>
			</tr>
		);
	}

	render() {
		console.log(this.props.weather)
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({ weather }) {
	return { weather }
}

export default connect(mapStateToProps)(WeatherList);
