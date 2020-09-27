import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCity, getWeather } from '../../actions/cities';


export class Form extends Component {
  state = {
    name: ''
  };

  static propTypes = {
    addCity: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]:
    e.target.value});

  onSubmit = e => {
    e.preventDefault();
  //  const { name } = this.state;
    const city = this.state;
    this.props.addCity(city);
    this.props.getWeather();
  };

  render() {
    const { name } = this.state;
    return (


      <div className="card card-body mt-4 mb-4">

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Add city to know its weather</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>

 )
  }
}

export default connect(null, { addCity, getWeather })(Form);
