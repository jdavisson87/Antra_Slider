import React, { ReactElement } from 'react';
import Slider from './components/inputComp'
import './App.scss';

function App():ReactElement {
  return (
  
      <Slider variant='default' color='primary'  ISdisabled={false}/>
      
    );
}

export default App;
