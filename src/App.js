import React from 'react';

import Leftside from './leftwing'
import Loginform from './formwing'


const App = () => {
  return (
    <div style ={{display: 'flex', background: '#f0f2f5'}}>
        <div style ={{marginLeft: '400px', marginTop: '150px'}}>
          <Leftside />
        </div>
        <div style ={{marginLeft: '100px', marginTop: '150px'}}>
          <Loginform />
        </div>
        <div  style ={{ marginTop: '40em'}}> </div>

    </div> 
  );
};

export default App;