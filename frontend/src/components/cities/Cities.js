import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCities } from '../../actions/cities';

export class Cities extends Component {
  static propTypes = {
  cities: PropTypes.array.isRequired,
}

  componentDidMount() {
    this.props.getCities();
}

  render() {
    return (
      <Fragment>
              <h2>Cities</h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  { this.props.cities.map(city => (
                    <tr key={city.name}>
                      <td>{city.name}</td>
                      <td>
                        <button className="btn btn-danger btn-sm">
                        Remove City</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cities: state.cities.cities
});

export default connect(mapStateToProps, { getCities })(Cities);
