import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' }

		this.onInputChange = this.onInputChange.bind(this)
	}

	onInputChange(event) {
		this.setState({ term: event.target.value })
	}

	render() {
		return (
			<form className="input-group">
				<input 
					value={this.state.term}
					placeholder="Get a five-day forecast on your favorite cities."
					className="form-control"
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}

export default SearchBar;