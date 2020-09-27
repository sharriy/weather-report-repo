import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Cities from './cities/Cities';
import Form from './cities/Form';
import Try1 from './cities/try1';


import { Provider } from 'react-redux';
import store from '../store';

var itemToRender="loading";

class App extends Component{

  constructor(props){
    super(props);
  }

/*  componentDidMount() {
    fetch("/weathers", {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
      .then(response => {
      return response.json();
      //return response.text();
      })
      .then(
        data => {
        this.setState(() => {
          return {
            data
          };
        });
      });
  }*/



  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
            <div className="container">
        
<Form/>
<Cities/>
            </div>
        </Fragment>
      </Provider>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));
