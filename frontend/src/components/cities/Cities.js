import React, { Component, Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCities, removeCity, getWeather } from '../../actions/cities';
import axios from 'axios';


export class Cities extends PureComponent {

  /*constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

  }*/

  /*removeCity = (name) => {
    e.preventDefault();
  //  const { name } = this.state;
    const id = this.state;
    this.props.removeCity(id);
  };*/

  componentDidMount() {
    this.props.getCities();
    this.props.getWeather();}
  /*  axios
    .get("/weathers")
    .then(res => {return res.data})
    .then(data => {
      this.setState(() => {
        return {
          data: data
        };
      });
    })
    .catch(err => console.log(err));
  }*/

/*  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update');
    return this.props.updateCitiesList;
  }

  componentDidUpdate() {
    this.props.getCities();

    axios
    .get("/weathers")
    .then(res => {return res.data})
    .then(data => {
      this.setState(() => {
        return {
          data: data
        };
      });
    })
    .catch(err => console.log(err));
  }*/

  static propTypes = {
    cities: PropTypes.array.isRequired,
    getCities: PropTypes.func.isRequired,
    removeCity: PropTypes.func.isRequired,
    getWeather: PropTypes.func.isRequired,
  }


  render() {
    return (
      <Fragment>
        <h2>Weather of added cities</h2>
        <section className="container">
                          <div className="columns">
                              <div className="column is-offset-4 is-4">

                                {this.props.data.map((name) => {return(
                                <div className="box">
                                  <article className="media">
                                    <div className="media-left">
                                      <figure className="image is-50x50">

                                        <img src={`http://openweathermap.org/img/w/${name.icon}.png`} alt="Image"/>
                                      </figure>
                                    </div>
                                    <div className="media-content">
                                      <div className="content">
                                        <p>
                                          <span className="title">{name.city}</span>
                                          <br/>
                                          <span className="subtitle">{ name.temperature} ° F</span>
                                          <br/> { name.description}
                                        </p>
                                        <br/><button onClick={this.props.removeCity.bind(this,name.id)} className="btn btn-danger btn-sm">
                              Remove City</button>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                              );})
      }

                              </div>
                          </div>

                  </section>


        </Fragment>

)
}
}
const mapStateToProps = state => ({
  cities: state.cities.cities,
  data:state.cities.data,
});


export default connect(
  mapStateToProps,
  { getCities, removeCity, getWeather}
)(Cities);
