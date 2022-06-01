import React, { ReactElement } from 'react';
import Slider from './components/inputComp'
import './App.scss';

function App():ReactElement {
  return (
  
      <Slider Max={350} color='coldefault' Step={10}/>
      
    );
}

export default App;
