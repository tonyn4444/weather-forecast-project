import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions'

class SearchBar extends Component {
	constructor(props) {
		super(props);

		// initializes SearchBar with empty state object of ''
		this.state = {term: ''}

		// binds the onInputChange function to SearchBar (this)
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	// sets 'term' state to user input typed into search bar
	onInputChange(event) {
		this.setState({term: event.target.value})
	}

	// prevents default action of form from being submitted and making POST request to server
	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					value={this.state.term} 
					placeholder="Get a five-day forecast of your favorite cities." 
					onChange={this.onInputChange}
					className="form-control" />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);