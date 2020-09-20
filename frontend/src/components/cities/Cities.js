import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCities, removeCity } from '../../actions/cities';
import axios from 'axios';



export class Cities extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
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
  }

  static propTypes = {
    cities: PropTypes.array.isRequired,
    getCities: PropTypes.func.isRequired,
    removeCity: PropTypes.func.isRequired

  }

  onRemove = (city) => {

    var id = this.props.cities.map( (city) =>
                                            { if(city.name==name.city) return city.id }
                                          );
    this.props.removeCity.bind(this,id);
  };

  render() {
    return (
      <Fragment>
        <h2>Weather of added cities</h2>
        <section className="container">
                          <div className="columns">
                              <div className="column is-offset-4 is-4">

                                {this.state.data.map((name) => {return(
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
                                        <br/><button onClick= {this.onRemove(name.city)} className="btn btn-danger btn-sm">
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
  cities: state.cities.cities
});


export default connect(
  mapStateToProps,
  { getCities, removeCity }
)(Cities);
