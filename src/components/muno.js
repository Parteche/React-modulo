import React from 'react';


const muno = () => {
    return (
        <div>
            <h1> Soy el componente muno </h1>
        </div>
    );
}


import mdos from './components/mdos';

import './App.css';

function App() {

  return (
    <div>

      <muno/>

    </div>
  );
}


export default muno;