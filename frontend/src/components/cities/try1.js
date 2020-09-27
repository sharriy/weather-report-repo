import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCities, removeCity } from '../../actions/cities';
import axios from 'axios';
import { addCity, updateList } from '../../actions/cities';




export class Try1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name:'',
    };

  }

  onChange = e => this.setState({ [e.target.name]:
    e.target.value});

  onSubmit = e => {
    e.preventDefault();
    const { name } = this.state.name;
    const city = { name };
    this.props.addCity(city);
  };


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

  /*shouldComponentUpdate(nextProps, nextState) {
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
  }
*/
  static propTypes = {
    cities: PropTypes.array.isRequired,
    getCities: PropTypes.func.isRequired,
    removeCity: PropTypes.func.isRequired

  }


  render() {
    const { name } = this.state.name;
    return (
      <Fragment>
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
                                        <br/><button className="btn btn-danger btn-sm">
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
  updateCitiesList: state.cities.updateCitiesList
});


export default connect(
  mapStateToProps,
  { getCities, removeCity, addCity }
)(Try1);
