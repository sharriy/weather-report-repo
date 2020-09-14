import React, { useState, useEffect } from 'react'
import axios from 'axios';
const App = props => {
    useEffect(() => {
      axios.get('/weather')
        .then(res => setState(res.data))
    }, [])
const [state, setState] = useState('')
return(
    <div>
      <p>{state.weatherinfo}</p>
    </div>
 )
};
export default App;
